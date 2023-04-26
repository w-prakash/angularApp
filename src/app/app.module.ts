import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomePipeComponent } from './pipes/custome-pipe/custome-pipe.component';
import { BuiltInPipeComponent } from './pipes/built-in-pipe/built-in-pipe.component';
import { PureComponent } from './pure/pure.component';
import { FormsModule } from '@angular/forms';
import { PipePipe } from './pipes/pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ObserverComponent } from './observer/observer.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { MessageShareService } from './services/message-share.service';
import { ParentComponent } from './parentToChild/parent/parent.component';
import { ChildComponent } from './parentToChild/child/child.component';
import { Parent1Component } from './childToParent/parent1/parent1.component';
import { Child1Component } from './childToParent/child1/child1.component';
import { ShareUserDataService } from './shared/share-user-data.service';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildViewChildrenComponent } from './view-child-view-children/view-child-view-children.component';
import { ViewChildrenComponent } from './view-child-view-children/view-children/view-children.component';
import { ProductsDashboardComponent } from './contentProjection/products-dashboard/products-dashboard.component';
import { WigetsComponent } from './contentProjection/wigets/wigets.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HooksComponent } from './hooks/hooks.component';
import { HookChildComponent } from './hooks/hook-child/hook-child.component';
import { UserInterface } from './hooks/users';
import { CustomeDirectiveComponent } from './custome-directive/custome-directive.component';
import { CustomeDirectiveDirective } from './shared/custome-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomePipeComponent,
    BuiltInPipeComponent,
    PureComponent,
    PipePipe,
    FilterPipe,
    ObserverComponent,
    Comp1Component,
    Comp2Component,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    ViewChildComponent,
    ViewChildViewChildrenComponent,
    ViewChildrenComponent,
    ProductsDashboardComponent,
    WigetsComponent,
    TemplateDrivenFormComponent,
    HooksComponent,
    HookChildComponent,
    CustomeDirectiveComponent,
    CustomeDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MessageShareService, ShareUserDataService, UserInterface],
  bootstrap: [AppComponent]
})
export class AppModule { }
