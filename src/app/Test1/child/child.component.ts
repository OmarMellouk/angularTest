import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public testserv : Serv1Service) { }

  ngOnInit(): void {
  }

}
