import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UnlessDirective } from './custom-directives/unless.directive';
import { WithoutRenderDirective } from './custom-directives/without-render.directive';
import { WithRenderDirective } from './custom-directives/with-render.directive ';
import { BasicHighlightDirective } from './custom-directives/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    WithRenderDirective,
    WithoutRenderDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
