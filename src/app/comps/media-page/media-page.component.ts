import { Component } from '@angular/core';
import { mediaData } from 'src/data/media';

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.css']
})
export class MediaPageComponent {
  data = mediaData;
}
