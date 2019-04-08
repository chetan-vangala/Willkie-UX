import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { HomeComponent } from './home/home.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { MatterInfoComponent } from './matter-info/matter-info.component';

import { ClientService } from '../services/client.service';
import { MatterService } from '../services/matter.service';

@NgModule({
  declarations: [HomeComponent,ClientInfoComponent,MatterInfoComponent],
  imports: [
    CommonModule,
    GridModule,
    ChartsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientService,
    MatterService
  ]
})
export class ViewsModule { }
