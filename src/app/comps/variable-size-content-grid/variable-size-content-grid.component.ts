import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-variable-size-content-grid',
  templateUrl: './variable-size-content-grid.component.html',
  styleUrls: ['./variable-size-content-grid.component.scss']
})
export class VariableSizeContentGridComponent {
  @Input() cols:number=1;
  @ViewChild('mainDiv') mainDiv!:ElementRef<HTMLDivElement>; 
  orderSet:boolean = false;
  viewInitDone:boolean = false;
  constructor(private renderer:Renderer2){}

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    console.log(event.target.innerWidth);
  }
  getGridTemplateString(ncols:number){
    const percentageString = Math.floor(100/ncols).toString() + '%'
    let parts = [];
    for(let i=0;i<ncols;i++){
      parts.push(percentageString);
    }
    return parts.join(' ')
  }
  getIndexHash(heightInds:number[][]){
    let copy = [...heightInds]
    let orderKey = copy.sort().map((value)=>value[0].toString()).join(',');
    return orderKey;
  }
  getPrettyListOrder2(heightInds:number[][],cache=true){
    let ans:{'children':number[][],'total':number}[] = [];
    let copy = [...heightInds];
    copy.sort((a,b)=>b[0]-a[0]);
    let index = 0, j=0;
    for(let i=0;i<this.cols;i++){
      ans.push({children:[],total:0});
    }
    let lastHeightPlus = 1,currHeightPlus=0;
    while(j<copy.length){
        ans[index].children.push(copy[j]);
        currHeightPlus+=copy[j][0];
        ans[index].total+=copy[j][0];
        j+=1;
        ans.sort((a,b)=>a.total - b.total);
    }
    return ans.map((val)=>val.children);
  }
  reorderItems(){
    if(this.orderSet){
      console.log('order already set, returning.')
      return;
    }
    let newDiv = this.renderer.createElement('div');
    const gridTemplateString = this.getGridTemplateString(this.cols);
    this.renderer.setStyle(newDiv,'display','grid')
    this.renderer.setStyle(newDiv,'gridTemplateColumns',gridTemplateString);
    let children = this.mainDiv.nativeElement.children;
    let heights = [];
    for(let i=0;i<children.length;i++){
      const child = children.item(i);
      // console.log(child)
      if(child){
        heights.push([(child).children.item(0)!.clientHeight,i]);
      }
    }
    console.log(children)
    console.log(heights)
    let start = new Date();
    if(this.cols===1){
      this.orderSet = true;
      return;
    }
    let reorderedHeights = this.getPrettyListOrder2(heights);
    console.log(((new Date()).valueOf() - start.valueOf())/1000)
    console.log(reorderedHeights);
    const oldLength = this.mainDiv.nativeElement.children.length;
    let newDivs = [];
    for(let i=0;i<reorderedHeights.length;i++){
      let tmpNewDiv = this.renderer.createElement('div');
      this.renderer.setStyle(tmpNewDiv,'display','flex');
      this.renderer.setStyle(tmpNewDiv,'flexDirection','column');
      for(let j=0;j<reorderedHeights[i].length;j++){
        let child = this.mainDiv.nativeElement.childNodes.item(reorderedHeights[i][j][1]).cloneNode(true);
        this.renderer.appendChild(tmpNewDiv,child);
      }
      newDivs.push(tmpNewDiv);
    }
    // this.renderer.appendChild();
    let divParent = this.mainDiv.nativeElement.parentNode;
    for(let contentDiv of newDivs){
      this.renderer.appendChild(newDiv,contentDiv);
    }
    if(divParent!==null){
      this.renderer.appendChild(divParent,newDiv);
      divParent.removeChild(this.mainDiv.nativeElement);
      this.orderSet = true;
      console.log('order set')
    }
    else{
      console.log('orphan div lol')
    }
  }
  ngAfterViewInit(){
    console.log('after view init')
    const gridTemplateString = this.getGridTemplateString(this.cols);
    this.renderer.setStyle(this.mainDiv.nativeElement,'display','grid')
    this.renderer.setStyle(this.mainDiv.nativeElement,'gridTemplateColumns',gridTemplateString); 
    this.viewInitDone = true;
    if(this.orderSet===false){
      setTimeout(() => {
        if(this.orderSet===false){
          console.log('reordering items')
          this.reorderItems();
        }
      }, 1000);  
    }
  }
}
