import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoalComponent} from './goal/goal.component';
import {AboutComponent} from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';


const routes: Routes = [
  {path: 'goals', component: GoalComponent},
  {path: 'about', component: AboutComponent},
 // {path: '**', component:NotFoundComponent},
  {path: '', redirectTo:"/goals", pathMatch:"full"},
  {path: 'goals/:id', component: GoalDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }