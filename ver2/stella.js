document.addEventListener("DOMContentLoaded", function () {
   const path = window.location.pathname;
   const isOtherPage =
      path.startsWith("/post/") ||
      path.startsWith("/tag/") ||
      path.startsWith("/category/");

   if (isOtherPage) {
      document.body.classList.add("other-page");
   }
});

document.addEventListener("DOMContentLoaded", function () {
   const search = window.location.search;
   const isSpecialPage =
      search.includes("?p=");

   if (isSpecialPage) {
      document.body.classList.add("special-page");
   }
});

document.addEventListener("DOMContentLoaded", function () {
   const path = window.location.pathname;
   const search = window.location.search;

   const isPostPage =
      path.startsWith("/post/");

   if (isPostPage) {
      document.body.classList.add("post-page");
   }
});

document.addEventListener("DOMContentLoaded", function () {
   const path = window.location.pathname;

   if (path.startsWith("/tag/") || path.startsWith("/category/")) {
      const parts = path.split("/");
      const lastPart = parts[parts.length - 1];
      const label = decodeURIComponent(lastPart || "").replace(/[-_]/g, " ");

      const mainTitle = document.getElementById("main-title");
      if (mainTitle) mainTitle.innerText = label;
   }

   if (path.startsWith("/post/")) {
      const postTitleElement = document.querySelector("h3.post-title");
      const mainTitle = document.getElementById("main-title");
      const postlink = document.getElementById("postlink");
      const postimg = document.getElementById("postimg");
      document.getElementById("imgbox").innerHTML = `
      <a href="${postlink.href}"><img src="${postimg.src}" alt="${postimg.alt}" loading="lazy"></a>`
      if (postTitleElement && mainTitle) {
         const titleText = postTitleElement.textContent.trim();
         mainTitle.innerText = titleText;
      }
   }
});


iframe.onload = function () {
   try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;

      const style = doc.createElement("style");
      style.textContent = `@import url('https://v1.fontapi.ir/css/Shabnam');

               * {
                  font-family: 'Shabnam', Tahoma, sans-serif;
                  border: none !important;
                  box-sizing: border-box;
                  border-radius: 0 !important;
                  color: var(--color1) !important;
               }

               body {
                  background: none;
               }

               #header,
               input[name="cmtemail"],
               label[for="cmtemail"],
               span:first-child,
               input[type="checkbox"],
               label[for="chkPrivate"],
               label[for="chkSave"],
               a[style="font-size:8pt"] {
                  display: none;
               }

               #content {
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  width: 900px;
                  max-width: 100%;
               }

               input,
               textarea {
                  outline: 0 !important;
                  box-shadow: none !important;
                  background: var(--color53);
                  padding: 10px !important;
                  margin: 5px 0;
               }

               .box,
               .formbox {
                  padding: 10px;
                  box-shadow: 0 2px 5px rgb(0 0 0 / 5%);
                  box-sizing: border-box;
                  background: var(--color2) !important;
               }

               .formbox .head {
                  font-size: 20px !important;
                  color: var(--color5) !important;
                  background: none !important;
                  font-weight: bold;
               }

               .box .author {
                  font-size: 16px !important;
                  color: var(--color1) !important;
               }

               .reply .rbox {
                  background: var(--color3);
               }

               .btn {
                  background: var(--color5) !important;
                  padding: 10px 0 !important;
                  width: 100% !important;
                  height: 40px !important;
                  font-weight: bold;
                  font-size: 14px;
                  cursor: pointer;
               }

               .btn:hover {
                  background: #3E5F36 !important;
               }

               A {
                  COLOR: var(--color5) !important;
                  transition: 0.3s;
               }

               A:hover {
                  COLOR: #3E5F36 !important;
               }

               #capspace {
                  margin-top: -30px !important;
               }`;
      doc.head.appendChild(style);

      // تابع تنظیم ارتفاع
      const resizeIframe = () => {
         const body = doc.body;
         const html = doc.documentElement;

         const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
         );

         iframe.style.height = height + "px";
         console.log("Calculated height:", height);
      };

      // یکبار بعد از لود
      setTimeout(resizeIframe, 200);

      // هر نیم ثانیه آپدیت بشه
      setInterval(resizeIframe, 500);

   } catch (e) {
      console.error("خطا در تغییر CSS آیفریم:", e);
   }
};


const navbar = document.getElementById('header');
window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
   } else {
      navbar.classList.remove('scrolled');
   }
});
new Swiper("#posts .mySwiper", {
   slidesPerView: "auto",
   spaceBetween: 20,
   loop: false,
   autoplay: false,
   navigation: {
      nextEl: "#posts .swiper-button-next",
      prevEl: "#posts .swiper-button-prev",
   },
});
new Swiper('#best .swiper', {
   slidesPerView: 3,
   centeredSlides: true,
   loop: true,
   spaceBetween: 10,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: "#best .swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: "#best .swiper-button-next",
      prevEl: "#best .swiper-button-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      750: {
         slidesPerView: 3,
      }
   }
});


const btn = document.getElementById('toggle');
function applyTheme(theme) {
   const isDark = theme === 'dark';
   document.documentElement.classList.toggle('dark', isDark);
   btn.innerHTML = isDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
}
let saved = localStorage.getItem('theme');
if (!saved) {
   saved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
applyTheme(saved);
btn.addEventListener('click', () => {
   const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
   localStorage.setItem('theme', next);
   applyTheme(next);
});

const tabheight = document.getElementById("facilities");
const star = document.getElementById("star");
const dot = document.getElementById("dot");
tabheight.style.height = "45px";
function openStar() {
   if (tabheight.style.height === "45px") {
      tabheight.style.height = "200px";
      dot.style.bottom = "200px";
      star.innerHTML = "<i class='fa-solid fa-xmark'></i>"
   }
   else {
      tabheight.style.height = "45px";
      dot.style.bottom = "53px";
      star.innerHTML = "<i class='fa-solid fa-star'></i>"
   }
}


const playlist = [
   "https://uploadkon.ir/uploads/e64f01_25Beach-Weather-Deadbeat-Blues.mp3",
   "https://uploadkon.ir/uploads/488b01_25Beach-Weather-Tulips.mp3",
   "https://uploadkon.ir/uploads/05c301_25Beach-Weather-Brain-Dead.mp3"
];
const player = document.getElementById("player");
let currentIndex = Math.floor(Math.random() * playlist.length);
player.src = playlist[currentIndex];
function play() {
   if (player.paused) {
      player.play();
   } else {
      player.pause();
   }
}
player.addEventListener("ended", () => {
   currentIndex++;
   if (currentIndex >= playlist.length) {
      currentIndex = 0;
   }
   player.src = playlist[currentIndex];
   player.play();
});

const bell = document.getElementById("bell");
const notifBox = document.getElementById("notifBox");
const latestMessageId = "fjhjiueh";
const lastReadId = localStorage.getItem("lastReadMessageId");
const closeBtn = document.getElementById("closeBtn");
if (lastReadId === latestMessageId) {
   dot.style.display = "none";
}
bell.addEventListener("click", () => {
   notifBox.style.display = "flex";

   if (dot.style.display !== "none") {
      dot.style.display = "none";
      localStorage.setItem("lastReadMessageId", latestMessageId);
   }
});

closeBtn.addEventListener("click", () => {
   notifBox.style.display = "none";
});


console.log('body has post-page?', document.body.classList.contains('post-page'));
console.log('comments container exists?', !!document.querySelector('#comments'), document.querySelector('#comments'));

