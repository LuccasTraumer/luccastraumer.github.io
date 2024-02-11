import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'definitionDate',
  standalone: true
})
export class DefinitionDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value === undefined ? "present" : value;
  }

}
