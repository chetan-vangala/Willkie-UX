import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ViewsModule } from './views/views.module';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatMenuModule, MatListModule, MatTableModule } from '@angular/material';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatMenuModule, MatListModule, MatTableModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
