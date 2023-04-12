import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {


  constructor(private matDialog : MatDialog){}

  doctorsData: any = [
    
    {id: 1, image: '../../../assets/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg', name: 'Dr. Whet Faartz', specilization: 'Gynaecologist'},

    {id: 2, image: '../../../assets/ashkan-forouzani-DPEPYPBZpB8-unsplash.jpg', name: 'Dr. Akhil', specilization: 'Dentist'},

    {id: 3, image: '../../../assets/dalton-ngangi-ZCztndOWdjs-unsplash.jpg', name: 'Dr. Tai Lung', specilization: 'Pediatrist'},

    {id: 4, image: '../../../assets/jc-gellidon-uhXlRnt9dTw-unsplash.jpg', name: 'Dr. Robert Rodrigez', specilization: 'ENT'},

    {id: 5, image: '../../../assets/jonathan-borba-Yui-VjmS8AA-unsplash.jpg', name: 'Dr. Jonathan', specilization: 'Surgeon'},

    {id: 6, image: '../../../assets/rian-ramirez-rm7rZYdl3rY-unsplash.jpg', name: 'Dr. Juan', specilization: 'Dermatologist'}

  ];

  DialogBox(noteData:any)
{
  let dialogOpen = this.matDialog.open(AddAppointmentComponent,{

    data: noteData

  });

  // dialogOpen.afterClosed().subscribe((resp:any) => {
  //   console.log("Dialog was closed");
  //   this.ColorEvent.emit();
  // })
}

}
