import {Injectable} from '@angular/core';
import {Player} from "../shared/player";
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  private players: Player[] = [
    {id: 1, address: 'Chennai', name: 'Dhoni'},
    {id: 2, address: 'London', name: 'Anderson'},
    {id: 3, address: 'Cape Town', name: 'ABD'},
  ];

  constructor() {
  }

  public getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  public getPlayer(id: number) : Observable<Player> {
    return of(this.players.filter(p => p.id === id)[0]);
  }
}
