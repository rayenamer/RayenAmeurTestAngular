import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list-rayen-ameur.component';
import { UserDetailsComponent } from './components/user-details/user-details-rayen-ameur.component';
import { UserFormComponent } from './components/user-form/user-form-rayen-ameur.component';
import { UserRoleRayenAmeurComponent } from './components/user-role/user-role-rayen-ameur.component';
import { UserStatusComponent } from './components/user-status/user-status-rayen-ameur.component';
import { UserserviceRayenAmeurService } from '../services/userservice-rayen-ameur.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    UserRoleRayenAmeurComponent,
    UserStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  providers: [UserserviceRayenAmeurService]
})
export class UsersModule { }
