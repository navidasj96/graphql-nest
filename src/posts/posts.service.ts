import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  create(createPostInput: CreatePostInput) {
    const post = this.postRepository.create(createPostInput);
    return this.postRepository.save(post);
  }

  async findAll() {
    return await this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePostInput: UpdatePostInput) {
    let post: Post | null = null;
    try {
      post = await this.postRepository.findOne({ where: { id } });
    } catch {
      throw new Error('couldnt fetch post');
    }
    if (!post) {
      throw new Error('Post not found');
    }
    Object.assign(post, updatePostInput);

    return this.postRepository.save(post);
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
