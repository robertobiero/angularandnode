import { Component,OnInit } from '@angular/core';
import{MessageService}   from "../messages/message.service";
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router'



@Component({
   selector : 'app-authentication',
   providers: [MessageService],
   templateUrl: './authentication.component.html',
    styles: [`
         .form-signin
{
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
.container
{
 background-image: url("http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg");   
}
.form-signin .form-signin-heading, .form-signin .checkbox
{
    margin-bottom: 10px;
}
.form-signin .checkbox
{
    font-weight: normal;
}
.form-signin .form-control
{
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-signin .form-control:focus
{
    background-color:red;
    z-index: 2;
}
.form-signin input[type="text"]
{
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.form-signin input[type="password"]
{
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.account-wall
{
    margin-top: 20px;
    padding: 40px 0px 20px 0px;
    background-color: #f7f7f7;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.login-title
{
    color: #555;
    font-size: 18px;
    font-weight: 400;
    display: block;
}
.profile-img
{
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.need-help
{
    margin-top: 10px;
}
.new-account
{
    display: block;
    margin-top: 10px;
}
    `]
})

export class AuthenticationComponent implements OnInit{
  constructor(
        private route: ActivatedRoute,
        private router: Router,
        ) { }

myForm: FormGroup;


  onSub(){

      console.log(this.myForm);
      this.myForm.reset();
  }
  ngOnInit(){
   this.myForm = new FormGroup({
    email : new FormControl(null, Validators.required),
    password : new FormControl(null, Validators.required)   

   })


  }

     sigIn(){
          
         this.router.navigateByUrl('/crisis-center');
     }
      signUp(){

       this.router.navigateByUrl('/sign-up'); 
      }
}