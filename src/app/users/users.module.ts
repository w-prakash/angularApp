import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';
import { CanActiveRouteGuard } from '../route-gaurds/can-active-route.guard';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [CanActiveRouteGuard],
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    children:[
      {
        redirectTo: 'message',
        path: '',
        pathMatch: 'full'
      },
      {
        path: 'message',
        component: MessageComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ]
  },
];
@NgModule({
  declarations: [UserDetailsComponent, MessageComponent, ContactComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {
  constructor() {
    console.log('userModule called...');
  }
}
