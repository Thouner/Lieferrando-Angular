import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

imageFound:boolean = true;

  constructor(public foods: FoodsService) { }

  async ngOnInit() {
     await this.foods.funcName();
    console.log(this.foods.menus);
  }

}
