import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginDetails } from '../_model/loginDetails';
import { AuthenticationService } from '../_services/authentication.service';
import { DataService } from '../_util/dataServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails = new LoginDetails();

  test;

  constructor(private service:AuthenticationService, private dataServices: DataService, private router:Router) {
    this.service.logout();
  }

  ngOnInit() {
    
  }

  onSubmit(){

    this.service.login(this.loginDetails).subscribe(data =>{
       this.router.navigate(['/dashBoard']);
        this.dataServices.setLocalStorage('isLoggedIn',true);
        this.dataServices.changeAppStatus(true);
    },
     err => console.error(err),
     () => console.log('done loading foods'));

  }
}
