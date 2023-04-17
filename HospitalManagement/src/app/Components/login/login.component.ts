import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/Service/data-share/data-share.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  PresentData:any;

  constructor(private userServices: UserService, private formBuilder: FormBuilder, private snackBar:MatSnackBar, private router:Router, private dataShareService:DataShareService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  LoginClick() {

    let checking:boolean = false;

    if (this.registerForm.valid) {

      let data = {

        email: this.registerForm.value.email,
        password: this.registerForm.value.password

      }

      this.userServices.Login().subscribe((dataIn: any) => {

        console.log(dataIn);

        for(let dat of dataIn)
        {
          if (dat.email === data.email && dat.password === data.password)
          {

            // this.PresentData = dat;
            checking = true
            // console.log("checker",this.PresentData);
            localStorage.setItem("loginData", dat);
            this.snackBar.open("Login Successful", "ok", { duration: 3000 });

            // this.dataShareService.dataInToUnrelated(this.PresentData);
            this.router.navigateByUrl('/dashboard')
          }

          if(checking == false)
            this.snackBar.open("Login failed", "ok", { duration: 3000 });
        } 
      });

    }

    this.registerForm.reset();
  }
}
