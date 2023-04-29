import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'users/:id',
        component: UserDetailsComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {
  constructor() {
    console.log('userModule called...');
  }
}
