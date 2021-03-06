import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'bookShop';

  @ViewChild('appTitle')
  appTitle!: ElementRef;

  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Press me';
  }
}
