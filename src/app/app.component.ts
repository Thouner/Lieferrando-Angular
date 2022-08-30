import { Component, HostListener, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  pageLoaded: any = false;

  async ngOnInit() {

  }



  @HostListener('window:load')
  onload() {
    this.pageLoaded = true;
  }




}
