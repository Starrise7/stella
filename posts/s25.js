document.getElementById("customization").innerHTML = `
<div class="row"><label>عرض باکس : </label><input type="number" id="width" value="300" min="0">px<br></div>
<div class="row"><label>گردی گوشه : </label><input type="number" id="radius" value="8" min="0">px<br></div>
<div class="row"><label>رنگ حاشیه : </label><input type="color" id="bcolor" value="#cccccc"><br></div>
<div class="row"><label>ضخامت حاشیه : </label><input type="number" id="bwidth" value="1" min="0">px<br></div>
<div class="row"><label>رنگ باکس سرچ : </label><input type="color" id="boxcolor" value="#ffffff"><br></div>
<div class="row"><label>رنگ متن باکس سرچ : </label><input type="color" id="boxfcolor" value="444444"><br></div>
<div class="row"><label>رنگ آیکون دکمه سرچ : </label><input type="color" id="btnfcolor" value="#ffffff"><br></div>
<div class="row"><label>رنگ دکمه سرچ : </label><input type="color" id="btncolor" value="#4285f4"><br></div>
<div class="row"><label>رنگ دکمه سرچ در حالت هاور : </label><input type="color" id="btncolor2" value="#266bda"><button onclick="KnowMore()" class="knowmore">بیشتر بدانید</button><br></div>
<div class="row"><label>آدرس وبسایت: </label><input type="text" id="weburl" placeholder="آدرس رو بدون https:// وارد کن"><br></div>
   <div class="row">
   <button onclick="generateCode()">ساخت کد</button><button id="copyBtn" onclick="copyCode()" style="visibility: hidden;">کپی کد</button><br></div>

   <textarea style="visibility: hidden;" id="output" rows="10" cols="60" readonly></textarea>`
function generateCode() {
   const width = document.getElementById("width").value;
   const radius = document.getElementById("radius").value;
   const bcolor = document.getElementById("bcolor").value;
   const bwidth = document.getElementById("bwidth").value;
   const boxcolor = document.getElementById("boxcolor").value;
   const boxfcolor = document.getElementById("boxfcolor").value;
   const btnfcolor = document.getElementById("btnfcolor").value;
   const btncolor = document.getElementById("btncolor").value;
   const btncolor2 = document.getElementById("btncolor2").value;
   const weburl = document.getElementById("weburl").value;
   const code = `
   <!-- search code BY : Stella.Blofa.Com -->
   <style> .search-box { display: flex; gap: 10px; width: ${width}px; } #query { padding: 10px; border: ${bwidth}px solid ${bcolor}; border-radius: ${radius}px; outline: none; flex-grow: 1; color: ${boxfcolor}; background: ${boxcolor}; } button.search-button {line-height: 0; padding: 10px 10px; border-radius: ${radius}px; background: ${btncolor}; cursor: pointer; border: ${bwidth}px solid ${bcolor}; } button.search-button:hover { background: ${btncolor2}; } </style> <div class="search-box"> <input type="text" id="query" placeholder="جستجو..."> <button onclick="searchGoogle()" class="search-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
   viewBox="0 0 24 24" stroke="${btnfcolor}"> <path fill="none" stroke="${btnfcolor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" /></svg></button> </div> <script> const domain = "${weburl}"; function searchGoogle() { const q = document.getElementById("query").value.trim(); if (q) { const url = "https://www.google.com/search?q=" + encodeURIComponent("site:" + domain + " " + q); window.open(url, "_blank"); } else { alert("لطفاً عبارت جستجو رو وارد کن."); } } </script>
   <!-- search code BY : Stella.Blofa.Com -->
   `.trim();

   document.getElementById("output").value = code;
   document.getElementById("copyBtn").style.visibility = "visible";
   document.getElementById("output").style.visibility = "visible";
}

function copyCode() {
   const output = document.getElementById("output");
   navigator.clipboard.writeText(output.value).then(() => {
      alert("کد کپی شد!");
   });
}
function KnowMore() {
   alert("حالت هاور یعنی وقتی ماوس روی لینک می‌ره و ظاهرش تغییر می‌کنه. این حالت معمولاً فقط در لپ‌تاپ یا کامپیوتر دیده می‌شه، چون گوشی‌ها ماوس ندارن.");

}
