import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-button-page',
  templateUrl: './button-page.html',
  styles: [`

  `]
})
export class ButtonPageComponent implements OnInit {

  bttnXmpl:code[] = [
    {sltr:"ngb-button", clss:"['btn', 'btn-primary']", vlue:"Primary"},
    {sltr:"ngb-button", clss:"['btn', 'btn-secondary', 'mx-2']", vlue:"Secondary"},
    {sltr:"ngb-button", clss:"['btn', 'btn-success', 'mx-2']", vlue:"Success"},
    {sltr:"ngb-button", clss:"['btn', 'btn-danger', 'mx-2']", vlue:"Danger"},
    {sltr:"ngb-button", clss:"['btn', 'btn-warning', 'mx-2']", vlue:"Warning"},
    {sltr:"ngb-button", clss:"['btn', 'btn-info', 'mx-2']", vlue:"Info"},
    {sltr:"ngb-button", clss:"['btn', 'btn-light', 'mx-2']", vlue:"Light"},
    {sltr:"ngb-button", clss:"['btn', 'btn-dark', 'mx-2']", vlue:"Dark"},
    {sltr:"ngb-button", clss:"['btn', 'btn-link', 'mx-2']", vlue:"Link"},
  ]
  bttnOtln:code[] = [
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-primary']", vlue:"Primary"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-secondary', 'mx-2']", vlue:"Secondary"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-success', 'mx-2']", vlue:"Success"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-danger', 'mx-2']", vlue:"Danger"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-warning', 'mx-2']", vlue:"Warning"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-info', 'mx-2']", vlue:"Info"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-light', 'mx-2']", vlue:"Light"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-dark', 'mx-2']", vlue:"Dark"},
  ]
  bttnSize:code[] = [
    {sltr:"ngb-button", clss:"['btn', 'btn-primary', 'btn-sm']", vlue:"Small button"},
    {sltr:"ngb-button", clss:"['btn', 'btn-secondary', 'btn-sm', 'mx-2']", vlue:"Small button"},
    {sltr:"ngb-button", clss:"['btn', 'btn-primary', 'btn-lg', 'mx-2']", vlue:"Large button"},
    {sltr:"ngb-button", clss:"['btn', 'btn-secondary', 'btn-lg', 'mx-2']", vlue:"Large button"},

  ]
  bttnDsbl:code[] = [
    {sltr:"ngb-button", clss:"['btn', 'btn-primary', 'btn-lg']", vlue:"Disabled button"},
    {sltr:"ngb-button", clss:"['btn', 'btn-secondary', 'btn-lg', 'mx-2']", vlue:"Disabled button"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
interface code{
  sltr:string;
  clss: string;
  vlue:string
}