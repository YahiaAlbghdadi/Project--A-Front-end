import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  courses = courses
  constructor() { }

  ngOnInit(): void {
  }

}
