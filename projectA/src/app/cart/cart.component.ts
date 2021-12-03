import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:any
  courses = courses
  sum:any
  tenPercent:any
  twentyPercent:any
  constructor(private service:CartService) { }
  
  
  ngOnInit(): void {
    this.sum = this.service.sumPrices();
    this.tenPercent = this.sum * 0.9;
    this.twentyPercent = this.sum * 0.8;
    this.cart = this.service.getCart();

    
  }
  cleanCart(){
    alert("The Sum of your Purchase is" + this.sum)
    this.service.cleanCart()
  }
  removeCourse(i:number){
    this.service.removeFromCart(this.cart[i])
    this.sum -= this.cart[i].price
  }
  

}
