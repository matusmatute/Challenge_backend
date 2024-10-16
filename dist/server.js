"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const port = 5000;
mongoose_1.default
    .connect(process.env.MONGO_CONNECTION)
    .then(() => {
    console.log("Connected to MongoDB");
    app_1.default.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
})
    .catch(console.error);
