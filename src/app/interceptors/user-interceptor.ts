import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
export class UserInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler){
        console.log('request...', request);
        const api = "abc";
        let modifiy = request.clone({
            params: request.params.append('token', api),
        })
        return next.handle(modifiy)
    }
        
}
