import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DesignUploadComponent } from './design-upload/design-upload.component';
import { AddDesignComponent } from './add-design/add-design.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowseclothComponent } from './browsecloth/browsecloth.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'upload', component: DesignUploadComponent},
  {path: 'adddesign', component: AddDesignComponent},
  {path: 'dashboard', component: UserDashBoardComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'browsecloth', component: BrowseclothComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
