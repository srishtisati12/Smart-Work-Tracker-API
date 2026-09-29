import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";
interface Tasks{
    id: number;
    name : string;
    email: string;
    phone: string;
}
@Controller()
export class TasksController{
    constructor(private readonly tasksservice:TasksService){}
    @Get('tasks')
    getdata(): Tasks[] {
        return this.tasksservice.getdata();
    }
}