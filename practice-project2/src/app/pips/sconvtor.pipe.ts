import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMB'
})
export class SconvtorPipe implements PipeTransform {
val:any;
  transform(value: any, type:any ): any {
    if(type=='kb'){
      const val=Math.round(value/1024)
      this.val= val
    }else if(type=='bit'){
      const val=Math.round(value/(8388608));
      this.val= val
    }
    else if(type=='byte') {
      const val=Math.round(value/(1024 * 1024));
      this.val= val
    }else if(type=='gb'){
      const val=Math.round(value*1024);
      this.val= val
    }else if(type=='tb'){
      const val=Math.round(value*(1024 * 1024));
      this.val= val
    }else{
      this.val=value
    }
    return this.val;
  }

}
