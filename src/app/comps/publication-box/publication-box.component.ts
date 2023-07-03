import { Component, Input } from '@angular/core';
import { publication } from 'src/data/research';
import { angloJoinWords } from 'src/data/rtl.utils';

@Component({
  selector: 'app-publication-box',
  templateUrl: './publication-box.component.html',
  styleUrls: ['./publication-box.component.css']
})
export class PublicationBoxComponent {
  @Input() paper!:publication;
  getAuthorText(paper:publication){
    return angloJoinWords(paper.authors);
  }
}
