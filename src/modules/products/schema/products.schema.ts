import mongoose from 'mongoose';

export const productShema = new mongoose.Schema({
    product: String,
    marca:String,
    utmValue: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
    }
});

productShema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    },
});
