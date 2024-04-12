const db = require("../db.js");

const Room_type = db.room_type;

const getRoom_type = async (req, res) => {
  try {
    const room_type = await Room_type.findAll();
    res.json(room_type);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRoom_type = async (req, res) => {
  try {
    const room_type = await Room_type.create(req.body);
    res.json(room_type);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRoom_type = async (req, res) => {
  try {
    const roomTypeId = req.params.id;
    const updatedRoomType = req.body;

    const room_type = await Room_type.findByPk(roomTypeId);
    if (!room_type) {
      res.status(404).json({ message: "Room type not found" });
      return;
    }

    // Definir los campos requeridos
    const requiredFields = ['name', 'description'];

    // Verificar si todos los campos requeridos están presentes en req.body
    for (const field of requiredFields) {
      if (!updatedRoomType.hasOwnProperty(field)) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    // Actualizar los campos en el registro de tipo de habitación
    room_type.name = updatedRoomType.name;
    room_type.description = updatedRoomType.description;
    await room_type.save();

    res.json(room_type);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteRoom_type = async (req, res) => {
  try {
    const roomTypeId = req.params.id;

    const room_type = await Room_type.findByPk(roomTypeId);
    if (!room_type) {
      res.status(404).json({ message: "Room type not found" });
      return;
    }
    await Room_type.destroy({
      where: {
        id: roomTypeId
      }
    });
    res.json({ message: "Room type deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const patchRoom_type = async (req, res) => {
  try {
    const roomTypeId = req.params.id;
    const patchRoom_type = req.body;

    const room_type = await Room_type.findByPk(roomTypeId);
    if (!room_type) {
      res.status(404).json({ message: "Room type not found" });
      return;
    }

    if (patchRoom_type.name) {
      room_type.name = patchRoom_type.name;
    }

    if (patchRoom_type.description) {
      room_type.description = patchRoom_type.description;
    }

    await room_type.save();

    res.json(room_type);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRoom_type,
  createRoom_type,
  updateRoom_type,
  deleteRoom_type,
  patchRoom_type
};