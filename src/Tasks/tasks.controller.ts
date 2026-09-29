import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";
interface Tasks{
    id: number;
    title : string;
    status: string;
}
@Controller()
export class TasksController{
    constructor(private readonly tasksservice:TasksService){}
    @Get('tasks')
    getdata(): Tasks[] {
        return this.tasksservice.getdata();
    }
}