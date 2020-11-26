import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './features/media/components/inicio/inicio.component';
import { MediaDetailsComponent } from './features/media/components/media-details/media-details.component';
import { NotFoundComponent } from './features/media/components/not-found/not-found.component';
import { SearchComponent } from './features/media/components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'search/:title',
    component: SearchComponent
  },
  {
    path: 'search/:title/:id',
    component: MediaDetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
