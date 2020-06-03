import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeselected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc5Puu4mfKK2QqZRxGSafjyFO3m1xVo6tvQgJIFsZowx9ydNKs&usqp=CAU'
    ),
    new Recipe(
      'Another test recipe',
      'this is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc5Puu4mfKK2QqZRxGSafjyFO3m1xVo6tvQgJIFsZowx9ydNKs&usqp=CAU'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
