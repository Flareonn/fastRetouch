makeIntersect("#shareBlock", "#socialLinks");

let offers = [
  {
    imagePath: "./img/offers/1/thumb.jpg",
    title: "Free Retouch for Adobe Photoshop",
    features: [
      "Stamp - for removing local skin irregularities",
      "Auto - automatic skin texture and tone smoothing",
      "FS - professional retouch of skin texture and tone",
      "Skin - enhancement of skin texture",
      "Anti Glare - tool for removing oily shines",
      "Tan - easy and fast sun tan function",
    ],
    slider: [
      "./img/offers/1/thumb.jpg",
      "./img/offers/1/slider-1.jpg",
      "./img/offers/1/slider-2.jpg",
    ],
    categories: [
      "stamp layer",
      "anti glare",
      "tanned skin",
      "auto retouch",
      "skin retouch",
      "frequency separation",
    ],
    downloadLink:
      "https://exchange.adobe.com/creativecloud.details.106279.free-retouch-panel-for-adobe-photoshop.html",
    id: 0,
  },
  {
    imagePath: "./img/offers/2/thumb.jpg",
    title: "Pro Retouch Panel for Adobe Photoshop",
    features: [
      "Gauss 2 - professional retouch of skin texture and tone",
      "Gauss 3 - function using three-frequency separation",
      "DBC - dodge & burn method with flexible settings using curves",
      "DBO - dodge & burn method with flexible settings using overlays",
      "Anti Glare - tool for removing oily shines",
      "Skin - enhancement of skin texture",
    ],
    slider: [
      "./img/offers/2/thumb.jpg",
      "./img/offers/2/slider-1.jpg",
      "./img/offers/2/slider-2.jpg",
    ],
    categories: [
      "dodge&burn",
      "skin retouch",
      "anti glare",
      "frequency separation",
    ],
    downloadLink:
      "https://exchange.adobe.com/creativecloud.details.106407.retouch-pro.html",
    id: 1,
  },
  // {
  //   imagePath: "./img/offers/3/thumb.jpg",
  //   title: "Portrait Plugin for Adobe Photoshop",
  //   features: [
  //     "FS - professional retouch of skin texture and tone",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "Makeup - multitool that includes many functions for makeup",
  //     "Teeth -quick teeth whitening with natural color set",
  //     "Anti Glare - tool for removing oily shines",
  //     "Tan - easy and fast sun tan function",
  //   ],
  //   slider: [
  //     "./img/offers/3/thumb.jpg",
  //     "./img/offers/3/slider-1.jpg",
  //     "./img/offers/3/slider-2.jpg",
  //   ],
  //   categories: [
  //     "white teeth",
  //     "tanned skin",
  //     "auto retouch",
  //     "anti glare",
  //     "makeup",
  //     "frequency separation",
  //   ],
  //   downloadLink:
  //     "https://exchange.adobe.com/creativecloud.details.106409.portrait-plugin.html",
  //   id: 2,
  // },
  // {
  //   imagePath: "./img/offers/4/thumb.jpg",
  //   title: "Dodge and Burn Panel for Adobe Photoshop",
  //   features: [
  //     "FS - professional retouch of skin texture and tone",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "DBO - dodge & burn method with flexible settings using overlays",
  //     "Anti Glare - tool for removing oily shines",
  //     "Tan - easy and fast sun tan function",
  //   ],
  //   slider: [
  //     "./img/offers/4/thumb.jpg",
  //     "./img/offers/4/slider-1.jpg",
  //     "./img/offers/4/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Tanned Skin",
  //     "Auto retouch",
  //     "Anti Glare",
  //     "Dodge&Burn",
  //     "Frequency separation",
  //   ],
  //   downloadLink:
  //     "https://exchange.adobe.com/creativecloud.details.106528.dodge-and-burn.html",
  //   id: 3,
  // },
  {
    imagePath: "./img/offers/5/thumb.jpg",
    title: "Beauty Retouch Panel for Adobe Photoshop",
    features: [
      "FS - professional retouch of skin texture and tone",
      "Auto - automatic skin texture and tone smoothing",
      "Makeup - multitool that includes many functions for makeup",
      "Skin - enhancement of skin texture",
      "Anti Glare - tool for removing oily shines",
      "Tan - easy and fast sun tan function",
    ],
    slider: [
      "./img/offers/5/thumb.jpg",
      "./img/offers/5/slider-1.jpg",
      "./img/offers/5/slider-2.jpg",
    ],
    categories: [
      "Makeup",
      "Tanned Skin",
      "Auto retouch",
      "Anti Glare",
      "Frequency separation",
      "Skin retouch",
    ],
    downloadLink:
      "https://exchange.adobe.com/creativecloud.details.106529.beauty-retouch.html",
    id: 4,
  },
  // {
  //   imagePath: "./img/offers/6/thumb.jpg",
  //   title: "Skin Retouch Panel for Adobe Photoshop",
  //   features: [
  //     "Gauss 2 - professional retouch of skin texture and tone",
  //     "Gauss 3 - function using three-frequency separation",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "Skin - enhancement of skin texture",
  //     "Anti Glare - tool for removing oily shines",
  //     "Tan - easy and fast sun tan function",
  //   ],
  //   slider: [
  //     "./img/offers/6/thumb.jpg",
  //     "./img/offers/6/slider-1.jpg",
  //     "./img/offers/6/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Tanned Skin",
  //     "Anti Glare",
  //     "Frequency separation",
  //     "Dodge&Burn",
  //     "Skin retouch",
  //   ],
  //   downloadLink:
  //     "https://exchange.adobe.com/creativecloud.details.106408.skin-retouch-panel.html",
  //   id: 5,
  // },
  // {
  //   imagePath: "./img/offers/7/thumb.jpg",
  //   title: "Portrait Editing Panel for Adobe Photoshop",
  //   features: [
  //     "FS - professional retouch of skin texture and tone",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "Skin - enhancement of skin texture",
  //     "Lips - lips color correction with flexible settings",
  //     "Eyelids - eyelids color correction with flexible settings",
  //   ],
  //   slider: [
  //     "./img/offers/7/thumb.jpg",
  //     "./img/offers/7/slider-1.jpg",
  //     "./img/offers/7/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Lips Color",
  //     "Eyelids Color",
  //     "Auto retouch",
  //     "Frequency separation",
  //     "Dodge&Burn",
  //     "Skin retouch",
  //   ],
  //   downloadLink:
  //     "https://exchange.adobe.com/creativecloud.details.106606.portrait-editing-panel.html",
  //   id: 6,
  // },
  // {
  //   imagePath: "./img/offers/8/thumb.jpg",
  //   title: "Portrait Pro Panel for Adobe Photoshop",
  //   features: [
  //     "FS - professional retouch of skin texture and tone",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "Makeup - multitool that includes many functions for makeup",
  //     "Skin - enhancement of skin texture",
  //     "Anti Glare - tool for removing oily shines",
  //     "Tan - easy and fast sun tan function",
  //   ],
  //   slider: [
  //     "./img/offers/8/thumb.jpg",
  //     "./img/offers/8/slider-1.jpg",
  //     "./img/offers/8/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Makeup",
  //     "Frequency separation",
  //     "Dodge&Burn",
  //     "Skin retouch",
  //     "Tanned Skin",
  //     "Anti Glare",
  //   ],
  //   downloadLink:
  //     "https://exchange.adobe.com/creativecloud.details.106607.portrait-pro.html",
  //   id: 7,
  // },
  // {
  //   imagePath: "./img/offers/9/thumb.jpg",
  //   title: "Retouch Panel for Adobe Photoshop",
  //   features: [
  //     "Stamp - for removing local skin irregularities",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "Gauss 2 - professional retouch of skin texture and tone",
  //     "Gauss 3 - function using three-frequency separation",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "Skin - enhancement of skin texture",
  //   ],
  //   slider: [
  //     "./img/offers/9/thumb.jpg",
  //     "./img/offers/9/slider-1.jpg",
  //     "./img/offers/9/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Frequency separation",
  //     "Stamp Layer",
  //     "Dodge&Burn",
  //     "Skin retouch",
  //     "Auto retouch",
  //   ],
  //   downloadLink:
  //     "https://exchange.adobe.com/creativecloud.details.106608.retouch-for-adobe-photoshop.html",
  //   id: 8,
  // },
  // {
  //   imagePath: "./img/offers/10/thumb.jpg",
  //   title: "Skin Smoothing Panel for Adobe Photoshop",
  //   features: [
  //     "FS - professional retouch of skin texture and tone",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "Skin - enhancement of skin texture",
  //     "Anti Glare - tool for removing oily shines",
  //     "Tan - easy and fast sun tan function",
  //   ],
  //   slider: [
  //     "./img/offers/10/thumb.jpg",
  //     "./img/offers/10/slider-1.jpg",
  //     "./img/offers/10/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Frequency separation",
  //     "Dodge&Burn",
  //     "Skin retouch",
  //     "Tanned Skin",
  //     "Auto retouch",
  //     "Anti Glare",
  //   ],
  //   downloadLink:
  //     "https://exchange.adobe.com/creativecloud.details.106609.skin-smoothing.html",
  //   id: 9,
  // },
  // {
  //   imagePath: "./img/offers/11/thumb.jpg",
  //   title: "Image Retouch Panel for Adobe Photoshop",
  //   features: [
  //     "FS - professional retouch of skin texture and tone",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "Tan - easy and fast sun tan function",
  //     "Skin - enhancement of skin texture",
  //     "Contrast - adding contrast with flexible settings",
  //     "Matte - matting images with flexible settings",
  //   ],
  //   slider: [
  //     "./img/offers/11/thumb.jpg",
  //     "./img/offers/11/slider-1.jpg",
  //     "./img/offers/11/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Frequency separation",
  //     "Skin retouch",
  //     "Tanned Skin",
  //     "Auto retouch",
  //     "Useful functions",
  //   ],
  //   downloadLink:
  //     "https://exchange.adobe.com/creativecloud.details.106610.image-retouch.html",
  //   id: 10,
  // },
  // {
  //   imagePath: "./img/offers/12/thumb.jpg",
  //   title: "Pixel Retouch Panel for Adobe Photoshop",
  //   features: [
  //     "Stamp - for removing local skin irregularities",
  //     "FS - professional retouch of skin texture and tone",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "Sharpness - increasing local sharpness (eyes, lips etc.)",
  //     "Volume - adding depth and volume to images",
  //   ],
  //   slider: [
  //     "./img/offers/12/thumb.jpg",
  //     "./img/offers/12/slider-1.jpg",
  //     "./img/offers/12/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Stamp Layer",
  //     "Dodge&Burn",
  //     "Auto retouch",
  //     "Useful functions",
  //     "Frequency separation",
  //   ],
  //   downloadLink: "https://www.google.ru/",
  //   id: 11,
  // },
  // {
  //   imagePath: "./img/offers/13/thumb.jpg",
  //   title: "Photo Retouch Panel for Adobe Photoshop",
  //   features: [
  //     "FS - professional retouch of skin texture and tone",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "Skin - enhancement of skin texture",
  //     "Sharpness - increasing local sharpness (eyes, lips etc.)",
  //     "Volume - adding depth and volume to images",
  //   ],
  //   slider: [
  //     "./img/offers/13/thumb.jpg",
  //     "./img/offers/13/slider-1.jpg",
  //     "./img/offers/13/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Auto retouch",
  //     "Skin retouch",
  //     "Dodge&Burn",
  //     "Useful functions",
  //     "Frequency separation",
  //   ],
  //   downloadLink: "https://www.google.ru/",
  //   id: 12,
  // },
  // {
  //   imagePath: "./img/offers/14/thumb.jpg",
  //   title: "Hair Retouch Panel for Adobe Photoshop",
  //   features: [
  //     "Stamp - function for removing local skin irregularities",
  //     "Gauss 3 - function using three-frequency separation",
  //     "Hair - color correction with flexible settings",
  //     "Brows - adding natural thickness and richness to eyebrows",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "Sharpness - increasing local sharpness (eyes, lips and etc.)",
  //   ],
  //   slider: [
  //     "./img/offers/14/thumb.jpg",
  //     "./img/offers/14/slider-1.jpg",
  //     "./img/offers/14/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Hair Color",
  //     "Eyebrows",
  //     "Stamp Layer",
  //     "Dodge&Burn",
  //     "Useful functions",
  //     "Frequency separation",
  //   ],
  //   downloadLink: "https://www.google.ru/",
  //   id: 13,
  // },
  // {
  //   imagePath: "./img/offers/15/thumb.jpg",
  //   title: "Face Retouch Panel for Adobe Photoshop",
  //   features: [
  //     "FS - professional retouch of skin texture and tone",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "DBC - dodge & burn method with flexible settings using curves",
  //     "DBO - dodge & burn method with flexible settings using overlays",
  //     "Skin - enhancement of skin texture",
  //     "Tan - easy and fast sun tan function",
  //   ],
  //   slider: [
  //     "./img/offers/15/thumb.jpg",
  //     "./img/offers/15/slider-1.jpg",
  //     "./img/offers/15/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Tanned Skin",
  //     "Auto retouch",
  //     "Skin retouch",
  //     "Dodge&Burn",
  //     "Frequency separation",
  //   ],
  //   downloadLink: "https://www.google.ru/",
  //   id: 14,
  // },
  // {
  //   imagePath: "./img/offers/16/thumb.jpg",
  //   title: "Face Retouch Panel for Adobe Photoshop",
  //   features: [
  //     "Gauss 2 - professional retouch of skin texture and tone",
  //     "Gauss 3 - function using three-frequency separation",
  //     "Auto - automatic skin texture and tone smoothing",
  //     "Skin - enhancement of skin texture",
  //     "Anti Glare - tool for removing oily shines",
  //     "Tan - easy and fast sun tan function",
  //   ],
  //   slider: [
  //     "./img/offers/16/thumb.jpg",
  //     "./img/offers/16/slider-1.jpg",
  //     "./img/offers/16/slider-2.jpg",
  //   ],
  //   categories: [
  //     "Anti Glare",
  //     "Tanned Skin",
  //     "Auto retouch",
  //     "Skin retouch",
  //     "Frequency separation",
  //   ],
  //   downloadLink: "https://www.google.ru/",
  //   id: 15,
  // },
];

