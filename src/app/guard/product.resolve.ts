import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/';

@Injectable()
export class ProductResolve implements  Resolve<Product> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
        const productId: number = route.params['id'];
        if (Number(productId) === 1) {
            return new Product(2, 'iPhone7');
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }
    }
    constructor(private router: Router) {}
}
