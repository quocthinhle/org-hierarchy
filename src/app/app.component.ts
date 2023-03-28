import {Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDragEnd} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Note';

  constructor() {

  }

}
