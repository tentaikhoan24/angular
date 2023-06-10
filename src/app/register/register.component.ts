import { Component } from '@angular/core';
import { JavaWebService } from '../Services/java-web.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private javaWebService: JavaWebService, private router : Router){}


  ngOnIniy(){

  }
  regisForm = new FormGroup({
    name: new FormGroup("", Validators.required),
    use_name : new FormControl("", Validators.required),
    pass : new FormControl("", Validators.required),
    role_uer: new FormGroup("", Validators.required)
  })

  register(){
    // this.javaWebService.register(this.regisForm).subscribe(data=>{
    //   if(Boolean(data) == true) {
    //     this.javaWebService.isLogin(this.regisForm).subscribe(data=>{
    //       if(Number(data) > 0){
    //         localStorage.setItem("idUser",String(data))
    //         let idCart = this.javaWebService.isCartActive(Number(data))
    //         localStorage.setItem("idCart", String(idCart))
    //       }
    //     })
    //   }
    // })
  }
}
