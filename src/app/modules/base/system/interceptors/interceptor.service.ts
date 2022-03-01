import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newRequest = req.clone();
        newRequest.params.append('test', true);

        return next.handle(newRequest);
    }
}
