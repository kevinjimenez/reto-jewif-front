import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlayerRoutingModule} from './player-routing.module';
import {MaterialModule} from '../material/material.module';
import {TablePlayerComponent} from './components/table-player/table-player.component';
import {PrimengModule} from '../primeng/primeng.module';
import {SharedModule} from '../shared/shared.module';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { PlayersComponent } from './components/players/players.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    TablePlayerComponent,
    SearchBarComponent,
    NavComponent,
    PlayersComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    PlayerRoutingModule,
    MaterialModule,
    PrimengModule,
    SharedModule,
  ],
})
export class PlayerModule {
}
