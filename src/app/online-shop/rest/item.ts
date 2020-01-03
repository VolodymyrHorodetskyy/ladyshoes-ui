import {Image} from './image';

export class Item {

  id: number;
  name: string;
  description: string;
  images: Image[];
  price: number;
  newPrice: number;
  discountNumberOfDays: number;
  material: string;


}
