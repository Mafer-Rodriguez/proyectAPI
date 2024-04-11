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
  
  const staff = db.staff; 
  
  const getStaff = async (req, res) => {
    try {
      const foundStaff = await Staff.findAll();
  
      return res.status(200).json({
        code: 200,
        msg: "Ok. These are all staffs",
        body: foundStaff,
      });
    } catch (error) {
      const response = getResponse(500);
      res.status(response.code).json({ message: response.msg });
    }
  };
  
  const createStaff = async (req, res) => {
    const foundStaff = await staff.findAll({
      where: {
    
        number: req.body.number,
      },
    });
  
    if (foundStaff.length) {
      return res.status(400).json({
        code: 400,
        msg: "Staff number duplicated",
        body: foundStaff,
      });
    }
    try {
      const staff = await Staff.create(req.body);
      res.json(Staff);
    } catch (error) {
      const response = getResponse(500);
      res.status(response.code).json({ message: response.msg });
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
        body: staffToDelete,
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
  
      const requiredFields = ['number', 'description']; // Cambio de los campos requeridos
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json({ message: `${field} is required` });
        }
      }
  
      try {
        await staff.update(req.body);
        const response = getResponse(200);
        res.status(response.code).json({ message: response.msg });
      } catch (error) {
        const response = getResponse(500);
        res.status(response.code).json({ message: response.msg });
      }
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
  
      // Aquí iría el código para actualizar parcialmente el staff
  
      return res.status(200).json({
        code: 200,
        msg: "Staff updated successfully",
        body: staff,
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
  