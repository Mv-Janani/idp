import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})



export class AComponent implements OnInit {
  name="SUBMIT"
  constructor(private dbl:SerService) { }

  ngOnInit(): void {
  }
  try(xxx:any){
    console.log(xxx);
    this.dbl.dblogic(xxx);
  }

}
