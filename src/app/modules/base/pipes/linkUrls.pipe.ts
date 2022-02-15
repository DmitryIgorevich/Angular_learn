import {
    Pipe,
    PipeTransform,
} from '@angular/core';

@Pipe({
    name: 'linkUrls',
})
export class LinkUrlsPipe implements PipeTransform {

    transform(index: number, urls: string[]): any {
        const arrayPaths = urls.slice(0, index + 1).filter(item => !!item);
        return '/' + arrayPaths.join('/');
    }

}
