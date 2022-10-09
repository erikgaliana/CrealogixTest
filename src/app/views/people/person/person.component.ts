import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people/people.service';
import { PlanetsService } from 'src/app/services/planets/planets.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  idPerson: number;
  person: People;
  planet: any;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private planetService: PlanetsService
  ) {
    this.route.params.subscribe((params) => {
      this.idPerson = params['id'];
    });
  }

  ngOnInit(): void {
    this.peopleService.getPerson(this.idPerson).subscribe((person) => {
      this.person = person;
      this.planet = this.person.homeworld
        .substring(29, this.person.homeworld.length)
        .replace('/', '');
      this.planetService.getPlanet(this.planet).subscribe((planet) => {
        this.planet = planet;
      });
    });
  }
}
