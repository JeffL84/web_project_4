const formOverlays = document.querySelectorAll(".form__overlay");
const formOverlaysList = Array.from(formOverlays);

function formOpen(modal) {
  modal.classList.add("form_is-opened");
  document.addEventListener("keyup", handleEscUp);
}

function formClose(modal) {
  modal.classList.remove("form_is-opened");
  document.removeEventListener("keyup", handleEscUp);
}

function setOverlayListeners() {
  formOverlaysList.forEach((overlayElement) => {
   overlayElement.addEventListener("click", closeParentForm);
  }
)};

function closeParentForm(evt) {
  formClose(evt.target.closest(".form"));
  evt.target.removeEventListener("click", closeParentForm);
}

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

export {fillImagePopup, formOpen, formClose, setOverlayListeners, closeParentForm, handleEscUp, formOverlaysList};