import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
HttpService

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlCode:string= "";
  constructor(private httpService:HttpService) { }

  CreateAccount(payload:any)
  {
    this.urlCode = "accounts";
    return this.httpService.PostService(this.urlCode, payload);
  }

  Login()
  {
    this.urlCode = "accounts";
    
    return this.httpService.GetService(this.urlCode);
  }

  GetAccDetails(id:any)
  {
    this.urlCode = "accounts/"+id;

    return this.httpService.GetService(this.urlCode);
  }

  GetDoctorsList()
  {
    this.urlCode = "Doctors";

    return this.httpService.GetService(this.urlCode);
  }

  GetIndividualDoc(idData:any)
  {
    this.urlCode = "Doctors/"+idData;

    return this.httpService.GetService(this.urlCode);
  }

  AddToAppointments(appointmentData:any)
  {
    this.urlCode = "appointments";

    return this.httpService.PostService(this.urlCode,appointmentData);
  }

  GetAppointmentsList()
  {
    this.urlCode = "appointments";

    return this.httpService.GetService(this.urlCode)
  }

  EditAppointment(newData:any)
  {
    this.urlCode = "appointments/"+newData.id;

    return this.httpService.PutService(this.urlCode, newData);

  }

  DeleteAppointment(appData:any)
  {
    this.urlCode = "appointments/"+appData;

    return this.httpService.DeleteService(this.urlCode)
  }
}
