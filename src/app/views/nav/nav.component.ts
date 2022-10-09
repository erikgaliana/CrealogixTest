import { Component, OnInit } from '@angular/core';
import { NavData } from 'src/app/models/nav';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nav: NavData[] = [
    {
      name: 'Films',
      icon: 'fa fa-film',
      link: 'films',
    },
    {
      name: 'People',
      icon: 'fa fa-user',
      link: 'people',
    },
    {
      name: 'Planets',
      icon: 'fa fa-globe',
      link: 'planets',
    },
    {
      name: 'Species',
      icon: 'fa fa-reddit-alien',
      link: 'species',
    },
    {
      name: 'Starships',
      icon: 'fa fa-ship',
      link: 'starships',
    },
    {
      name: 'Vehicles',
      icon: 'fa fa-car',
      link: 'vehicles',
    },
  ];
}
