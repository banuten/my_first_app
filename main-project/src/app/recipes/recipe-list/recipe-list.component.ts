import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'https://www.clipartmax.com/png/middle/328-3287876_recipe-icon-clipart-recipe-cooking-chef-pinch-of-salt-icon.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
