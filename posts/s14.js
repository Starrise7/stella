document.getElementById("customization").innerHTML = `
<div class="row"><label>آدرس عکس: <input type="text" id="img"></label><br></div>
<div class="row"><label>لینک تبلیغ: <input type="text" id="link"></label><br></div>
<div class="row"><label>متن تبلیغ: <input type="text" id="text"></label><br></div>
<div class="row"><label>گردی گوشه: <input type="number" id="radius" value="10" min="0">px</label><br></div>
<div class="row"><label>اندازه متن: <input type="number" id="fontSize" value="14" min="1">px</label><br></div>
<div class="row"><label>رنگ متن: <input type="color" id="textcolor"></label><br></div>
<div class="row"><label>عرض: <input type="number" id="width" value="500" min="1">px</label><br></div>
<div class="row"><label>طول: <input type="number" id="height" value="500" min="1">px</label><br></div>
<div class="row"><label>محل شناور شدن:</label></div>
<div class="row"><input type="radio" name="position" value="top: 0px; left: 0px;" checked> بالا - چپ</div>
<div class="row"><input type="radio" name="position" value="top: 0px; right: 0px;"> بالا - راست</div>
<div class="row"><input type="radio" name="position" value="bottom: 0px; left: 0px;"> پایین - چپ</div>
<div class="row"><input type="radio" name="position" value="bottom: 0px; right: 0px;"> پایین - راست</div>

<div class="row">
   <button onclick="generateCode()">ساخت کد</button><button id="copyBtn" onclick="copyCode()"
      style="visibility: hidden;">کپی کد</button><br>
</div>

<textarea style="visibility: hidden;" id="output" rows="10" cols="60" readonly></textarea>`
function generateCode() {
   const img = document.getElementById("img").value;
   const link = document.getElementById("link").value;
   const text = document.getElementById("text").value;
   const radius = document.getElementById("radius").value;
   const fontSize = document.getElementById("fontSize").value;
   const textcolor = document.getElementById("textcolor").value;
   const width = document.getElementById("width").value;
   const height = document.getElementById("height").value;
   const positionEl = document.querySelector('input[name="position"]:checked');
   const position = positionEl ? positionEl.value : "";

   if (!position) {
      alert("لطفاً محل شناور شدن را انتخاب کنید!");
      return;
   }

   const code = `
<!-- Code BY : Stella.BlogFa.Com -->
<div id="AD" style="position: fixed; ${position} width: ${width}px; height: ${height}px; padding: 5px; max-width: 100%; z-index: 70; overflow: auto; border-radius: ${radius}px;"> <a href="javascript:void(0);" onclick="document.getElementById('AD').style.display='none';" style="color:red;padding:0px 10px;text-decoration:none;font-size:21px;font-family:Arial black; float: left"">×</a> <a href="${link}" style="float: right; font: ${fontSize}px tahoma; text-decoration: none; color: ${textcolor};">${text}</a><a href="${link}" target="_blank" rel="nofollow"><img title="تبلیغات" src="${img}" style="width:100% !important; border-radius: ${radius}px; margin-top: 5px;"></a></div><a href="http://stella.blogfa.com" target="_blank">&#9733دریافت ابزار ساخت تبلیغات شناور&#9733</a>
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