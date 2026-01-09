import express from "express"
import protectedRoute from "../middlewares/auth.middleware.js"
import { getUsersForSidebar,getMessages, sendMessage } from "../contollers/message.controller.js"
const router = express.Router()

router.get("/users",protectedRoute,getUsersForSidebar)
router.get("/:id",protectedRoute,getMessages)

router.post("/sendmessage",protectedRoute,sendMessage)

export default router