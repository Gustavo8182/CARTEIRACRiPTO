import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const pS = value.split('');
    return `(${pS[0]}${pS[1]}) ${pS[2]}${pS[3]}${pS[4]}${pS[5]}${pS[6]} - ${pS[7]}${pS[8]}${pS[9]}${pS[10]}`;
  }

}
