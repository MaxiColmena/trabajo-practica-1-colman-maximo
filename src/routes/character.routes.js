import express from "express";
import { createCharacter, getAllCharacter, getCharacterById, putCharacter, deleteCharacter } from "../controller/controllers.js";

const router = express.Router();
router.post("/", createCharacter);
router.get("/", getAllCharacter);
router.get("/:id", getCharacterById);
router.put("/:id", putCharacter);
router.delete("/:id", deleteCharacter);

export default router;