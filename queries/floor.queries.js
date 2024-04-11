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
  
  const Floor = db.floors; 
  
  const getFloor = async (req, res) => {
    try {
      const foundFloors = await Floor.findAll();
  
      return res.status(200).json({
        code: 200,
        msg: "Ok. These are all floors",
        body: foundFloors,
      });
    } catch (error) {
      const response = getResponse(500);
      res.status(response.code).json({ message: response.msg });
    }
  };
  
  const createFloor = async (req, res) => {
    const foundFloor = await Floor.findAll({
      where: {
    
        number: req.body.number,
      },
    });
  
    if (foundFloor.length) {
      return res.status(400).json({
        code: 400,
        msg: "Floor number duplicated",
        body: foundFloor,
      });
    }
    try {
      const floor = await Floor.create(req.body);
      res.json(floor);
    } catch (error) {
      const response = getResponse(500);
      res.status(response.code).json({ message: response.msg });
    }
  };
  
  const deleteFloor = async (req, res) => {
    try {
      const floorToDelete = await Floor.findByPk(req.params.id);
  
      if (!floorToDelete) {
        return res.status(404).json({
          code: 404,
          msg: "Floor not found",
        });
      }
  
      await floorToDelete.destroy();
  
      return res.status(200).json({
        code: 200,
        msg: "Floor deleted successfully",
        body: floorToDelete,
      });
    } catch (error) {
      const response = getResponse(500);
      res.status(response.code).json({ message: response.msg });
    }
  };
  
  const putFloor = async (req, res) => {
    try {
      const { id } = req.params;
      const floor = await Floor.findByPk(id);
  
      if (!floor) {
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
        await floor.update(req.body);
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
  
  const patchFloor = async (req, res) => {
    try {
      const { id } = req.params;
      const floor = await Floor.findByPk(id);
  
      if (!floor) {
        return res.status(404).json({
          code: 404,
          msg: "Floor not found",
        });
      }
  
      // Aquí iría el código para actualizar parcialmente el piso
  
      return res.status(200).json({
        code: 200,
        msg: "Floor updated successfully",
        body: floor,
      });
    } catch (error) {
      const response = getResponse(500);
      res.status(response.code).json({ message: response.msg });
    }
  };
  
  module.exports = {
    getFloor,
    createFloor,
    deleteFloor,
    putFloor,
    patchFloor
  };
  