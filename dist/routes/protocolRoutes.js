"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const protocolController_1 = __importDefault(require("../controllers/protocolController"));
const router = (0, express_1.Router)();
router.get('/', protocolController_1.default.list);
exports.default = router;
