import { Component, HostListener, OnInit } from '@angular/core';
import { FoodsService } from './foods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  pageLoaded: any = false;

  constructor(public land: FoodsService) { }

  async ngOnInit() {

  }



  @HostListener('window:load')
  onload() {
    this.pageLoaded = true;
  }


  closeCountry() {
    if (this.land.displayCountry == true) {
      this.land.displayCountry = false;
    }
  }
}
