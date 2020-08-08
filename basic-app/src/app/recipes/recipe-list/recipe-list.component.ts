import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test1', 'description1', 'https://www.sciencesetavenir.fr/assets/inline-img/2019/04/10/w453-101706-trou-noir-galaxie.jpg'),
    new Recipe('test2', 'description2', 'https://www.sciencesetavenir.fr/assets/inline-img/2019/04/10/w453-101706-trou-noir-galaxie.jpg'),
    new Recipe('test3', 'description3', 'https://www.sciencesetavenir.fr/assets/inline-img/2019/04/10/w453-101706-trou-noir-galaxie.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
