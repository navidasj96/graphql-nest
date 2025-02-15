import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType({ description: 'recipe' })
@Entity()
export class Recipe {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Directive('@upper')
  @Column({
    type: 'varchar',
  })
  title: string;

  @Field({ nullable: true })
  @Column({
    type: 'varchar',
  })
  description?: string;

  @Field(() => Date)
  @CreateDateColumn({
    type: 'date',
  })
  creationDate: Date;

  @Field((type) => [String])
  @Column({
    type: 'simple-array',
  })
  ingredients: string[];
}
