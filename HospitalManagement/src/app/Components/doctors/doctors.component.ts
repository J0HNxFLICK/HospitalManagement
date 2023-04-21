import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { UserService } from 'src/app/Service/user/user.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctorsData: any;

  constructor(private matDialog: MatDialog, private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.GetDoctorsList().subscribe((docs) => {
      this.doctorsData = docs;
    })

  }



  DialogBox(noteData: any) {
    let dialogOpen = this.matDialog.open(AddAppointmentComponent, {

      data: noteData,

    });

    // dialogOpen.afterClosed().subscribe((resp:any) => {
    //   console.log("Dialog was closed");
    //   this.ColorEvent.emit();
    // })
  }


  DoctorView(data: any) {

    this.router.navigateByUrl('/dashboard/doctor-view/' + data);
    
  }
}
