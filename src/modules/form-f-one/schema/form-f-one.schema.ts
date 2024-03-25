import mongoose from 'mongoose';

export const formFOneShema = new mongoose.Schema({
    remitoNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'remito',
    },
    introductor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    categories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
    },
    totalPrice: Number,
    createdAt: {
        type: String,
        default: new Date().toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }),
    },
});

formFOneShema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    },
});
