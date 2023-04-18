import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user/user.service';
import { EditAppointmentComponent } from '../edit-appointment/edit-appointment.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataShareService } from 'src/app/Service/data-share/data-share.service';



@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit{

  constructor(private userServices:UserService, private matDialog:MatDialog, private snackBar:MatSnackBar, private dataSharer:DataShareService){}

  ELEMENT_DATA:any;

  dataSource:any;

  thisAccount:string="";

  displayedColumns: string[] = ['Photo', 'Name', 'Email', 'Date', 'Visit Time', 'Number', 'Doctor', 'Injury/Condition', 'Actions'];

  ngOnInit()
  {

    this.dataSharer.subPoint.subscribe((data:any) =>{
      this.thisAccount = data;
    })


      this.userServices.GetAppointmentsList().subscribe((data:any)=>{
        // console.log(data);

        this.dataSource = data.filter((x:any) => {if(x.email == this.thisAccount)return x});
        // this.dataSource = this.ELEMENT_DATA;
      })

      // console.log(this.key);
      


  }

  EditAppointment(data:any)
  {

    // console.log(data);
    
    let dialogOpen = this.matDialog.open(EditAppointmentComponent,{
      data: data
    });

    dialogOpen.afterClosed().subscribe(() =>{
      this.ngOnInit();
    })

  }

  DeleteAppointment(AppointmentId:string)
  {
    this.userServices.DeleteAppointment(AppointmentId).subscribe((succ) => {
      this.snackBar.open("Deleted appoint successfully", "ok", {duration:3000})
      this.ngOnInit();
    },
    
    (err) => {
      this.snackBar.open("Retry", "ok", {duration:3000})
    })
  }

}
