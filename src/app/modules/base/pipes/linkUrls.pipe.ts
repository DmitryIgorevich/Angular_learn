import {
    Pipe,
    PipeTransform,
} from '@angular/core';

@Pipe({
    name: 'linkUrls',
})
export class LinkUrlsPipe implements PipeTransform {

    transform(index: number, urls: string[], getName: boolean = false): string {
        const arrayPaths = urls.slice(0, index + 1)
            .map(item => {
                const match = item.match(/^[A-z0-9]+/);

                if (match) {
                    return match[0];
                }

                return item;
            });

        if (getName) {
            return arrayPaths[index] || 'Главная';
        }

        return arrayPaths.join('/');
    }

}
