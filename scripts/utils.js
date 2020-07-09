import { formOverlaysList, closeParentForm, formClose } from "./index.js";

function setOverlayListeners() {
  formOverlaysList.forEach((overlayElement) => {
   overlayElement.addEventListener("click", closeParentForm);
  }
)};

function handleEscUp(evt) {
  const formsList = Array.from(document.querySelectorAll(".form"));
    if (evt.keyCode == 27) {
      formsList.forEach((modal) => {
          if (modal.classList.contains("form_is-opened")) {
            formClose(modal);
        }
        }); 
      }
}

function fillImagePopup(link, title) {
  const bigImage = document.querySelector(".big-image__picture");
  const bigImageCaption = document.querySelector(".big-image__caption");
  bigImage.src = link;
  bigImageCaption.textContent = title;
}

export {fillImagePopup, handleEscUp, setOverlayListeners};