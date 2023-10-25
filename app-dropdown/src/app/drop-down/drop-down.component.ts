import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {

  selectedop: any;
  listitem=[{firstname:'hitesh odedara'},{firstname:'raj solanki'},{firstname:'raju antroliya'}]
}
