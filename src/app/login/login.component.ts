import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupUsers:any[]=[];
  singupObj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  };
  constructor(){};
ngOnInit():void{
  const localData=localStorage.getItem('signupUsers');
  if (localData!=null){
    this.signupUsers=JSON.parse(localData);
  }
}
onSignUp(){
  this.signupUsers.push(this.singupObj);
  localStorage.setItem('signUpsers',JSON.stringify(this.signupUsers));
  this.singupObj={
    userName:'',
    email:'',
    password:''
  }
}
onLogin(){
 
  const userExist=this.signupUsers.find(m=>m.userName == this.loginObj.userName && m.password == this.loginObj.password)
  if( userExist != undefined){
    alert('user Login Successfull');
  }
  else{
    alert('Wrong Credentials')
  }
}
}

