import { Mongoose } from 'mongoose';
import { productShema } from './schema/products.schema';


export const productsProviders = [
    {
        provide: 'PRODUCTS_MODEL',
        useFactory: (mongoose: Mongoose) =>
            mongoose.model('products', productShema),
        inject: ['DATABASE_CONNECTION'],
    }
];