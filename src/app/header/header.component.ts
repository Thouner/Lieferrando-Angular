import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

displayCountry:boolean = false;
  countrys = [
    {
      'country': 'de',
      'name': 'Germany',
      'select': true
    },
    {
      'country': 'au',
      'name': 'Australia',
      'select': false
    },
    {
      'country': 'be',
      'name': 'Belgium',
      'select': false
    },
    {
      'country': 'bg',
      'name': 'Bulgaria',
      'select': false
    },
    {
      'country': 'dk',
      'name': 'Denmark',
      'select': false
    },
    {
      'country': 'fr',
      'name': 'France',
      'select': false
    },
    {
      'country': 'ie',
      'name': 'Ireland',
      'select': false
    },
    {
      'country': 'il',
      'name': 'Israel',
      'select': false
    },
    {
      'country': 'it',
      'name': 'Italy',
      'select': false
    },
    {
      'country': 'ca',
      'name': 'Canada',
      'select': false
    },
    {
      'country': 'lu',
      'name': 'Luxembourg',
      'select': false
    },
    {
      'country': 'nz',
      'name': 'New Zealand',
      'select': false
    },
    {
      'country': 'nl',
      'name': 'Netherlands',
      'select': false
    },
    {
      'country': 'at',
      'name': 'Austria',
      'select': false
    },
    {
      'country': 'pl',
      'name': 'Poland',
      'select': false
    },
    {
      'country': 'ch',
      'name': 'Switzerland',
      'select': false
    },
    {
      'country': 'sk',
      'name': 'Slovakia',
      'select': false
    },
    {
      'country': 'es',
      'name': 'Spain',
      'select': false
    },
    {
      'country': 'us',
      'name': 'USA',
      'select': false
    },
    {
      'country': 'gb',
      'name': 'United Kingdom',
      'select': false
    },
  ];

  constructor(public land : FoodsService) { }

  ngOnInit(): void {
  }

  openCountry(event){
    event.stopPropagation();
    // setTimeout(() => {
    if (this.land.displayCountry == true) {
      this.land.displayCountry = false;
    } else {
      this.land.displayCountry = true;
    }
  // });
  }

  selectCountry(countryIndex) {
    for (let i = 0; i < this.countrys.length; i++) {
      const element = this.countrys[i];
      element.select = false;
    }
    this.countrys[countryIndex].select = true;
  }


  porpagation(event){
    event.stopPropagation();
  }
}
