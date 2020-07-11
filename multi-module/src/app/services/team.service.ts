import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs/index";
import {Player} from "../shared/player";
import {Team} from "../shared/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teans: Team[] = [
    {id: 1, name: 'India'},
    {id: 2, name: 'England'},
    {id: 3, name: 'South Africa'},
  ];

  constructor() {
  }

  public getTeams(): Observable<Team[]> {
    return of(this.teans);
  }

  public getTeam(id: number): Observable<Team> {
    return of(this.teans.filter(t => t.id === id)[0]);
  }
}
