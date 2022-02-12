import {
    Inject,
    Injectable
} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {BASE_URL_TOKEN} from 'modules/base/system/tokens';

@Injectable()
export class RequestService {

    constructor(
        @Inject(BASE_URL_TOKEN)
        private _baseUrl: string,
        private http: HttpClient,
    ) {}

    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(
            this._baseUrl + url,
        );
    }
}
