import express from "express"
import "express-async-errors";
import dotenv from "dotenv"
import router from "./routers/router.js";
import { errorHandler } from "./middlewares/errorHandler.js"


dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})