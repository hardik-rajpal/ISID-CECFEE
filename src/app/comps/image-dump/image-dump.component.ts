import { Component, Input, OnInit } from '@angular/core';
import staticfs from '../../../assets/staticfs.json'
@Component({
  selector: 'app-image-dump',
  templateUrl: './image-dump.component.html',
  styleUrls: ['./image-dump.component.css']
})
export class ImageDumpComponent implements OnInit{
  @Input() folderPath!:string;
  images:string[] = []
  ngOnInit(): void {
    let folderKeys:string[] = this.folderPath.split('/')
    if(folderKeys[0]==='assets'){
      folderKeys=folderKeys.slice(1)
      this.folderPath = folderKeys.join('/')
    }
    let currentFolder:any = staticfs;
    for(let key of folderKeys){
      currentFolder = currentFolder.subfolders.find((folder:any)=>folder.folder===key)
      if(currentFolder===undefined){
        throw `Path provided "${this.folderPath}" does not exist`
      }
    }
    this.images = currentFolder.files.map((filename:string)=>(`assets/${this.folderPath}/${filename}`))
  }
}
