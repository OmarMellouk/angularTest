import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public testserv:Serv1Service) {
  }

  ngOnInit(): void {
  }

}
