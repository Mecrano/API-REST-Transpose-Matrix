// Requires
const app = require("./app/app");
const dotenv = require("dotenv");

// .env Config
dotenv.config();

const { PORT_LOCAL } = process.env;

// Start our App
const PORT = process.env.PORT || PORT_LOCAL;
app.listen(PORT, () => {
    console.log(`Listening on ports ${PORT}!`);
});
