import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ListtoDosComponent } from './listto-dos/listto-dos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
//{path:'welcome',component:WelcomeComponent},
{path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
{path:'todo',component:ListtoDosComponent,canActivate:[RouteGuardService]} ,
{path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
{path:'todo/:id',component:TodoComponent,canActivate:[RouteGuardService]},
{path:'**',component:ErrorComponent}
// {path:'**'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
