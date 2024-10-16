import { Component } from '@angular/core';
import { ErrorBaseComponent } from "../../../../commons/error-base/error-base.component";

@Component({
  selector: 'app-is-not-ecommerce',
  standalone: true,
  imports: [ErrorBaseComponent],
  templateUrl: './is-not-ecommerce.component.html',
  styleUrl: './is-not-ecommerce.component.css'
})
export class IsNotEcommerceComponent {

  public details : string = "La URL proporcionada no contiene un producto y precio válido."
}
