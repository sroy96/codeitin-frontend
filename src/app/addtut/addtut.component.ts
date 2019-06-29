import { Component, OnInit } from '@angular/core';
import {SpringclientService, Tutorial} from '../service/springclient.service';


@Component({
  selector: 'app-addtut',
  templateUrl: './addtut.component.html',
  styleUrls: ['./addtut.component.css']
})
export class AddtutComponent implements OnInit {

  tran: Tutorial = new Tutorial('', '');
  constructor(
    private springClientService: SpringclientService
  ) { }

  ngOnInit() {
  }

   createadder(): void {
    console.log(this);
    this.springClientService.createadder(this.tran)
        .subscribe( data => {
          alert('File created successfully.');
        });

  }
}
