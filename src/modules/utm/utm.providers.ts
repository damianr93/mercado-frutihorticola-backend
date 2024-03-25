import { Mongoose } from 'mongoose';
import { utmShema } from './schema/utm.schema';

export const utmProviders = [
    {
        provide: 'UTM_MODEL',
        useFactory: (mongoose: Mongoose) =>
            mongoose.model('utm', utmShema),
        inject: ['DATABASE_CONNECTION'],
    }
];