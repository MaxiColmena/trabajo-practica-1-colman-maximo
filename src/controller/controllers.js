import Character from "../models/character.model.js";

export const createCharacter = async(req, res)=>{
    try {
        const {name, ki, race, gender, description} = req.body;
        const newCharacter = await Character.create({name, ki, race, gender, description});
        res.status(201).json(newCharacter);
    } catch (err) {
        res.status(500).json({message: "Error al crear el personaje", err});
    }
}

export const getAllCharacter = async(req, res)=>{
    try {
        const characterAll = await Character.findAll();
        res.status(201).json(characterAll);
    } catch (error) {
        res.status(500).json({message: "Error al obtener todos los personajes", err});
    }
}

export const getCharacterById = async(req, res)=>{
    try {
        const {id} = req.body;
        const characterById = await Character.findByPk(id);
        if(!characterById){
            return res.status(404).json({message: "Personaje no encontrado o no existente"});
        }
        res.status(201).json(characterById);
    } catch (error) {
        res.status(500).json({message: "Error al obtener los personajes por ID", err});
    }
}

export const putCharacter = async(req, res)=>{
    try {
        const {id} = req.params;
        const {name, ki, race, gender, description} = req.body;
        const characterPut = await Character.findByPk(id);
        if(!characterPut){
            return res.status(404).json({message: "Personaje no encontrado o no existente"});
        }
        await characterPut.update({name, ki, race, gender, description});
        res.status(200).json({message: "Se actualizó", characterPut})
    } catch (error) {
        res.status(500).json({message: "Error al actualizar los personajes por ID", err});
    }
}

export const deleteCharacter = async(req, res)=>{
    try {
        const {id} = req.params;
        const characterdeleted = await Character.findByPk(id);
        if(!characterdeleted){
        return res.status(404).json({message: "Personaje no encontrado o no existente"});
        }
        await characterdeleted.destroy();
        res.status(204).json({message: "Se Eliminó", characterdeleted})
    } catch (error) {
        res.status(500).json({message: "Error al eliminar los personajes por ID", err});
    }
}