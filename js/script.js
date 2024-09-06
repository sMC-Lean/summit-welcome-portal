"use strict";
import { modalText } from "./data.js";

// select elements;
const buttonContainer = document.querySelector(".buttons");

// functions;

// event listeners;
buttonContainer.addEventListener("click", (e) => {
  console.log(modalText[e.target.id]);
});
