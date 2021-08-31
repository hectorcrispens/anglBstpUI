import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-button-page',
  templateUrl: './button.page.html',
  styles: [`
  .example-button{
    margin-left:1rem;
  }
  .code-blue{
    color: var(--bs-primary);
  }
  .code-gray{
    color: var(--bs-gray);
  }
  .code-black{
    color: var(--bs-dark);
  }
  `]
})
export class ButtonPageComponent implements OnInit {

  bttnXmpl:code[] = [
    {sltr:"ngb-button", clss:"['btn', 'btn-primary']", vlue:"Primary"},
    {sltr:"ngb-button", clss:"['btn', 'btn-secondary']", vlue:"Secondary"},
    {sltr:"ngb-button", clss:"['btn', 'btn-success']", vlue:"Success"},
    {sltr:"ngb-button", clss:"['btn', 'btn-danger']", vlue:"Danger"},
    {sltr:"ngb-button", clss:"['btn', 'btn-warning']", vlue:"Warning"},
    {sltr:"ngb-button", clss:"['btn', 'btn-info']", vlue:"Info"},
    {sltr:"ngb-button", clss:"['btn', 'btn-light']", vlue:"Light"},
    {sltr:"ngb-button", clss:"['btn', 'btn-dark']", vlue:"Dark"},
    {sltr:"ngb-button", clss:"['btn', 'btn-link']", vlue:"Link"},
  ]
  bttnOtln:code[] = [
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-primary']", vlue:"Primary"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-secondary']", vlue:"Secondary"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-success']", vlue:"Success"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-danger']", vlue:"Danger"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-warning']", vlue:"Warning"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-info']", vlue:"Info"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-light']", vlue:"Light"},
    {sltr:"ngb-button", clss:"['btn', 'btn-outline-dark']", vlue:"Dark"},
  ]
  bttnSize:code[] = [
    {sltr:"ngb-button", clss:"['btn', 'btn-primary', 'btn-sm']", vlue:"Small button"},
    {sltr:"ngb-button", clss:"['btn', 'btn-secondary', 'btn-sm']", vlue:"Small button"},
    {sltr:"ngb-button", clss:"['btn', 'btn-primary', 'btn-lg']", vlue:"Large button"},
    {sltr:"ngb-button", clss:"['btn', 'btn-secondary', 'btn-lg']", vlue:"Large button"},

  ]
  bttnDsbl:code[] = [
    {sltr:"ngb-button", clss:"['btn', 'btn-primary', 'btn-lg']", vlue:"Disabled button"},
    {sltr:"ngb-button", clss:"['btn', 'btn-secondary', 'btn-lg']", vlue:"Disabled button"},
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