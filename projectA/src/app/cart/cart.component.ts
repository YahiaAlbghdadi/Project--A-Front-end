import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';
import { CartService } from '../cart.service';



@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  courses = courses
  constructor(private CS:CartService) { }
  course:any
  removeCourse(i:number){
    this.courses[i].remove()
  }
  
  ngOnInit(): void {
    
  }

}
