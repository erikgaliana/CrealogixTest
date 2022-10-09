import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from 'src/app/models/planet';
import { PlanetsService } from 'src/app/services/planets/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  constructor(private planetsService: PlanetsService, private router: Router) {}

  canChild: boolean = false; //Var thats condition the param of the url to render the List of Planets or not
  planets: Planet[];

  ngOnInit(): void {
    if (this.router.url !== '/planets') {
      if (this.router.url.startsWith('/planets?search=')) {
        this.planetsService
          .search(this.router.url.replace('/planets?search=', ''))
          .subscribe((data) => {
            this.router.navigateByUrl(this.router.url);
            this.planets = data.results;
            console.log(this.planets);
          });
        this.canChild = true;
      } else {
        this.canChild = false;
      }
    } else {
      this.canChild = true;
      this.planetsService.getPlanets().subscribe((data) => {
        this.planets = data.results;
      });
    }
  }

  sort() {
    this.planets.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
}
