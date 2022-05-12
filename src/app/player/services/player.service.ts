import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PlayerInterface} from '../interfaces/player.interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private uri = environment.host;
  private port = environment.port;
  private segmento = 'player';
  private url = `${this.uri}:${this.port}/${this.segmento}`;

  constructor(
    private readonly _httpClient: HttpClient,
  ) {
  }

  getPlayer(offset = 0, limit = 10, search: string = '') {
    let params = new HttpParams()
      .set('offset', offset)
      .set('limit', limit)
      .set('search', search)
    return this._httpClient
      .get<[PlayerInterface[], number]>(this.url, {params});
  }
}
