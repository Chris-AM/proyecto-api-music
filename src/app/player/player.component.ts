import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(
    private playerService: PlayerService
  ) { }

  player = new Audio;
  tracks: any = [];

  ngOnInit(): void {
    this.playerService.fetchTracks().subscribe(
      res=>{
        this.tracks = res;
        console.log('tracks --->', res)
    },
    err => console.error(err))
  }



}
