import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragEnd} from '@angular/cdk/drag-drop';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('dragArea', { static: false }) dragArea: ElementRef | undefined;

  constructor(private router: Router) {

  }

  isNoteRoute() {
    return this.router.url === '/app/home';
    // console.log(this.route.snapshot.routeConfig?.path);
  }

  ngOnInit() {
    console.log(this.router.url);

    console.log('Home Component is here');
  }

  dragEnd($event: CdkDragEnd) {
    console.log($event.source.getFreeDragPosition());
  }
}
