import app from "./app/app.js";
import { connectedDB } from "./config/db.js";


// database call 
await connectedDB()

// start server 
app.listen(3000, () => {
    console.log('====================================');
    console.log("Server running......................");
    console.log('====================================');
})