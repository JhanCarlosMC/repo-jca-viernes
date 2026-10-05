const { Schema, model } = require('mongoose');

const productoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre del producto es obligatorio'],
      trim: true
    },
    descripcion: { type: String, trim: true, maxlength: 300 },
    precio: {
      type: Number,
      required: [true, 'El precio es obligatorio'],
      min: [0, 'El precio no puede ser negativo']
    },
    categoria: { type: String, trim: true, lowercase: true },
    stock: { type: Number, min: [0, 'El stock no puede ser negativo'], default: 0 },
    disponible: { type: Boolean, default: true }
  },
  {
    timestamps: true, // agrega createdAt y updatedAt automáticamente
    versionKey: false // oculta el campo __v
  }
);

module.exports = model('Producto', productoSchema);