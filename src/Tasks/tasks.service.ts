import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService{
    getdata(){
        return [ 

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

     
    }
}