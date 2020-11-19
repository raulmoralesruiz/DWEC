import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './components/global/global.component';
import { InformationComponent } from './components/information/information.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
  },
  {
    path: 'global',
    component: GlobalComponent,
  },
  {
    path: 'countries',
    component: InformationComponent,
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
