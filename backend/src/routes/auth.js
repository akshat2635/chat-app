import { Router } from "express";

const router = Router();

router.post("/signup", (req, res) => {
  res.send("signup page");
});

router.post("/login", (req, res) => {
  res.send("login page");
});

router.post("/logout", (req, res) => {
  res.send("logout page");
});

export default router;
