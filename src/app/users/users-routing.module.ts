import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list-rayen-ameur.component';
import { UserDetailsComponent } from './components/user-details/user-details-rayen-ameur.component';
import { UserFormComponent } from './components/user-form/user-form-rayen-ameur.component';
import { UserRoleRayenAmeurComponent } from './components/user-role/user-role-rayen-ameur.component';
import { UserStatusComponent } from './components/user-status/user-status-rayen-ameur.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'new', component: UserFormComponent },
  { path: ':id', component: UserDetailsComponent },
  { path: ':id/edit', component: UserFormComponent },
  { path: 'role/:role', component: UserRoleRayenAmeurComponent },
  { path: 'status/:status', component: UserStatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
