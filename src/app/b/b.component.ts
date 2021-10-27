import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private dbl:SerService) { }
servenme=""
  ngOnInit(): void {
  }
  try(){
    this.servenme=this.dbl.name;
    console.log(this.servenme);
  }
}
