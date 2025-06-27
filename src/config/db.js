import sequelize from "./database.js";

const initDB = async()=>{
    try {
        await sequelize.authenticate();
        console.log("Conexion a mysql con éxito.");
        await sequelize.sync();
    } catch (err) {
        return res.status(500).json({Message: "no funciona nada", err});
    }
};

export default initDB;

//esto siempre es asi
