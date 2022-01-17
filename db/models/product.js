const { Schema, SchemaTypes } = require("../connect");
const mongoose = require("../connect");
const { SCHEMAS } = require("../../utils/config");

const productSchema = new Schema(
  {
    title: { type: SchemaTypes.String, required: true, unique: true },
    desc: { type: SchemaTypes.String, required: true, },
    img: { type: SchemaTypes.String, required: true },
    categories: { type: SchemaTypes.Array },
    size: { type: SchemaTypes.String },
    color: { type: SchemaTypes.String },
    price: { type: SchemaTypes.Number, required: true },
    
  },
  { timestamps: true }
);
const ProductModel = mongoose.model(SCHEMAS.PRODUCTS, productSchema);
module.exports = ProductModel;
