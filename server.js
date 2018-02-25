import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import fs from "fs";
import path from "path";

import App from "./App";
import fetchData from "./fetch-data";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=600");
  next();
});

const index = fs.readFileSync(`index.html`, "utf-8");

app.get("**", (req, res) => {
  fetchData().then(data => {
    const html = renderToString(<App postData={data} />);
    const finalHtml = index.replace("<!-- ::APP :: -->", html);
    res.send(finalHtml);
  });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
