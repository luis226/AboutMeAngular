import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiographyComponent } from './biography/biography.component'
const routes: Routes = [
  { path: '', redirectTo: '/biography', pathMatch: 'full' },
  { path: 'biography', component: BiographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
