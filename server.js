
const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() { //Async được dùng để khai báo một hàm bất đồng bộ
    try {
        await MongoDB.connect(config.db.uri); //Await làm cho JavaScript đợi cho đến khi promise trả về kết quả
        console.log("Connected to the databases!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}.`);
        });
    } catch (error) {
        console.log("Can not connect to databases!", error);
        process.exit();
    }
}

startServer();