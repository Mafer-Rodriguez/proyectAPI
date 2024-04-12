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

const Building = db.building; // Cambio de nombre de la constante para reflejar el modelo

const getBuilding = async (req, res) => {
  try {
    const foundBuildings = await Building.findAll();

    return res.status(200).json({
      code: 200,
      msg: "Ok. These are all the buildings",
      body: foundBuildings,
    });
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};

const createBuilding = async (req, res) => {
  const foundBuilding = await Building.findAll({
    where: {
      name: req.body.name,
    },
  });

  if (foundBuilding.length) {
    return res.status(400).json({
      code: 400,
      msg: "Building's name duplicated",
      body: foundBuilding,
    });
  }
  try {
    const building = await Building.create(req.body);
    res.json(building);
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};

const deleteBuilding = async (req, res) => {
  try {
    const buildingToDelete = await Building.findByPk(req.params.id);

    if (!buildingToDelete) {
      return res.status(404).json({
        code: 404,
        msg: "Building not found",
      });
    }

    await buildingToDelete.destroy();

    return res.status(200).json({
      code: 200,
      msg: "Building deleted successfully",
      body: buildingToDelete,
    });
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};

const putBuilding = async (req, res) => {
  try {
    const { id } = req.params;
    const building = await Building.findByPk(id);

    if (!building) {
      const response = getResponse(404);
      return res.status(response.code).json({ message: response.msg });
    }

    const requiredFields = ['name', 'description'];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    await building.update(req.body);

    // Recuperar el edificio actualizado 
    const updatedBuilding = await Building.findByPk(id);

    const response = getResponse(200);
    return res.status(response.code).json({
      message: response.msg,
      body: updatedBuilding // Devolver el edificio actualizado
    });
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};


const patchBuilding = async (req, res) => {
  try {
    const { id } = req.params;
    const building = await Building.findByPk(id);

    if (!building) {
      return res.status(404).json({
        code: 404,
        msg: "Building not found",
      });
    }

    // Actualización parcial del edificio
    await building.update(req.body);

    // Recuperar el edificio actualizado 
    const updatedBuilding = await Building.findByPk(id);

    return res.status(200).json({
      code: 200,
      msg: "Building updated successfully",
      body: updatedBuilding, // Devolver el edificio actualizado
    });
  } catch (error) {
    const response = getResponse(500);
    res.status(response.code).json({ message: response.msg });
  }
};

module.exports = {
  getBuilding,
  createBuilding,
  deleteBuilding,
  putBuilding,
  patchBuilding
};
