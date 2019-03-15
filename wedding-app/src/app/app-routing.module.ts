import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './widgets/home/home.component';
import { AlbumsComponent } from './widgets/albums/albums.component';

const routes: Routes = [{path: '', component: HomeComponent ,
children: [
  {path: 'albums/:name/:url', component: AlbumsComponent, data: {url : ''}},
]}, { path: '', redirectTo: '/', pathMatch: 'full'},
{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled', scrollOffset: [0, 68]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
