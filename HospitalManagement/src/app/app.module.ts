import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { AddAppointmentComponent } from './Components/add-appointment/add-appointment.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { AppointmentsComponent } from './Components/appointments/appointments.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { EditAppointmentComponent } from './Components/edit-appointment/edit-appointment.component';
import { DoctorViewComponent } from './Components/doctor-view/doctor-view.component';
import { AuthServiceService } from './Authentication/auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    DoctorsComponent,
    AddAppointmentComponent,
    AppointmentsComponent,
    EditAppointmentComponent,
    DoctorViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule

    
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
