const db = require("../db.js");
const Room = db.room;

const getRoom = async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateRoom = async (req, res) => {
    try {
        const roomId = req.params.id;
        const updatedRoom = req.body;

        const room = await Room.findByPk(roomId);
        if (!room) {
            res.status(404).json({ message: "Room not found" });
            return;
        }

        room.name = updatedRoom.name;
        room.description = updatedRoom.description;
        await room.save();

        res.json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRoom = async (req, res) => {
    try {
        const roomId = req.params.id;

        const room = await Room.findByPk(roomId);
        if (!room) {
            res.status(404).json({ message: "Room not found" });
            return;
        }
        await Room.destroy({
            where: {
                id: roomId
            }
        });
        res.json({ message: "Room deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const patchRoom = async (req, res) => {
    try {
        const roomId = req.params.id;
        const patchRoom = req.body;

        const room = await Room.findByPk(roomId);
        if (!room) {
            res.status(404).json({ message: "Room not found" });
            return;
        }

        if (patchRoom.name) {
            room.name = patchRoom.name;
        }

        if (patchRoom.description) {
            room.description = patchRoom.description;
        }

        await room.save();

        res.json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom,
    patchRoom
};
