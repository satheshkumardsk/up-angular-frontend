import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  SecureComponent,
  NavbarComponent,
  MenuComponent,
  DashboardComponent,
  UsersComponent
],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SecureComponent]
})
export class SecureModule { }
