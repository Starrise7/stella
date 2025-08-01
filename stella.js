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
      if (mainTitle) mainTitle.textContent = label;
   }

   if (path.startsWith("/post/")) {
      const postTitleElement = document.querySelector("h3.post-title");
      const mainTitle = document.getElementById("main-title");

      if (postTitleElement && mainTitle) {
         const titleText = postTitleElement.textContent.trim();
         mainTitle.textContent = titleText;
      }
   }
});


window.onload = function () {
   document.querySelectorAll(".iframe").forEach(container => {
      const src = container.getAttribute("data-src");
      if (!src) return;

      const iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.style.border = "0";
      iframe.style.display = "block";
      iframe.style.width = "100%";

      container.appendChild(iframe);

      if (container.id === "comments") {
         iframe.onload = function () {
            try {
               const doc = iframe.contentDocument || iframe.contentWindow.document;

               const style = doc.createElement("style");
               style.textContent = `
               @import url('https://v1.fontapi.ir/css/Shabnam');

               * {
                  font-family: 'Shabnam', Tahoma, sans-serif;
                  border: none !important;
                  box-sizing: border-box;
                  border-radius: 10px !important;
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
                  background: #F4F4F0;
                  padding: 10px !important;
                  margin: 5px 0;
               }

               .box,
               .formbox {
                  border-radius: 10px;
                  padding: 10px;
                  box-shadow: 0 2px 5px rgb(0 0 0 / 5%);
                  box-sizing: border-box;
               }

               .formbox .head {
                  font-size: 20px !important;
                  color: #5A7D52 !important;
                  background: none !important;
                  font-weight: bold;
               }

               .box .author {
                  font-size: 16px !important;
                  color: #2C2C2C !important;
               }

               .reply .rbox {
                  background: #F4F4F0;
               }

               .btn {
                  background: #5A7D52 !important;
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
                  COLOR: #5A7D52 !important;
                  transition: 0.3s;
               }

               A:hover {
                  COLOR: #3E5F36 !important;
               }

               #capspace {
                  margin-top: -30px !important;
               }
          `;
               doc.head.appendChild(style);

               iframe.style.height = doc.body.scrollHeight + "px";

            } catch (e) {
               console.error("خطا در تغییر CSS آیفریم کامنت‌ها:", e);
            }
         };
      }
   });
};