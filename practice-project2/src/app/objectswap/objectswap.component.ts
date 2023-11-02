import { Component } from '@angular/core';

@Component({
  selector: 'app-objectswap',
  templateUrl: './objectswap.component.html',
  styleUrls: ['./objectswap.component.css']
})
export class ObjectswapComponent {
  list1 = ['hitesh', 'raj', 'vijay']
  list2 = ['raju', 'sagar', 'vipul']
  listitem1: any;
  listitem2: any;
  ondownKey() {
      if(this.listitem1){
        this.list2.push(this.listitem1)
        this.removeListItem(this.list1, this.listitem1);
        this.listitem1=null
      }
  }
  onupKey() {
      if(this.listitem2){
        this.list1.push(this.listitem2)
        this.removeListItem(this.list2, this.listitem2);
        this.listitem2=null
      }
  }

  removeListItem(list: string[], item: string) {
    const index = list.indexOf(item);
    if (index !== -1) {
      list.splice(index, 1);
    }
  }

  onRadioChange1(value: any) {
    this.listitem1 = value;
    console.log('l1:', this.listitem1);

  }
  onRadioChange2(value: any) {
    this.listitem2 = value;
    console.log('l2:', this.listitem2);
  }
}
