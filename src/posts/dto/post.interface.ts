import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ description: 'Post Interface' })
export default abstract class PostInterface {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;
}
