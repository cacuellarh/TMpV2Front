import { Component } from '@angular/core';
import { ErrorBaseComponent } from '../../../../commons/error-base/error-base.component';

@Component({
  selector: 'app-more-than-one-product',
  standalone: true,
  imports: [ErrorBaseComponent],
  templateUrl: './more-than-one-product.component.html',
  styleUrl: './more-than-one-product.component.css'
})
export class MoreThanOneProductComponent {
  public details : string = "Hay más de un producto visible en la URL que proporcionaste. Por favor, asegúrate de que solo se muestre un producto y vuelve a intentarlo."
}
