"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    synopsis: { type: String, required: true },
    picture: { type: String, required: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Movie", movieSchema);
