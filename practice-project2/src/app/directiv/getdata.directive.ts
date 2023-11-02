import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGetdata]'
})
export class GetdataDirective {

  constructor(el:ElementRef) {
    console.log(el.nativeElement);
    
   }

}
