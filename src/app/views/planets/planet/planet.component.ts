import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/models/planet';
import { PlanetsService } from 'src/app/services/planets/planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {
  idPlanet: number;
  planet: Planet;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetsService
  ) {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.idPlanet = params['id'];
    });
  }

  ngOnInit(): void {
    this.planetService.getPlanet(this.idPlanet).subscribe((planet) => {
      this.planet = planet;
      console.log(this.planet);
    });
  }
}
