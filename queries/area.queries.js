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

const Area = db.area; // Cambio de nombre de la constante para reflejar el modelo

const getArea = async (req, res) => {
    try {
        const foundAreas = await Area.findAll();

        return res.status(200).json({
            code: 200,
            msg: "Ok. These are all areas",
            body: foundAreas,
        });
    } catch (error) {
        const response = getResponse(500);
        res.status(response.code).json({ message: response.msg });
    }
};

const createArea = async (req, res) => {
    const foundArea = await Area.findAll({
        where: {
            name: req.body.name,
        },
    });

    if (foundArea.length) {
        return res.status(400).json({
            code: 400,
            msg: "Area name duplicated",
            body: foundArea,
        });
    }
    try {
        const area = await Area.create(req.body);
        res.json(area);
    } catch (error) {
        const response = getResponse(500);
        res.status(response.code).json({ message: response.msg });
    }
};

const deleteArea = async (req, res) => {
    try {
        const areaToDelete = await Area.findByPk(req.params.id);

        if (!areaToDelete) {
            return res.status(404).json({
                code: 404,
                msg: "Area not found",
            });
        }

        await areaToDelete.destroy();

        return res.status(200).json({
            code: 200,
            msg: "Area deleted successfully",
            body: areaToDelete,
        });
    } catch (error) {
        const response = getResponse(500);
        res.status(response.code).json({ message: response.msg });
    }
};

const putArea = async (req, res) => {
    try {
        const { id } = req.params;
        const area = await Area.findByPk(id);

        if (!area) {
            const response = getResponse(404);
            return res.status(response.code).json({ message: response.msg });
        }

        const requiredFields = ['name', 'description']; // Cambio de los campos requeridos
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ message: `${field} is required` });
            }
        }

        try {
            await area.update(req.body);
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

const patchArea = async (req, res) => {
    try {
        const { id } = req.params;
        const area = await Area.findByPk(id);

        if (!area) {
            return res.status(404).json({
                code: 404,
                msg: "Area not found",
            });
        }

        // Aquí iría el código para actualizar parcialmente el área

        return res.status(200).json({
            code: 200,
            msg: "Area updated successfully",
            body: area,
        });
    } catch (error) {
        const response = getResponse(500);
        res.status(response.code).json({ message: response.msg });
    }
};

module.exports = {
    getArea,
    createArea,
    deleteArea,
    putArea,
    patchArea
};
