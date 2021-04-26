import { Router } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public http: HttpClient, private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept-1', request);

    const router = this.injector.get(Router);

    const ID_TOKEN = 'token';
    const token = localStorage.getItem(ID_TOKEN);
    console.log('intercept-2-TOKEN', token);
    if (token) {
      request = request.clone({
        setHeaders: {
          ID_TOKEN: token
        }
      } );
    }

    return next.handle(request).do((event: HttpEvent<any>) => {
      console.log('intercept-handle', event);
      if (event instanceof HttpResponse) {
        // success
        console.log('TOKEN', token);
      }
      }, (err: any) => {
          console.log('intercept', err);
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              router.navigate(['nao-autorizado']);
            }
          }
      });
  }
}
