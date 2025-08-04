//BY Stella.BlogFa.Com
function showTab(tabId) {
   document.querySelectorAll('.postbar').forEach(tab => {
      tab.classList.remove('active');
   });
   document.querySelectorAll('.btnbar2 button').forEach(btn => {
      btn.classList.remove('active');
   });
   document.getElementById(tabId).classList.add('active');
   event.target.classList.add('active');
}
//BY Stella.BlogFa.Com