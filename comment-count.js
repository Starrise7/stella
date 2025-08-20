if (document.currentScript && document.currentScript.src) {
   async function updateAllComments() {
      const blogid = document.body.getAttribute("data-blogid");
      if (!blogid) {
         console.error("BlogId پیدا نشد! لطفاً data-blogid روی body یا container تعریف کنید.");
         return;
      }

      const elements = document.querySelectorAll("[comment-for]");

      for (let el of elements) {
         const postid = el.getAttribute("comment-for");
         if (!postid) continue;

         try {
            const res = await fetch(`/comments/?blogid=${blogid}&postid=${postid}`);
            const html = await res.text();

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const count = doc.querySelectorAll("div.box").length;

            el.innerHTML = `${count} نظر`;

            const url = `/comments/?blogid=${blogid}&postid=${postid}`;
            if (window.innerWidth > 700) {
               el.innerHTML = `<a href="javascript:void(0)" onclick="window.open('${url}','blogfa_comments','status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,width=500,height=500')">${count} نظر</a>`;
            } else {
               el.innerHTML = `<a href="${url}">${count} نظر</a>`;
            }

         } catch (e) {
            console.error(`خطا در گرفتن نظرات برای پست ${postid}:`, e);
            el.innerHTML = "خطا در بارگذاری";
         }
      }
   }

   if (window.addEventListener)
      window.addEventListener("load", updateAllComments);
   else if (window.attachEvent)
      window.attachEvent("onload", updateAllComments);

   const credit = document.createElement("p");
   credit.innerHTML = 'کد نمایش تعداد نظرات توسط : <a href="http://stella.blogfa.com"> استلا &#9733; Stella</a>';
   document.body.appendChild(credit);
}
