document.getElementById("customization").innerHTML = `
<p>لینک ها در حالت عادی</p>
<div class="row"><label>رنگ متن: <input type="color" id="color1"></label><br></div>
<div class="row"><label>رنگ سایه متن: <input type="color" id="ShadowColor1"></label><br></div>
<div class="row"><label>گردی گوشه: <input type="number" id="BR" value="10" min="0">px</label><br></div>
<br>
<p>لینک ها در حالت هاور <button onclick="KnowMore()" class="knowmore">بیشتر بدانید</button></p>
<div class="row"><label>رنگ متن: <input type="color" id="color2"></label><br></div>
<div class="row"><label>رنگ سایه متن: <input type="color" id="ShadowColor2"></label><br></div>
<div class="row"><label>آدرس عکس : <input type="text" id="img"></label><br></div>
<div class="row">
   <button onclick="generateCode()">ساخت کد</button><button id="copyBtn" onclick="copyCode()"
      style="visibility: hidden;">کپی کد</button><br>
</div>

<textarea style="visibility: hidden;" id="output" rows="10" cols="60" readonly></textarea>`
function generateCode() {
   const img = document.getElementById("img").value;
   const color1 = document.getElementById("color1").value;
   const ShadowColor1 = document.getElementById("ShadowColor1").value;
   const BR = document.getElementById("BR").value;
   const color2 = document.getElementById("color2").value;
   const ShadowColor2 = document.getElementById("ShadowColor2").value;
   const code = `
<!-- Code BY : Stella.BlogFa.Com -->
<style> a { color: ${color1}; text-shadow: 2px 2px 3px ${ShadowColor1}; border-radius: ${BR}px; transition: 0.3s; } a:hover { color: ${color2}; background: url(${img}); text-shadow: 2px 2px 3px ${ShadowColor2};} </style>
<!-- Code BY : Stella.BlogFa.Com -->
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
   alert("حالت hover یعنی وقتی ماوس روی لینک یا دکمه می‌ره و ظاهرش تغییر می‌کنه. این حالت معمولاً فقط در لپ‌تاپ یا کامپیوتر دیده می‌شه، چون گوشی‌ها ماوس ندارن.");
}