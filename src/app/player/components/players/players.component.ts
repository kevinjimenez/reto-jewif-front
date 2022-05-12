import { Component, OnInit } from '@angular/core';
import {PlayerInterface} from '../../interfaces/player.interface';
import {Constantes} from '../../../utils/constantes';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {


  players: PlayerInterface[] = [];
  totalPlayers: number = 0;
  search: string = '';
  offset: number = 0;
  limit: number = Constantes.recordsLimit;

  constructor(
    private readonly _playerService: PlayerService,
  ) {
  }

  ngOnInit(): void {
    this.getPlayer();
  }

  loadPlayer(offset: number) {
    console.log(offset);
    this.getPlayer(offset);
  }

  getPlayer(offset = 0) {
    this.offset = offset;
    console.log(this.offset, this.search);
    this._playerService
      .getPlayer(offset, this.limit, this.search)
      .subscribe(
        {
          next: ([players, totalPlayers]) => {
            this.players = players;
            this.totalPlayers = totalPlayers;
          },
        },
      );
  }

  searchValue(value: string) {
    this.search = value;
    this._playerService
      .getPlayer(this.offset, this.limit, value)
      .subscribe(
        {
          next: ([players, totalPlayers]) => {
            this.players = players;
            this.totalPlayers = totalPlayers;
          },
        },
      );
  }

}
