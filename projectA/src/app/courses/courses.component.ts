import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';
import { CartService } from '../cart.service';
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
courses=courses


  constructor(private service:CartService) { }

  addToCart(i:any){
    this.service.addToCart(courses[i])
  }

  ngOnInit(): void {
  }

}
