"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRouter = void 0;
// import express from 'express'
const express_1 = __importDefault(require("express"));
const lists_controller_1 = require("../controllers/lists.controller");
const router = express_1.default.Router();
router.get('/', lists_controller_1.listController.get);
exports.listRouter = router;
