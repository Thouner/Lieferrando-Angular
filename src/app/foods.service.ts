import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  displayCountry:boolean = false;

  menusCategories: string[] = ['best-foods', 'bbqs', 'burgers', 'fried-chicken', 'pizzas', 'porks', 'sausages', 'desserts', 'drinks'];

  menus = [
    {
      'categories': 'best-foods',
      'food': []
    },
    {
      'categories': 'bbqs',
      'food': []
    },
    {
      'categories': 'burgers',
      'food': []
    },
    {
      'categories': 'fried-chicken',
      'food': []
    },
    {
      'categories': 'pizzas',
      'food': []
    },
    {
      'categories': 'porks',
      'food': []
    },
    {
      'categories': 'sausages',
      'food': []
    },
    {
      'categories': 'desserts',
      'food': []
    },
    {
      'categories': 'drinks',
      'food': []
    },
  ];

  constructor() {
    // this.funcName();
    // console.log(this.menus);

  }



  async funcName() {
    for (let i = 0; i < this.menusCategories.length; i++) {
      const categories = this.menusCategories[i];
      let url = `https://ig-food-menus.herokuapp.com/${categories}`;
      const response = await fetch(url);
      let data = await response.json();

      let menuElement = this.menus.filter(menu => menu.categories == `${categories}`)

      for (let j = 0; j < 11; j++) {
        menuElement[0].food.push(data[j])
      }
      // console.log(menuElement);

    }


  }

}
