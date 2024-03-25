import { Mongoose } from 'mongoose';
import { remitoShema } from './schema/remito.schema';




export const remitoProviders = [
    {
        provide: 'REMITO_MODEL',
        useFactory: (mongoose: Mongoose) =>
            mongoose.model('remito', remitoShema),
        inject: ['DATABASE_CONNECTION'],
    }
];