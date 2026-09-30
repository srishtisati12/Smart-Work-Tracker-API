import { Injectable } from "@nestjs/common";
import { Tasks } from "./tasks.controller";
import { UpdateTaskDto } from "./update-task-dto";

@Injectable()
export class TasksService {
    private task: Tasks[] = [

        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            phone: "9876543210"
        },
        {
            id: 2,
            name: "Priya Singh",
            email: "priya@gmail.com",
            phone: "9876543211"
        },
        {
            id: 3,
            name: "Aman Verma",
            email: "aman@gmail.com",
            phone: "9876543212"
        },
        {
            id: 4,
            name: "Neha Gupta",
            email: "neha@gmail.com",
            phone: "9876543213"
        },
        {
            id: 5,
            name: "Arjun Mehta",
            email: "arjun@gmail.com",
            phone: "9876543214"
        }
    ];
    getdata(name?: string, email?: string): Tasks[] {
        let result = this.task;
        if (name) {
            result = result.filter((item) => item.name.toLowerCase().includes(name.toLocaleLowerCase()))
        }
        if (email) {
            result = result.filter((item) => item.email.toLowerCase().includes(email.toLowerCase()))
        }
        return result;
    }
    getdatabyid(id: number) {
        return this.task.find((user) => user.id === id);
    }
    createTask(body: any) {
        const tasks = {
            id: this.task.length + 1,
            ...body
        }
        this.task.push(tasks);
        return this.task;
    };
    
    updateTask(id: number, updatetaskdto: UpdateTaskDto){
        const index = this.task.findIndex((item)=> item.id===id);
        if (index === -1) {
            throw new Error("Task not found");
        }
        this.task[index]={
            ...this.task[index],...updatetaskdto
        }
        return this.task[index];
    }

    deleteTask(id: number){
        this.task= this.task.filter((item)=> item.id!==id);
        return this.task;
    };
}
