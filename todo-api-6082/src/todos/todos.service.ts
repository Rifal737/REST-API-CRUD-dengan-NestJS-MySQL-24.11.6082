import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    const todo =
      this.todoRepository.create(createTodoDto);

    return this.todoRepository.save(todo);
  }

  findAll(completed?: boolean) {
    if (completed !== undefined) {
      return this.todoRepository.find({
        where: { completed },
      });
    }

    return this.todoRepository.find();
  }

  async findOne(id: number) {
    const todo =
      await this.todoRepository.findOneBy({ id });

    if (!todo) {
      throw new NotFoundException(
        `Todo with ID ${id} not found`,
      );
    }

    return todo;
  }

  async update(
    id: number,
    updateTodoDto: UpdateTodoDto,
  ) {
    await this.findOne(id);

    await this.todoRepository.update(
      id,
      updateTodoDto,
    );

    return this.findOne(id);
  }

  async remove(id: number) {
    const result =
      await this.todoRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        `Todo with ID ${id} not found`,
      );
    }

    return {
      message: `Todo with ID ${id} deleted`,
    };
  }
}