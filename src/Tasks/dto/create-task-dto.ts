import {IsOptional, IsString, IsNotEmpty, IsIn} from "class-validator";

export class CreateTaskDto { 
  /*@IsOptional()
  @IsString() 
  @IsNotEmpty() 
  userid: string; */

  @IsString() 
  @IsNotEmpty() 
  title: string; 

  @IsOptional() 
  @IsString() 
  description?: string; 

  @IsOptional() 
  @IsIn([ 
    'pending', 
    'in-progress', 
    'completed', 
  ]) 
  status?: string; 

  @IsOptional() 
  @IsIn(['low','medium','high']) 
  priority?: string; 
}