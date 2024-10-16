"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/movies", routes_1.default);
app.use((req, res, next) => {
    next(Error("Route not found"));
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error, req, res, next) => {
    console.error(error);
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
        errorMessage = error.message;
        res.status(500).json(errorMessage);
    }
});
exports.default = app;
