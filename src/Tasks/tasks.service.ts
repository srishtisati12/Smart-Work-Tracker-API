import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TaskDocument } from "./schemas/task.schema";
import { Model } from "mongoose";
import { CreateTaskDto } from "./dto/create-task-dto";
import { UpdateTaskDto } from "./dto/update-task-dto";

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>

    ) {}
    async getdata(status?: string, priority?: string, search?:string, userid?: string) {
        let  task = await this.taskModel.find({ userid });
        if (status){
            task = await this.taskModel.find({status});
        }
        if(priority){
            task= await  this.taskModel.find({priority});
        }
        if(search){
            task =  await this.taskModel.find({title: { $regex: search, $options: 'i' }});
        } 
        return task;
    }

    async getdatabyid(id: string, userid: string) {
       const task=   await this.taskModel.findOne({ id , userid});
       if (!task) {
           throw new NotFoundException("Task not found");
       }
       return task;
    }

    async createTask(data: CreateTaskDto, userid: string) {
        return this.taskModel.create({ ...data, userid });
    };
    
    async updateTask(id: string, updatetaskdto: UpdateTaskDto, userid: string) {
        const task = await this.taskModel.findOneAndUpdate({ id, userid }, updatetaskdto, { new: true });
        if (!task) {
            throw new NotFoundException("Task not found");
        }
        return task;
    }

    async deleteTask(id: string, userid: string){
        const task = await this.taskModel.findOneAndDelete({ id, userid });
        if (!task) {
            throw new NotFoundException("Task not found");
        }
        return task;
    };
}
