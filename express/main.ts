import { app } from "./app";
import { APP_PORT } from "./config";

app.listen(APP_PORT,  () => {
    console.log(`Example app listening at http://localhost:${APP_PORT}`)
});
