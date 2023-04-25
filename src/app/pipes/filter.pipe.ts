import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any, name: string)  {
    console.log('data...', data);
    return data.filter((ele: { name: string; }) => ele.name == name);
  }

}
