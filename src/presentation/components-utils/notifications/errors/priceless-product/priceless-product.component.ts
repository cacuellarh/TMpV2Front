import { Component } from '@angular/core';
import { ErrorBaseComponent } from '../../../../commons/error-base/error-base.component';

@Component({
  selector: 'app-priceless-product',
  standalone: true,
  imports: [ErrorBaseComponent],
  templateUrl: './priceless-product.component.html',
  styleUrl: './priceless-product.component.css'
})
export class PricelessProductComponent {
  public details : string = "Se ha detectado un producto, pero no se encontró un precio asociado. Esto ocurre cuando el precio no es visible en la URL que proporcionaste."
}
