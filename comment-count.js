   async function updateAllComments() {
      const blogid = document.body.getAttribute("data-blogid");

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

            const text = (count === 0) ? noCommentText : `${count} ${commentText}`;

            const url = `/comments/?blogid=${blogid}&postid=${postid}`;
            if (window.innerWidth > 700) {
               el.innerHTML = `<a href="javascript:void(0)" onclick="window.open('${url}','blogfa_comments','status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,width=500,height=500')">${text}</a>`;
            } else {
               el.innerHTML = `<a href="${url}">${text}</a>`;
            }            

         } catch (e) {
            el.innerHTML = "\u062e\u0637\u0627\u0020\u062f\u0631\u0020\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc";
         }
      }
   }

   if (window.addEventListener)
      window.addEventListener("load", updateAllComments);
   else if (window.attachEvent)
      window.attachEvent("onload", updateAllComments);

window.addEventListener("DOMContentLoaded", () => {
   const credit = document.createElement("p");
   credit.innerHTML = '\u06a9\u062f\u0020\u0646\u0645\u0627\u06cc\u0634\u0020\u062a\u0639\u062f\u0627\u062f\u0020\u0646\u0638\u0631\u0627\u062a\u0020\u0622\u0631\u0634\u06cc\u0648\u0020\u0634\u062f\u0647\u0020\u062a\u0648\u0633\u0637\u0020\u003a\u0020\u003c\u0061\u0020\u0068\u0072\u0065\u0066\u003d\u0022\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0073\u0074\u0065\u006c\u006c\u0061\u002e\u0062\u006c\u006f\u0067\u0066\u0061\u002e\u0063\u006f\u006d\u0022\u003e\u0020\u0627\u0633\u062a\u0644\u0627\u0020\u0026\u0023\u0039\u0037\u0033\u0033\u003b\u0020\u0053\u0074\u0065\u006c\u006c\u0061\u003c\u002f\u0061\u003e';
   credit.style.direction = 'rtl';
   document.body.appendChild(credit);
});
