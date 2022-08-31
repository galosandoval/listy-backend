"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const lists_router_1 = require("./routes/lists.router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (_req, res) => {
    res.send('Express + TypeScript Server');
});
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true,
}));
app.use('/lists', lists_router_1.listRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
