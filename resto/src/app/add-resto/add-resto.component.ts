import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoserviceService } from '../services/restoservice.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent {


  constructor(private rservice:RestoserviceService){}


    showalert:boolean=false;

  addResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
  })


  collectformdata(){
    if(this.addResto.value.name!=='' &&this.addResto.value.email!=='' &&this.addResto.value.address!==''){
      this.rservice.addrestodata(this.addResto.value).subscribe((result)=>{
        console.log(result);
      },(error)=>{
        console.error(error);
      })
      this.showalert=true;
      setTimeout(() => {
        this.showalert=false;
      }, 3000);
      this.addResto.reset({})
    }else{
      console.log("enter all data"); 
    }
  }

  closealert(){
    this.showalert=false;
  }

}
