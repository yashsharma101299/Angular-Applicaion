import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"question",component:QuestionComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"",component:WelcomeComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
