import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-variable-size-content-grid',
  templateUrl: './variable-size-content-grid.component.html',
  styleUrls: ['./variable-size-content-grid.component.scss']
})
export class VariableSizeContentGridComponent {
  @Input() cols:number=1;
  @ViewChild('mainDiv') mainDiv!:ElementRef<HTMLDivElement>; 
  constructor(private renderer:Renderer2){

  }
  getGridTemplateString(ncols:number){
    const percentageString = Math.floor(100/ncols).toString() + '%'
    let parts = [];
    for(let i=0;i<ncols;i++){
      parts.push(percentageString);
    }
    return parts.join(' ')
  }
  findMinimizedDifference(originalArray:number[][]) {
    let minDifference = Infinity;
    let resultIndices1, resultIndices2;
  
    function findPartition(index:number, indices1:number[], indices2:number[]) {
      if (index === originalArray.length) {
        const sum1 = indices1.reduce((sum, i) => sum + originalArray[i][0], 0);
        const sum2 = indices2.reduce((sum, i) => sum + originalArray[i][0], 0);
        const difference = Math.abs(sum1 - sum2);
  
        if (difference < minDifference) {
          minDifference = difference;
          resultIndices1 = indices1.slice();
          resultIndices2 = indices2.slice();
        }
        return;
      }
  
      findPartition(index + 1, indices1.concat(index), indices2);
      findPartition(index + 1, indices1, indices2.concat(index));
    }
  
    findPartition(0, [], []);
  
    return [resultIndices1, resultIndices2];
  }  
  getPrettyList(heightInds:number[][]){
    const [l1,l2] = this.findMinimizedDifference(heightInds);
    //TODO  
    return heightInds;
  }
  reorderItems(){
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
    let reorderedHeights = this.getPrettyList(heights);
    console.log(reorderedHeights);
    const oldLength = this.mainDiv.nativeElement.children.length;
    for(let i=0;i<reorderedHeights.length;i++){
      this.renderer.appendChild(newDiv,(this.mainDiv.nativeElement.childNodes.item(reorderedHeights[i][1])).cloneNode(true));
    }
    let divParent = this.mainDiv.nativeElement.parentNode;
    if(divParent!==null){
      this.renderer.appendChild(divParent,newDiv);
      divParent.removeChild(this.mainDiv.nativeElement);
    }

    else{
      console.log('orphan div lol')
    }
  }
  ngAfterViewInit(){
    const gridTemplateString = this.getGridTemplateString(this.cols);
    this.renderer.setStyle(this.mainDiv.nativeElement,'display','grid')
    this.renderer.setStyle(this.mainDiv.nativeElement,'gridTemplateColumns',gridTemplateString);
    setTimeout(() => {
      this.reorderItems();
    }, 3000);
  }
}
