import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormKaryawanComponent } from './pages/karyawan/formKaryawan/formKaryawan.component';
import { KaryawanComponent } from './pages/karyawan/karyawan.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/dashboard", 
    pathMatch:"full"
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"form-karyawan",
    component:FormKaryawanComponent
  },
  {
    path:"data-karyawan",
    component:KaryawanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
