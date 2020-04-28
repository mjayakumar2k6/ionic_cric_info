import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: ':id',
    loadChildren: () => import('../pages/player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  },
  {
    path: '',
    component: HomePage,
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
