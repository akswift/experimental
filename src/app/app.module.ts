import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ComponentFirstComponent } from './component-first/component-first.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { EventbindingsComponent } from './eventbindings/eventbindings.component';
import { ToWayBindingsComponent } from './to-way-bindings/to-way-bindings.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { PipesComponent } from './pipes/pipes.component';
import { PistFormComponent } from './pist-form/pist-form.component';
import { PistComponent } from './pist/pist.component';
import {StyleDirective} from "./directives/style.directive";
import { Directives2Directive } from './directives2.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentFirstComponent,
    InterpolationComponent,
    BindingsComponent,
    EventbindingsComponent,
    ToWayBindingsComponent,
    NgstyleDirectiveComponent,
    NgclassDirectiveComponent,
    NgifelseComponent,
    NgswitchComponent,
    NgforComponent,
    PipesComponent,
    PistFormComponent,
    PistComponent,
    StyleDirective,
    Directives2Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
