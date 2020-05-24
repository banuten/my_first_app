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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc5Puu4mfKK2QqZRxGSafjyFO3m1xVo6tvQgJIFsZowx9ydNKs&usqp=CAU'
    ),
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc5Puu4mfKK2QqZRxGSafjyFO3m1xVo6tvQgJIFsZowx9ydNKs&usqp=CAU'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
