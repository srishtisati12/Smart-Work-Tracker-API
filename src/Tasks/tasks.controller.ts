import { Controller, Get, Param, Query, Post, Body, Delete, Patch} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { UpdateTaskDto } from "./update-task-dto";
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
    getdata(@Query('name') name?: string, @Query('email') email?  :string): Tasks[]{
        return this.tasksservice.getdata(name,email);
    }
    @Get(":id")
    getbyid(@Param("id") id: string) {
      return this.tasksservice.getdatabyid(Number(id));
    }
    @Post()
    createTasks(@Body() body: any){
        return this.tasksservice.createTask(body);
    }
    @Patch(":id")
    updatetask(@Param("id") id: string, @Body() updatetaskdto: UpdateTaskDto){
        return this.tasksservice.updateTask(Number(id), updatetaskdto);
    }
    @Delete(":id")
    deleteTask(@Param("id") id: string){
        return this.tasksservice.deleteTask(Number(id));
    }
}