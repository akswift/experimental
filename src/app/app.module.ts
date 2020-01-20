import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostComponent} from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from './post4/post4.component';
import {FormsModule} from "@angular/forms";
import { ComponentFirstComponent } from './component-first/component-first.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { EventbindingsComponent } from './eventbindings/eventbindings.component';
import { ToWayBindingsComponent } from './to-way-bindings/to-way-bindings.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post3Component,
    Post4Component,
    ComponentFirstComponent,
    InterpolationComponent,
    BindingsComponent,
    EventbindingsComponent,
    ToWayBindingsComponent,
    NgstyleDirectiveComponent,
    NgclassDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
