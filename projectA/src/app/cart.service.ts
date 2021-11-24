import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any=[]
  constructor() { }

  addToCart(course:any){
    this.cart.push(course)
  }

  getCart(){
    return this.cart
  }

  cleanCart(){
    return this.cart = []
  }

}
