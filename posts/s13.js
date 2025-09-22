document.getElementById("customization").innerHTML = `
<div class="row"><label>آدرس عکس موس در حالت عادی</label><input type="text" id="img"><br></div>
<div class="row"><label>آدرس عکس موس در حالت هاور</label><input type="text" id="img2"><button onclick="KnowMore()" class="knowmore">بیشتر بدانید</button></div><br>

<div class="row">
   <button onclick="generateCode()">ساخت کد</button><button id="copyBtn" onclick="copyCode()"
      style="visibility: hidden;">کپی کد</button><br>
</div>

<textarea style="visibility: hidden;" id="output" rows="10" cols="60" readonly></textarea>`
function generateCode() {
   const img = document.getElementById("img").value;
   const img2 = document.getElementById("img2").value;
   const code = `
            <style>* {cursor: url(${img}), auto !important;} a:hover {cursor: url(${img2}), auto !important;}</style>
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