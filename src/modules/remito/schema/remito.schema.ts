import mongoose from 'mongoose';

export const remitoShema = new mongoose.Schema({
    remitoNumber: String,
    introductor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    products:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'products',
    },
    totalPrice: Number,
    addressee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
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

remitoShema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    },
});
