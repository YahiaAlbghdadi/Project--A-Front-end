import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any=[]
  sum:number=0
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
    this.cart.pull(course)
  }

  sumPrices(){
    for(let offer of this.cart){
      this.sum += offer.price
    }
    return this.sum
  }

}
