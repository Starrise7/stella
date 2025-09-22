document.getElementById("customization").innerHTML = `
      <div class="row"><label>رنگ متن</label><input type="color" id="color" value="#ffffff"><br></div>
      <div class="row"><label>رنگ بکگراند متن</label><input type="color" id="bgcolor" value="#5A7D52"></div><br>

      <div class="row">
         <button onclick="generateCode()">ساخت کد</button><button id="copyBtn" onclick="copyCode()"
            style="visibility: hidden;">کپی کد</button><br>
      </div>

      <textarea style="visibility: hidden;" id="output" rows="10" cols="60" readonly></textarea>`
function generateCode() {
   const color = document.getElementById("color").value;
   const bgcolor = document.getElementById("bgcolor").value;
   const code = `
<!-- Code BY Stella.BlogFa.Com -->
<style>::selection { background: ${bgcolor} !important; color: ${color} !important; } ::-moz-selection { background: ${bgcolor} !important; color: ${color} !important;}</style>
<!-- Code BY Stella.BlogFa.Com -->
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