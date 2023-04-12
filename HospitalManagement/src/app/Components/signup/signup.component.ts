import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  name:any;
  email:any;
  password:any;

  registerForm!:FormGroup;
  
  checked = false;

  constructor(private userServices:UserService, private router:Router, private formBuilder: FormBuilder){}

  ngOnInit()
  {
    this.registerForm = this.formBuilder.group({
      name:['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  Logger()
  {

    let data = {

      name:this.registerForm.value.name,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password

    }
    

    this.userServices.CreateAccount(data).subscribe((suc)=>{

      console.log("success",suc);
      this.router.navigateByUrl('/login');
    },
    
    (err) =>{

      console.log("error", err);
      
    })

  }
  

}
