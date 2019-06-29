import {Component, EventEmitter, Input, OnInit, Output, Pipe} from '@angular/core';
import {SpringclientService, Tutorial} from '../service/springclient.service';



@Component({
  selector: 'app-springtut',
  templateUrl: './springtut.component.html',
  styleUrls: ['./springtut.component.css']
})

export class SpringtutComponent implements OnInit {

  constructor(private springClientService: SpringclientService ) { }

  tutorials: Tutorial[];


  ngOnInit() {
     this.springClientService.getTutorial().subscribe(
     response => this.handleSuccessfulResponse(response),
    );
  }


  handleSuccessfulResponse(response) {
    this.tutorials = response;
}


}
