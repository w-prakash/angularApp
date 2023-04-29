import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { CanActiveRouteGuard } from './route-gaurds/can-active-route.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'common',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // loadChildren: () => import('./home/home.component').then((mod) => mod.HomeComponent)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    canActivate: [CanActiveRouteGuard]
  },
  {
    path: 'common',
    component: CommonComponent
  },
    {
      path: 'contact',
      component: ContactComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

