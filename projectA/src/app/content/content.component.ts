import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }
  outOfStack(){
    alert("Sorry this Lenguage is not Available right now")
  }

}
