import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  transform(images: any[]): string {
    return images && images.length > 0
      ? images[0].url
      : 'https://thumbs.dreamstime.com/z/no-image-available-icon-vector-illustration-flat-design-140476186.jpg';
  }
}
