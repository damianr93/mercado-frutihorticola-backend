import mongoose from 'mongoose';

export const categoriesShema = new mongoose.Schema({
    name: String,
    description: String,
});

categoriesShema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    },
});
