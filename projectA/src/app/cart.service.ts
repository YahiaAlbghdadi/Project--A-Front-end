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

  removeFromCart(course:any){
    this.cart.shift(course)
  }

  sumPrices(){
    let sum = 0

    for(let offer of this.cart){
      sum += offer.price
    }
    return sum
  }

}
