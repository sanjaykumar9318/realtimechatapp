import express from "express"
const router = express.Router()
import { signup,login,logout,updateprofile,checkAuth } from "../contollers/auth.controller.js" 
import protectedRoute from "../middlewares/auth.middleware.js"

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

router.put("/updateprofile",protectedRoute,updateprofile)

router.get("/check",protectedRoute,checkAuth)

export default router;