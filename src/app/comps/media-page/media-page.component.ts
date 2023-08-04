import { Component } from '@angular/core';
import { mediaData, mediaPageSpec } from 'src/data/media';

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.scss']
})
export class MediaPageComponent {
  data:mediaPageSpec = mediaData;
}
