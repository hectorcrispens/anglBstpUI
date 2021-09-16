import { Component, Input, OnInit } from '@angular/core';
import { bgType, fxedType, jstfCntnType } from '../types/baseType';

type navbarType = 'navbar-expand-lg' | 'navbar-light' | bgType | fxedType

@Component({
  selector: 'ngb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input("clss") clss!: navbarType
@Input("algn") algn!: jstfCntnType

  constructor() { }

  ngOnInit(): void {
  }

}
