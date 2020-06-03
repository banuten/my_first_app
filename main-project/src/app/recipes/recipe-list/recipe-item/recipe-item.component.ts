import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input() recipe: Recipe;

  constructor(private recipeservice: RecipeService) {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeservice.recipeselected.emit(this.recipe);
  }
}
