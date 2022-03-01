import {
    Inject,
    Injectable,
} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {EMPTY, Observable} from 'rxjs';

import {BASE_URL_TOKEN} from 'modules/base/system/tokens';
import {catchError} from 'rxjs/operators';

@Injectable()
export class RequestService {

    constructor(
        @Inject(BASE_URL_TOKEN)
        private _baseUrl: string,
        private http: HttpClient,
    ) {}

    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(
            this.concatUrls(url),
        );
    }

    public post<T>(url: string, body: T): Observable<T> {
        return this.http.post<T>(
            this.concatUrls(url),
            body,
        );
    }

    public patch<T>(url: string, body: T): Observable<T> {
        return this.http.patch<T>(
            this.concatUrls(url),
            body,
        )
            .pipe(
                catchError(() => {
                    return EMPTY;
                }),
            );
    }

    protected concatUrls(url: string): string {
        return this._baseUrl + url;
    }
}
