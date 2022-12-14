import {Pipe, PipeTransform} from '@angular/core';
import {Ingredient} from "../../model/ingredient";

@Pipe({
  name: 'nonWraps'
})
export class NonWrapsPipe implements PipeTransform {

  transform(ingredients: Ingredient[], ...args: any[]): Ingredient[] {
    const nonwraps: Ingredient[] = [];
    for (const ingredient of ingredients) {
      if (ingredient.type !== 'WRAP') {
        nonwraps.push(ingredient);
      }
    }
    return nonwraps;
  }
}
