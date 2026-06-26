import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('api/v1/todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
  ) {}

  @Post()
  create(
    @Body() createTodoDto: CreateTodoDto,
  ) {
    return this.todosService.create(
      createTodoDto,
    );
  }

  @Get()
  findAll(
    @Query('completed')
    completed?: string,
  ) {
    if (completed !== undefined) {
      return this.todosService.findAll(
        completed === 'true',
      );
    }

    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.todosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe)
    id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(
      id,
      updateTodoDto,
    );
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.todosService.remove(id);
  }
}