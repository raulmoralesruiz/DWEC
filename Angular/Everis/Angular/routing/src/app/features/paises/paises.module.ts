import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '',
  component: WelcomeComponent
  },
  { path: 'info/:code',
  component: InfoComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent, InfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class PaisesModule { }
