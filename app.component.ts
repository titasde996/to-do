import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab5';
  list:any[]=[];
  add(item:any)
  {
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);
  }
  remove(id:number){
    this.list=this.list.filter(item=>item.id!==id);
    console.warn(id);
  }
}
