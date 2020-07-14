import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
import { NavComponent } from './nav/nav.component';
@NgModule({ 
  
})
export class App1SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
@NgModule({
  declarations: [
    AppComponent,
    View2Component,
    View1Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ],
     exports :[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
