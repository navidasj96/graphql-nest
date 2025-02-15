import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { NewRecipeInput } from './new-recipe.input';

@InputType()
export class RecipeUpdate extends PartialType(NewRecipeInput) {
  @Field(() => ID)
  id: string;
}
