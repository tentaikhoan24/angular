import { Component } from '@angular/core';
import { JavaWebService } from '../Services/java-web.service';
import {Router} from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/models/Account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private javaWebService: JavaWebService, private router : Router){}

  ngOnInit() {
    localStorage.setItem("idUser", "")
    localStorage.setItem("idCart", "")
  }

  loginForm = new FormGroup({
    use_name : new FormControl("", Validators.required),
    pass : new FormControl("", Validators.required)
  })
acc = new Account('',this.loginForm.value.use_name!,this.loginForm.value.use_name!,1)

  login(){
    this.javaWebService.isLogin(this.acc).subscribe(data=>{
      console.log(data)
      console.log(this.acc)
      if(Number(data) > 0){
        localStorage.setItem("idUser",String(data))
        let idCart = this.javaWebService.isCartActive(Number(data))
        localStorage.setItem("idCart", String(idCart))
      }
      localStorage.setItem("idUser",String(data))
      this.router.navigate(['/product'])
    })
  }
}
