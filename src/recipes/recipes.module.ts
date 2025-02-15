import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './models/recipe.model';

@Module({
  providers: [RecipesResolver, RecipesService, DateScalar],
  imports: [TypeOrmModule.forFeature([Recipe])],
})
export class RecipesModule {}
