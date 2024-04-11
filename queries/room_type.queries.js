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
//put is used to update a record
const updateRoom_type = async (req, res) => {
  try {
    const roomTypeId = req.params.id;
    const updatedRoomType = req.body;

    const room_type = await Room_type.findByPk(roomTypeId);
    if (!room_type) {
      res.status(404).json({ message: "Room type not found" });
      return;
    }

    room_type.name = updatedRoomType.name;
    room_type.description = updatedRoomType.description;
    await room_type.save();

    res.json(room_type);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

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

  //patch is used to update a record partially, the difference between put and patch is that put updates the entire record and patch updates only the fields that are sent in the request
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
}
};
