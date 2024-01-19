import { Pipe, PipeTransform } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';

@Pipe({
  name: 'transformPath',
  standalone: true
})
export class TransformPathPipe implements PipeTransform {

  transform(value: any, args?: any): CloudinaryImage {
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dfixlnbhd'
      }
    });

    console.warn(`value é: ${value}; Transformado fica: ${cld.image(value)}`)
    return cld.image(value);
  }

}
