import { Component , Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserService } from 'src/app/Service/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit{

  imageLoc:string="../../../assets/Ellipse -1.png";

  today:any = new Date();

  doc:any;

  key:any;

  patient:any;

  fromTime:any
  toTime:any

  date:any;

  address:any;

  phoneNumber:any;

  injury:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private dialogRef:MatDialogRef<AddAppointmentComponent>, 
    private userService:UserService, private snackBar:MatSnackBar){}

  ngOnInit()
  {
      
    this.doc = this.data.name;

    this.key = localStorage.getItem("loginId");

    console.log(this.key);
    

    this.userService.GetAccDetails(this.key).subscribe((userData) => {

      this.patient = userData;
    })

  }

  ImageSwapper(loc:string)
  {
    this.imageLoc = loc;
  }


  DataCap()
  {
    let appointmentData={
      image:this.imageLoc,
      name:this.patient.name,
      email:this.patient.email,
      doctor:this.doc,
      date:this.date,
      address:this.address,
      time:this.fromTime+" - "+this.toTime,
      phone:this.phoneNumber,
      injury:this.injury
    }

    console.log(appointmentData);
    
    this.userService.AddToAppointments(appointmentData).subscribe((suc)=>{
      this.snackBar.open("Appointment added", "ok", {duration:3000})
      this.dialogRef.close();
    },
    
    (err)=>
    {
      this.snackBar.open("Retry", "ok", {duration:3000})
    }

    )


  }

  CloseDialog()
  {
    this.dialogRef.close();
  }
}
