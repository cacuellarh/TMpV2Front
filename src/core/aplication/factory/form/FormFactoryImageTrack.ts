import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFactoryForm } from '../../contracts/factory/IFormFactory';
import { Product } from '../../../domain/Entities/Product';

export class FormFactoryImageTrack implements IFactoryForm {
  private builder: FormBuilder = new FormBuilder();

  CreateForm(): FormGroup {
    const product: Product = {
      Descripcion: '',
      Descuento: '',
      Precio: 0,
      TipoMoneda: '',
    };
    return this.builder.group({
      email: ['', Validators.required],
      url: [''],
      product: [product, Validators.required],
    });
  }
}
