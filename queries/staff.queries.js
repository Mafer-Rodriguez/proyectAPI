const getResponse = (code) => {
  let response = { code: 500, msg: "Internal Server Error" };
  switch (code) {
    case 200:
      response = { code: 200, msg: "Ok" };
      break;
    case 400:
      response = { code: 400, msg: "Endpoint not valid" };
      break;
    case 404:
      response = { code: 404, msg: "Not Found" };
      break;
    case 500:
      response = { code: 500, msg: "Internal Server Error" };
      break;
    default:
      response = { code: 500, msg: "Unknown status code" };
  }
  return response;
};

const db = require("../db.js");

const Staff = db.staff;

const getStaff = async (req, res) => {
  try {
    const foundStaff = await Staff.findAll();

    return res.status(200).json({
      code: 200,
      msg: "Ok. These are all the staffs",
      body: foundStaff,
    });
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};

const createStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStaff = async (req, res) => {
  try {
    const StaffToDelete = await Staff.findByPk(req.params.id);

    if (!StaffToDelete) {
      return res.status(404).json({
        code: 404,
        msg: "Staff not found",
      });
    }

    await StaffToDelete.destroy();

    return res.status(200).json({
      code: 200,
      msg: "Staff deleted successfully",
      body: StaffToDelete,
    });
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};

const putStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findByPk(id);

    if (!staff) {
      const response = getResponse(404);
      return res.status(response.code).json({ message: response.msg });
    }

    const requiredFields = ["name", "lastname", "email", "phone_extension", "id_area", "id_room"];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    await staff.update(req.body);

    // Recuperar el staff actualizado después de la actualización completa
    const updatedStaff = await Staff.findByPk(id);

    const response = getResponse(200);
    return res.status(response.code).json({
      message: response.msg,
      body: updatedStaff // Devolver el staff actualizado
    });
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};

const patchStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findByPk(id);

    if (!staff) {
      return res.status(404).json({
        code: 404,
        msg: "Staff not found",
      });
    }

    // Actualización parcial del personal
    await staff.update(req.body); // Esto actualizará solo los campos proporcionados

    // Recuperar el personal actualizado después de la actualización parcial
    const updatedStaff = await Staff.findByPk(id);

    return res.status(200).json({
      code: 200,
      msg: "Staff updated successfully",
      body: updatedStaff, // Devolver el personal actualizado
    });
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};

module.exports = {
  getStaff,
  createStaff,
  deleteStaff,
  putStaff,
  patchStaff,
};