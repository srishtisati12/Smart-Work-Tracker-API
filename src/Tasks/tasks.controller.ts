import { Controller, Get, Param, Query, Post, Body, Delete, Patch, ParseUUIDPipe} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task-dto";
import { UpdateTaskDto } from "./dto/update-task-dto";
export interface Tasks{
    id: number;
    name : string;
    email: string;
    phone: string;
}
@Controller('tasks')
export class TasksController{
    constructor(private readonly tasksservice:TasksService){}
    @Get()
    getdata(@Query('status') status?: string,
     @Query('priority') priority?: string,
      @Query('search') search?: string){
        return this.tasksservice.getdata(status, priority, search);
    }
    @Get(":id")
    getbyid(@Param("id", ParseUUIDPipe) id: string) {
      return this.tasksservice.getdatabyid(id);
    }
    @Post()
    createTasks(@Body() body: CreateTaskDto){
        return this.tasksservice.createTask(body);
    }
    @Patch(":id")
    updatetask(@Param("id", ParseUUIDPipe) id: string,
     @Body() updatetaskdto: UpdateTaskDto){
        return this.tasksservice.updateTask(id, updatetaskdto);
    }
    @Delete(":id")
    deleteTask(@Param("id", ParseUUIDPipe) id: string){
        return this.tasksservice.deleteTask(id);
    }
}