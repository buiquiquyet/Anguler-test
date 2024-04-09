import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(value: number , ...args: unknown[]): string {
    if(value > 18) {
      return 'già'
    }
    return 'trẻ';
  }

}
