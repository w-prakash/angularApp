import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
    // children: [
      {
        path: 'users/:id',
        component: UserDetailsComponent,
      },
      {
        path: 'message',
        component: MessageComponent,
      }
    // ],/
  // },
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
