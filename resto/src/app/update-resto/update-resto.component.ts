import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { RestoserviceService } from '../services/restoservice.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  showalert: boolean = false;

  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private router: ActivatedRoute,
     private oneresto: RestoserviceService,
     private routerdata:Router) {
  }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    console.log(id);
    this.oneresto.getonerestodata(id).subscribe((result:any) => {
      this.editResto = new FormGroup({
        name: new FormControl(result.name),
        email: new FormControl(result.email),
        address: new FormControl(result.address),
      })  
    });
  }


  closealert() {
    this.showalert=false
    }

  updaterestodata(){
    const id = this.router.snapshot.params['id'];
    const data=this.editResto.value;
    this.oneresto.editeresodata(id,data).subscribe((result)=>{
      console.log(result);
      this.showalert=true
      setTimeout(() => {
        this.showalert=false
      }, 3000);
    })
    
    
  }

  goback(){
    this.routerdata.navigateByUrl('/list');
  }

}
