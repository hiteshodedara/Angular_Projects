import { Component, OnInit } from '@angular/core';
import { RestoserviceService } from '../services/restoservice.service';



@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  restolist:any=[]
  showclose:boolean=false;
  deletedname='';


  constructor(private rservice: RestoserviceService) {

  }
  ngOnInit(){
    this.rservice.getrestodata().subscribe((data) => {
    this.restolist=data
    })    
  }

  ondeleteclick(id:any,rname:string){
    
    this.restolist = this.restolist.filter((restolist: { id: any; }) => restolist.id !== id);    
    this.rservice.deleteresto(id).subscribe((result)=>{
      console.log(result);
      this.showclose=true;
      this.deletedname=rname;
    })


  }

  onclose(){
    this.showclose=false;
    this.deletedname='';
  }

}
