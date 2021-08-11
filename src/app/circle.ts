import {ICircle} from "./interfaces/circle.interface";
import {IProject} from "./interfaces/project.interface";

export class Circle implements ICircle{
  id:number
  uid: string;
  color: string;
  constructor (id:number,uid:string, color:string) {
    this.id = id
    this.uid = uid,
      this.color = color
  }
};


export class Project implements IProject{
  id: string
  name: string
  circles: ICircle[]
  constructor(id:string, name:string, circles:ICircle[]) {
    this.id = id;
    this.name = name;
    this.circles = circles
  }
}
