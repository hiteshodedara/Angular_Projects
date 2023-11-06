import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  showalert: boolean = false;
 

  registerUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
  })

  closealert() {
    this.showalert = false;
  }


  constructor(private uservice: UserService) {
    uservice.getalluser().subscribe((result)=>{
      console.log(result);
      
    })
    
  }

  collectformdata() {
    const userdata = this.registerUser.value;

    if (userdata.password == userdata.cpassword) {
      this.uservice.userregister(userdata).subscribe((data) => {
        console.log("Registered:",data);
        
        this.showalert = true;
        this.registerUser.reset({});
        
        
        setTimeout(() => {
          this.showalert = false;
        }, 4000);
      })

    } else {
      console.log('enter all fileds');

    }


  }
}
