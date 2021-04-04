import express from "express";
import fetch from "node-fetch";
require("dotenv").config();

const router = express.Router();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

router.get("/authenticate", async (req, res) => {
  const code = req.query.code;

  const url = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;
  try {
    const request = await fetch(url, {
      method: "POST",
      headers: { Accept: "application/json" },
    });
    const response = await request.json();
    const { access_token = "", token_type = "" } = response;
    res.status(200).send({ access_token, token_type });
  } catch (err) {
    res.status(400).send({ err });
  }
});

export default router;
