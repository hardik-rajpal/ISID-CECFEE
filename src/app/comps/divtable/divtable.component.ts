import { Component, Input } from '@angular/core';
import { tableDataSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-divtable',
  templateUrl: './divtable.component.html',
  styleUrls: ['./divtable.component.css']
})
export class DivtableComponent {
  @Input() data!:tableDataSpec;
}
