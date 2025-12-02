import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionFormComponent } from './features/suggestions/suggestion-form/suggestion-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'suggestions', component: ListSuggestionComponent},
  { path: 'suggestion/add', component: SuggestionFormComponent },
  { path: 'users',
    loadChildren: () => import('./users/users.module')
    .then(m => m.UsersModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
