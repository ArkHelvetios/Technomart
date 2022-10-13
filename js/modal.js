/* MODAL FORM */
const formButton = document.querySelector(".link-modal-form");
const formModal = document.querySelector(".modal-form");

if (formModal) {
  const formModalContent = formModal.querySelector(".modal-form__wrapper");
  const formModalNameInput = formModalContent.querySelector("[name=modal-form_name]");
  const formModalEmailInput = formModalContent.querySelector("[name=modal-form_email]");
  const formModalTextarea = formModalContent.querySelector("[name=modal-form_message]");

  /* Проверяем поддержку localStorage */
  let isLocalStorage = true;
  let storageName = "";
  let storageEmail = "";

  try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isLocalStorage = false;
  }

  /* Кнопка открытия формы */
  formButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    formModal.classList.add("modal_active");

    /* Проверяем и подставляем localStorage */
    if (storageName && !storageEmail) {
      formModalNameInput.value = storageName;
      formModalEmailInput.focus();
    } else if (storageName && storageEmail) {
      formModalNameInput.value = storageName;
      formModalEmailInput.value = storageEmail;
      formModalTextarea.focus();
    } else {
      formModalNameInput.focus();
    }
  });

  /* Проверка на заполнение required полей и запись в localStorage */
  formModalContent.addEventListener("submit", (evt) => {
    if (!formModalEmailInput.value || !formModalTextarea.value) {
      evt.preventDefault();
      formModal.classList.remove("modal_error");
      formModal.offsetWidth = formModal.offsetWidth;
      formModal.classList.add("modal_error");
    } else {
      if (isLocalStorage) {
        localStorage.setItem("name", formModalNameInput.value);
        localStorage.setItem("email", formModalEmailInput.value);
      }
    }
  });
}

/* MODAL MAP */
const mapButton = document.querySelector(".link-modal-map");
const mapModal = document.querySelector(".modal-map");

if (mapModal) {
  /* Кнопка открытия карты */
  mapButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  mapModal.classList.add("modal_active");
});
}

/* MODAL ADD TO CART */
const addToCartButtons = document.querySelectorAll(".products__buy-button");
const addToCartModal = document.querySelector(".modal-add-to-cart");

if (addToCartModal) {
  /* Кнопки добавления в корзину */
  for (let addToCartButton of addToCartButtons) {
    addToCartButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      addToCartModal.classList.add("modal_active");
    });
  }
}

/* MODAL CLOSE */
const closeModalButtons = document.querySelectorAll(".modal__close-button");

/* Кнопки закрытия модальных окон */
for (let closeModalButton of closeModalButtons) {
  closeModalButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (formModal) {
      formModal.classList.remove("modal_active");
      formModal.classList.remove("modal_error");
    };
    if (mapModal) {
      mapModal.classList.remove("modal_active");
    }
    if (addToCartModal) {
      addToCartModal.classList.remove("modal_active");
    }
  })
}

/* Закрытие моадльных окон на Esc */
window.addEventListener("keydown", (evt) => {
  if (evt.key === "Esc" || evt.key === "Escape") {
    evt.preventDefault();
    if (formModal) {
      formModal.classList.remove("modal_active");
      formModal.classList.remove("modal_error");
    };
    if (mapModal) {
      mapModal.classList.remove("modal_active");
    }
    if (addToCartModal) {
      addToCartModal.classList.remove("modal_active");
    }
  }
})
