import express from 'express';
import "dotenv/config"
import {db} from "./db.js"
import {userRouter} from "./router/userRouter.js"

import {profileRouter} from "./router/profileRouter.js"
import {adminRouter} from "./router/adminRouter.js"
import {eventRouter} from "./router/eventRouter.js"
import cors from "cors"

const app = express();
app.use(express.json({ limit: '16mb' }));

app.use(cors());
app.use("/admin", adminRouter);
app.use("/event", eventRouter);
app.use("/user", userRouter);
app.use("/",profileRouter);
app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
    db();
})