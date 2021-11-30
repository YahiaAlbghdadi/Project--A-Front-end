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
  sum:any
  tenPercent:any
  twentyPercent:any
  constructor(private CS:CartService) { }
  course:any
  removeCourse(i:number){
    this.courses[i].remove()
  }
  
  ngOnInit(): void {
    this.sum = this.CS.sumPrices();
    this.tenPercent = this.sum * 0.9;
    this.twentyPercent = this.sum * 0.8;
    
  }
  cleanCart(){
    alert("The Sum of your Purchase is" + this.sum)
    this.CS.cleanCart()
  }

}
