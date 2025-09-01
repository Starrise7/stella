function showTab(tabId) {
   document.querySelectorAll('.postbar').forEach(tab => {
      tab.classList.remove('active');
   });
   document.getElementById(tabId).classList.add('active');
   event.target.classList.add('active');
}