import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  myGroup:any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
 
    this.route.params.subscribe((params: Params) => {    //params inbuilt obserable in angular
      this.id = +params.id;
    });
  }

  sendMessage(message) {
    this.userService.activatedEmitter.next(message);
  }
}
