import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Args } from '@nestjs/graphql';
import { RecipeUpdate } from './dto/recipe-update';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  constructor(
    /**
     * Inject the Recipe Repository
     */
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async create(data: NewRecipeInput): Promise<Recipe> {
    const recipe = this.recipeRepository.create(data);

    return await this.recipeRepository.save(recipe);
  }

  async findOneById(id: string): Promise<Recipe | null> {
    return await this.recipeRepository.findOne({ where: { id } });
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return await this.recipeRepository.find();
  }

  async update(updateRecipe: RecipeUpdate) {
    let recipe: Recipe | null = null;

    try {
      recipe = await this.recipeRepository.findOne({
        where: { id: updateRecipe.id },
      });
    } catch {
      throw new Error('connection error');
    }
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    Object.assign(recipe, updateRecipe);
    return await this.recipeRepository.save(recipe);
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
