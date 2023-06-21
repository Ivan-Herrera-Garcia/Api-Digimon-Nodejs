const mongoose = require("mongoose");
const app = require("./app");

const {
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOST,
    API_VERSION,
    IP_SERVER
} = require("./constants");

const PORT = process.env.POST || 3000;


mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,

    (error) => {
        if (error) throw error;
        app.listen(PORT, () => {
            console.log("#################");
            console.log("## API VERSION ##");
            console.log("#################");
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}/`);
        });
    }
);