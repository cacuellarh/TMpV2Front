import { ProdcutDto } from '../../domain/dto/ProductDto';
import { Product } from '../../domain/Entities/Product';
import { IMap } from '../contracts/mapper/IMap';
import { Result } from '../response/Result';

export class ProductMap implements IMap<Result<Product>, ProdcutDto> {
  MapTo(origin: ProdcutDto): Result<Product> {
    try {
      var product: Product = {
        Descripcion: origin.descripcion,
        Precio: Number(origin.precio),
        PrecioOriginal: Number(origin.precioOriginal),
        Descuento: origin.descuento,
      };

      return Result.Success<Product>(product);
    } catch (ex) {
      return Result.Failure<Product>(
        'Error al mapear producto, detalles: ' + ex
      );
    }
  }
}
