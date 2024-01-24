import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
            trim: true,
        },
        category: {
            type: String,
            enum: [
                "tees",
                "knitwear",
                "top",
                "outerwear",
                "pants",
                "shorts",
                "accessoires",
                "footwear",
                "special",
            ],
            required: true,
        },
        description: [
            {
                type: String,
                required: [true, "Please add a description"],
                trim: true,
            },
        ],
        modelUrl: {
            type: String,
        },
        imageUrls: [
            {
                type: String,
            },
        ],
        options: [
            {
                color: {
                    colorname: {
                        type: String,
                    },
                    colorhex: {
                        type: String,
                    },
                },
                sizes: [
                    {
                        size: {
                            type: String,
                            enum: ["ONESIZE", "XXS", "XS", "S", "M", "L", "XL"],
                            required: true,
                        },
                        quantity: {
                            type: Number,
                            required: true,
                            default: 0,
                        },
                    },
                ],
            },
        ],
        price: {
            type: Number,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;