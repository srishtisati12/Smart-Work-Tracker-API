import { Controller, Get, Param, Query, Post, Body, Delete, Patch, ParseUUIDPipe, UseGuards} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task-dto";
import { UpdateTaskDto } from "./dto/update-task-dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import {Req} from "@nestjs/common"
export interface Tasks{
    id: number;
    name : string;
    email: string;
    phone: string;
}
@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController{
    constructor(private readonly tasksservice:TasksService){}
    @Get()
        getdata(@Req() request: any,
         @Query('status') status?: string,
         @Query('priority') priority?: string,
         @Query('search') search?: string) {
        return this.tasksservice.getdata(status, priority, search, request.user.sub);
    }
    @Get(":id")
    getbyid(@Param("id", ParseUUIDPipe) id: string,
    @Req() request: any){
      return this.tasksservice.getdatabyid(id, request.user.sub);
    }
    @Post()
    createTasks(@Body() body: CreateTaskDto, @Req() request: any){
        return this.tasksservice.createTask(body, request.user.sub);
    }
    @Patch(":id")
    updatetask(@Param("id", ParseUUIDPipe) id: string,
     @Body() updatetaskdto: UpdateTaskDto,
    @Req() request: any){
        return this.tasksservice.updateTask(id, updatetaskdto, request.user.sub);
    }
    @Delete(":id")
    deleteTask(@Param("id", ParseUUIDPipe) id: string, @Req() request: any){
        return this.tasksservice.deleteTask(id, request.user.sub);
    }
}