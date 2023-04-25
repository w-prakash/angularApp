import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value:any, type:any, length:any) {
    console.log('number...', value, type, length);
    if(type === 'number') {
      return Math.sqrt(value);
    } 
    if(type === 'string') {
      return value.toString().substring(0, length) + '...'
    }
    return null;
  }

}
