"use strict";
import { modalText } from "./data.js";

// select elements;
const buttonContainer = document.querySelector(".buttons");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const overlay = document.querySelector(".overlay");

// functions;

// event listeners;

// grabs the id from a clicked button and retrieves the corresponding text from the data object to populate the modal;
buttonContainer.addEventListener("click", (e) => {
  const currentSelection = modalText[e.target.id];
  modalContent.innerHTML = currentSelection;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// closes the modal and hidesn the modal and overlay;

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-button")) {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }
});
