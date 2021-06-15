import { RouterModule, Routes } from "@angular/router";
import { PlayerComponent } from "./player/player.component";

const APP_ROUTES : Routes =[
    {path: 'player', component: PlayerComponent},
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);