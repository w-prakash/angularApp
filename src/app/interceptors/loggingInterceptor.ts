import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";




export class LoggingInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('logging Interceptor...');
        return next.handle(request);
    }
}