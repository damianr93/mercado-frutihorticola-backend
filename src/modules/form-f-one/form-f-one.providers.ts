import { Mongoose } from 'mongoose';
import { formFOneShema } from './schema/form-f-one.schema';



export const formFOneProviders = [
    {
        provide: 'FORMFONE_MODEL',
        useFactory: (mongoose: Mongoose) =>
            mongoose.model('FormFOne', formFOneShema),
        inject: ['DATABASE_CONNECTION'],
    }
];