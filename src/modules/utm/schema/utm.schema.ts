import mongoose from 'mongoose';

export const utmShema = new mongoose.Schema({
    value: Number,
});

utmShema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    },
});
