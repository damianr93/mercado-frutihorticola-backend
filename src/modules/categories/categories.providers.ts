import { Mongoose } from 'mongoose';
import { categoriesShema } from './schema/categories.schema';


export const categoriesProviders = [
    {
        provide: 'CATEGORIES_MODEL',
        useFactory: (mongoose: Mongoose) =>
            mongoose.model('categories', categoriesShema),
        inject: ['DATABASE_CONNECTION'],
    }
];