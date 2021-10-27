import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor() { }
name=""
  dblogic(yyy:any)
  {
    console.log(yyy);
    this.name=yyy;
  }
  
}

