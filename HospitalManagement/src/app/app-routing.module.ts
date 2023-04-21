import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { AppointmentsComponent } from './Components/appointments/appointments.component';
import { DoctorViewComponent } from './Components/doctor-view/doctor-view.component';
import { AuthGuard } from './Authentication/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard],
  children:[{path:'doctors', component:DoctorsComponent},
            {path:'appointments', component:AppointmentsComponent},
            {path:'doctor-view/:id', component:DoctorViewComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
