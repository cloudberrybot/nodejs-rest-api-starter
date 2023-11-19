"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteController = __importStar(require("../controllers/v1/noteController"));
const router = (0, express_1.Router)();
router.get('/:id', noteController.getNote);
router.get('/', noteController.getNotes);
router.post('/', noteController.createNote);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZVJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGVSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFxRDtBQUNyRCxpRkFBa0U7QUFFbEUsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUE7QUFFdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE9BQW9DLENBQUMsQ0FBQTtBQUN2RSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsUUFBcUMsQ0FBQyxDQUFBO0FBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxVQUF1QyxDQUFDLENBQUE7QUFDeEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLFVBQXVDLENBQUMsQ0FBQTtBQUMxRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsVUFBdUMsQ0FBQyxDQUFBO0FBRTdFLGtCQUFlLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgUmVxdWVzdEhhbmRsZXIsIFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBub3RlQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy92MS9ub3RlQ29udHJvbGxlcidcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcblxucm91dGVyLmdldCgnLzppZCcsIG5vdGVDb250cm9sbGVyLmdldE5vdGUgYXMgdW5rbm93biBhcyBSZXF1ZXN0SGFuZGxlcilcbnJvdXRlci5nZXQoJy8nLCBub3RlQ29udHJvbGxlci5nZXROb3RlcyBhcyB1bmtub3duIGFzIFJlcXVlc3RIYW5kbGVyKVxucm91dGVyLnBvc3QoJy8nLCBub3RlQ29udHJvbGxlci5jcmVhdGVOb3RlIGFzIHVua25vd24gYXMgUmVxdWVzdEhhbmRsZXIpXG5yb3V0ZXIucHV0KCcvOmlkJywgbm90ZUNvbnRyb2xsZXIudXBkYXRlTm90ZSBhcyB1bmtub3duIGFzIFJlcXVlc3RIYW5kbGVyKVxucm91dGVyLmRlbGV0ZSgnLzppZCcsIG5vdGVDb250cm9sbGVyLmRlbGV0ZU5vdGUgYXMgdW5rbm93biBhcyBSZXF1ZXN0SGFuZGxlcilcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iXX0=