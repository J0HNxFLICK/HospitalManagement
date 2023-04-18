import { Component , Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserService } from 'src/app/Service/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.scss']
})
export class EditAppointmentComponent implements OnInit{
  imageLoc:string="";

  today:any = new Date();

  doc:any;

  AppointmentId:any;

  // patient:any;

  name:any;

  email:any;

  tempTimeHolder:any;

  fromTime:any
  toTime:any

  date:any;

  address:any;

  phoneNumber:any;

  injury:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private dialogRef:MatDialogRef<EditAppointmentComponent>, 
  private userService:UserService, private snackBar:MatSnackBar){}

  ngOnInit()
  {
    this.imageLoc = this.data.image;
    // this.patient = this.data;
    this.name=this.data.name;
    this.email = this.data.email;
    this.doc = this.data.doctor;
    this.date = this.data.date;
    this.address = this.data.address;

    this.tempTimeHolder = this.data.time.split(" - ");

    this.fromTime = this.tempTimeHolder[0];
    this.toTime = this.tempTimeHolder[1];
    
    this.phoneNumber = this.data.phone;  
    this.injury = this.data.injury;
    this.AppointmentId = this.data.id;
  }

  ImageSwapper(loc:string)
  {
    this.imageLoc = loc;
  }

  DataCap()
  {
    let editData={
      image:this.imageLoc,
      name:this.name,
      email:this.email,
      doctor:this.doc,
      date:this.date,
      address:this.address,
      time:this.fromTime+" - "+this.toTime,
      phone:this.phoneNumber,
      injury:this.injury,
      id:this.AppointmentId
    }

    console.log(editData);

    this.userService.EditAppointment(editData).subscribe((succ) => {
      this.snackBar.open("Appointment edited", "ok", {duration:3000})
      this.dialogRef.close();
    },
    (err) =>{
      this.snackBar.open("Retry", "ok", {duration:3000})
    }
    )
    
    // this.userService.AddToAppointments(editData).subscribe((suc)=>{
    //   this.snackBar.open("Appointment added", "ok", {duration:3000})
    //   this.dialogRef.close();
    // },
    
    // (err)=>
    // {
    //   this.snackBar.open("Retry", "ok", {duration:3000})
    // }

    //)

  }

  CloseDialog()
  {
    this.dialogRef.close();
  }
}