class TemplateCard {
  constructor({
    imagePath,
    title,
    slider,
    features,
    downloadLink,
    id,
    categories,
  }) {
    this.imagePath = imagePath;
    this.title = title;
    this.slider = slider;
    this.features = features;
    this.downloadLink = downloadLink;
    this.id = id;
    this.categories = categories;

    this._createElement();
  }

  _createElement() {
    const imageSrc = this.imagePath.slice(0, -4);
    this.elementHTML = `
      <div class="catalog-card col-md-4 col-12 d-flex flex-column align-items-center" data-id=${
        this.id
      }>
        <picture>
          <source srcset="${imageSrc + "-m.webp"}" type="image/webp">
          <img
            src="${imageSrc + "-m.jpg"}"
            alt="${this.title}"
            class="catalog-card__image"
          >
        </picture>
        <div class="catalog-card__group d-md-none d-flex justify-content-center">
          <a
            href="${this.downloadLink}"
            target="_blank"
            class="catalog-card__button"
          >
            Get now
          </a>
          <button class="catalog-card__button" onclick="popupEmail(event, '${
            this.downloadLink
          }', '${this.title}')">
            By Email
          </button>
        </div>
      </div>    
    `;
  }
  _createPopup() {
    this.title = this.title.split(/for/).join("<br/>For");

    this.popup = `
      <div class="catalog-popup" id="activePopup">
        <div class="catalog-popup__wrapper d-flex container align-self-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="catalog-popup__back"
          >
            <path
              d="M7.77734 23.334L23.3337 7.77764"
              stroke="#222222"
              stroke-linecap="square"
            />
            <path
              d="M7.77734 7.7793L23.3337 23.3356"
              stroke="#222222"
              stroke-linecap="square"
            />
          </svg>
          <div class="catalog-popup__slider">
            <div
              style="
                --swiper-navigation-color: #2e464a;
                --swiper-pagination-color: #2e464a;
              "
              class="swiper-container mySwiper"
            >
              <div class="swiper-wrapper">
                ${this.slider
                  .map(
                    (i) => `<div class="swiper-slide">
                              <img src=${i} alt="${this.title.replace(
                      /<\/?[a-zA-Z]+>/gi,
                      ""
                    )}">
                            </div>`
                  )
                  .join("")}
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
          <div class="catalog-popup__content">
            <h2 class="catalog-popup__title">${this.title}</h2>
            <strong class="d-lg-inline d-md-none">Functions</strong>
            <ul class="catalog-popup__list">
            ${this.features
              .map(
                (i) => `<li class="catalog-popup__list-item">● ${i}</li>`
              )
              .join("")}
            </ul>
            <div class="catalog-popup__group">
              <button class="catalog-popup__link catalog-popup__link_back">back</button>
              <a href="${
                this.downloadLink
              }" target="_blank" class="catalog-popup__link">
                download
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    catalog.innerHTML += this.popup;
    this.swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      freeMode: true,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  openPopup() {
    this._createPopup();
    document.querySelector("body").classList.add("lock");
    activePopup.addEventListener("click", handlerPopup);
  }
}

function handlerPopup(e) {
  if (
    [
      "catalog-popup",
      "catalog-popup__back",
      "catalog-form__submit back",
      "catalog-popup__link catalog-popup__link_back",
    ].includes(e.target.classList.value) ||
    ["rect", "path"].includes(e.target.tagName)
  ) {
    activePopup.removeEventListener("click", this);
    catalog.removeChild(catalog.querySelector(".catalog-popup"));
    document.querySelector("body").classList.remove("lock");
  }
}

// INITIAL LOADING

let cards = [];

offers.forEach((i) => {
  i.categories = i.categories.map((cat) => cat.toLowerCase());
  let card = new TemplateCard(i);
  catalog.innerHTML += card.elementHTML;
  cards.push(card);
});

// POPUP

catalog.addEventListener("click", ({ target }) => {
  if (!target.closest(".catalog-card") || window.innerWidth < 768) return;
  cards
    .find(
      (item) =>
        item.id === Number(target.closest(".catalog-card").dataset.id)
    )
    .openPopup();
});

// POPUP-EMAIL

const popupEmail = (e, link, title) => {
  catalog.innerHTML += `
      <div class="catalog-popup" id="activePopup">
        <div class="catalog-popup__wrapper d-flex container align-self-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="catalog-popup__back"
          >
            <path
              d="M7.77734 23.334L23.3337 7.77764"
              stroke="#222222"
              stroke-linecap="square"
            />
            <path
              d="M7.77734 7.7793L23.3337 23.3356"
              stroke="#222222"
              stroke-linecap="square"
            />
          </svg>
          <form class="catalog-form" action="" enctype="application\json" method="POST">
            <input class="d-none" type="text" name="pluginName" value="${title}"/>
            <input class="d-none" type="text" name="link" value="${link}"/>
            <div class="catalog-form__wrapper">
              <label class="catalog-form__label" for="name">
                Your name
              </label>
              <input type="text" class="catalog-form__input" id="name" name="name"/>
            </div>
            <div class="catalog-form__wrapper">
              <label class="catalog-form__label" for="email">
                Your E-mail
              </label>
              <input type="email" class="catalog-form__input" id="email" name="email"/>
            </div>
            <input type="submit" value="Get" class="catalog-form__submit"/>
          </form>
        </div>
      </div>
  `;
  document.querySelector("body").classList.add("lock");
  activePopup.addEventListener("click", handlerPopup);
  activePopup
    .querySelector(".catalog-form")
    .addEventListener("submit", function (e) {
      send(e, "getLink.php");
      e.preventDefault();
      this.style.paddingTop = "141px";
      this.innerHTML = `
      <span class="catalog-form__thanks">
        Done! 
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C6.0558 0 0 6.0558 0 13.5C0 20.9442 6.0558 27 13.5 27C20.9442 27 27 20.9442 27 13.5C27 6.0558 20.9442 0 13.5 0Z" fill="#2196F3"/>
          <path d="M20.3426 11.6394L13.03 18.9518C12.8106 19.1712 12.5226 19.2816 12.2346 19.2816C11.9467 19.2816 11.6587 19.1712 11.4393 18.9518L7.78313 15.2956C7.34312 14.8558 7.34312 14.1447 7.78313 13.7049C8.22292 13.2649 8.93381 13.2649 9.37381 13.7049L12.2346 16.5658L18.7519 10.0488C19.1917 9.60875 19.9026 9.60875 20.3426 10.0488C20.7824 10.4885 20.7824 11.1994 20.3426 11.6394Z" fill="#FAFAFA"/>
        </svg>
      </span>
      <button class="catalog-form__submit back">Ok</button>
    `;
    });
};
// DROP MENU

Array.from(document.querySelectorAll(".features-list__item")).forEach(
  (i) => {
    i.addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.querySelector("ul");
      panel.style.maxHeight
        ? (panel.style.maxHeight = null)
        : (panel.style.maxHeight = panel.scrollHeight + "px");
    });
  }
);

// Отправка данных на сервер
function send(event, php) {
  event.preventDefault
    ? event.preventDefault()
    : (event.returnValue = false);
  var req = new XMLHttpRequest();
  req.open("POST", php, true);  
  req.onload = function () {
    if (
      req.status >= 200 &&
      req.status < 400 &&
      this.response != "success"
    ) {
      alert("Ошибка. Сообщение не отправлено");
    }
  };

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  req.send(new FormData(event.target));
}

window.addEventListener("resize", function () {
  if (
    this.innerWidth <= 768 &&
    catalog.querySelector(".catalog-popup__slider")
  ) {
    handlerPopup({ target: { classList: { value: "catalog-popup" } } });
  }
});
    
window.addEventListener("keydown", ({key}) => {
  if(catalog.querySelector("#activePopup") && key === "Escape") {
    handlerPopup({target: {classList: {value: "catalog-popup"}}});
  }
})