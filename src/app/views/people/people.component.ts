import {
  Component,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  constructor(private peopleService: PeopleService, private router: Router) {}
  people: People[];
  canChild: boolean = false; //Var thats condition the param of the url to render the List of People or not

  ngOnInit(): void {
    if (this.router.url !== '/people') {
      if (this.router.url.startsWith('/people?search=')) {
        this.peopleService
          .search(this.router.url.replace('/people?search=', ''))
          .subscribe((data) => {
            this.router.navigateByUrl(this.router.url);
            this.people = data.results;
            console.log(this.people);
          });
        this.canChild = true;
      } else {
        this.canChild = false;
      }
    } else {
      this.canChild = true;
      this.peopleService.getPeople().subscribe((data) => {
        this.people = data.results;
      });
    }
  }

  sort() {
    this.people.sort(function (a, b) {
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
