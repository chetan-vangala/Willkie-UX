import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClientInfoComponent } from './views/client-info/client-info.component';
import { MatterInfoComponent } from './views/matter-info/matter-info.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'clients/:clientId', component: ClientInfoComponent},
  {path: 'matters/:matterId', component: MatterInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
