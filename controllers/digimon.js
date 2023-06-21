const Digimon = require("../models/digimon");

//Ver todos los digimons

async function getDigimons(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit)
    };

    Digimon.paginate({}, options, (error, courses) => {
        if (error) res.status(400).send({mes: "Error al obtener los digimons"});
        else res.status(200).send(courses);
    });
}

// Un digimon por ID

async function getDigimonById(req, res) {
    try {
        const { id } = req.params;
        const digimon = await Digimon.findById(id);

        if (!digimon) {
            return res.status(404).send({ msg: `No se ha encontrado el pokémon con id: ${id}` });
        }

        res.status(200).send(digimon);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error interno del servidor" });
    }
}

// Un Digimon por nombre

async function getDigimonByName(req, res) {
    try {
        const { name } = req.params;
        const digimon = await Digimon.find({nombre: name});
        
        if (digimon.length === 0) {
            return res.status(404).send({mes :`No se encontro el digimon con el nombre de ${name}`});
        }

        res.status(200).send(digimon);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error interno del servidor"});
    }
}


module.exports = {
    getDigimons,
    getDigimonById,
    getDigimonByName,
};