function showTab(tabId) {
   const pages = document.querySelectorAll(".page");
   pages.forEach(page => {
      if (page.id === tabId) {
         page.classList.add("active");
         requestAnimationFrame(() => {
            page.style.opacity = "1";
         });
      } else {
         page.style.opacity = "0";
         page.classList.remove("active");
      }
   });
   window.location.hash = tabId;
}
window.addEventListener('DOMContentLoaded', () => {
   const hash = window.location.hash.substring(1) || 'home';
   showTab(hash);
});
window.addEventListener('hashchange', () => {
   const hash = window.location.hash.substring(1);
   showTab(hash);
});