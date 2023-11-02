import { Component } from '@angular/core';

@Component({
  selector: 'app-mbpipe',
  templateUrl: './mbpipe.component.html',
  styleUrls: ['./mbpipe.component.css']
})
export class MbpipeComponent {
  datalist=[
    {value:1048576,type:'byte'},
    {value:1024,type:'kb'},
    {value:1048576,type:'byte'},
    {value:1,type:'tb'},
  ]
  val=''

}
