document.getElementById("customization").innerHTML = `
<div class="row"><label>عکس پسزمینه</label><input type="text" id="bgurl"><br></div>
<div class="row"><label>رنگ پسزمینه</label><input type="color" id="bgcolor" value="#d8bfe0"><br></div>
<div class="row"><label>رنگ کلی قالب</label><input type="color" id="color" value="#ac72bf"><br></div>
<div class="row"><label>رنگ لینک ها در حالت هاور</label><input type="color" id="link2" value="#743d86"><button onclick="KnowMore()" class="knowmore">بیشتر بدانید</button><br></div>
<div class="row"><label>عکس اصلی</label><input type="text" id="img" value="https://s8.uupload.ir/files/hd_29px.jpg"><br></div>

<div class="row">
<button onclick="generateCode()">ساخت کد</button><button id="copyBtn" onclick="copyCode()" style="visibility: hidden;">کپی کد</button><br></div>

<textarea style="visibility: hidden;" id="output" rows="10" cols="60" readonly></textarea>`
function generateCode() {
   const bgurl = document.getElementById("bgurl").value;
   const bgcolor = document.getElementById("bgcolor").value;
   const color = document.getElementById("color").value;
   const link2 = document.getElementById("link2").value;
   const img = document.getElementById("img").value;
   const code = `
<!DOCTYPE html> <html> <head>
<!-- Theme BY : Stella.BlogFa.Com -->
<link href="<-BlogPhotoLink->" rel="shortcut icon"> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <title><-BlogAndPostTitle-></title> <meta http-equiv="content-language" content="fa"> <meta name="description" content="<-BlogMetaDescription->"> <meta name="generator" content="blogfa.com"> <meta property="og:title" content="<-AutoPageTitle->"> <meta property="og:site_name" content="<-BlogTitle->"> <meta property="og:description" content="<-BlogMetaDescription->"> <meta name="twitter:title" content="<-AutoPageTitle->"> <meta name="twitter:description" content="<-BlogMetaDescription->"> <link href="https://v1.fontapi.ir/css/Mikhak" rel="stylesheet" /> <link rel="alternate" type="application/rss+xml" title="<-BlogTitle->" href="<-BlogXmlLink->" /> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" /> <style>
      :root{
         /* رنگ کلی قالب */
         --themecolor: ${color};

         /* رنگ لینک ها در حالت هاور */
         --themecolor2: ${link2};

         /* بکگراند */
         --backgroud: ${bgcolor} url(${bgurl}) fixed;

         /* عکس اصلی */
         --img: url(${img});
      }
img, p, div, table, td, tr, a, hr, span, ul, ol, video{ max-width: 100%; height: auto;} ::selection { background: var(--themecolor); color: #fff; } ::-moz-selection { background: var(--themecolor); color: #fff; } ::-webkit-scrollbar { width: 10px; } ::-webkit-scrollbar-track { background: #fff } ::-webkit-scrollbar-thumb { background: var(--themecolor) } * { margin: 0px auto; padding: 0px; transition: .5s; } p { margin-top: 1em; margin-bottom: 1em; } body { direction: rtl; background: var(--backgroud); font-family: Mikhak; font-size: 14px; } #stella { text-align: center; min-height: 550px; width: 900px; min-width: 900px; margin-top: 10px; margin-bottom: 10px; overflow: hidden; padding: 2px; } #header { width: 450px; text-align: center; margin: 20px 0 20px 0; } #header h1 a { font-size: 30px; font-weight: bold; padding: 10px; } #header h2 { font-size: 15px; font-weight: normal; } A { color: var(--themecolor); text-decoration: none; font-weight: bold; } A:hover { color:var(--themecolor2); } .post { padding: 10px; text-align: right; line-height: 150%; background: #fff; margin: 10px 0 10px 0; border-radius: 20px; border: 5px solid var(--themecolor); width: 450px; outline: 2px solid #fff; overflow: auto; } .post h1, h2 { font-size: 21px; margin-bottom: 10px; text-align: center; } .postinfo { font-size: 8pt; padding: 5px; background: #f7f7f7; border-radius: 5px; } .previous { font-size: 35px; margin-right: 20%; float: right; padding: 0 20px; } .previous:hover { margin-right: 15%; } .next { font-size: 35px; margin-left: 20%; float: left; padding: 0 20px; } .next:hover { margin-left: 15%; } .design { float: center; font-weight: bold; } #fixedbar { Height: 100%; width: 368px; position: fixed; left: 100px; top: 100px; text-align: center; } #menubar { Height: 386px; width: 46px; float: right; white-space: nowrap; margin-top: 15px; } .menu { background: #fff; border-radius: 0 10px 10px 0; border: 5px solid var(--themecolor); outline: 2px solid #fff; padding: 5px; border-left: none; width: 26px; overflow: hidden; float: left; font-size: 16px; margin-top: 2px; font-weight: bold; } .menu i { margin: 0 6px 0 11px; } .menu:hover { width: 100px; } .pic { background: var(--img); background-size: cover; Height: 396px; width: 300px; border: 10px solid #fff; border-radius: 20px; outline: 2px solid var(--themecolor); float: left; } .pic:hover { opacity: 0.8; } .center { text-align: center; } @media screen and (max-width: 1200px) { #fixedbar { left: 50px; }} </style> \u003c\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0074\u0068\u0065\u006d\u0065\u002e\u0062\u006c\u006f\u0067\u0066\u0061\u002e\u0063\u006f\u006d\u002f\u0070\u0075\u0062\u006c\u0069\u0063\u002f\u0074\u0068\u0065\u006d\u0065\u002e\u0031\u002e\u0032\u002e\u006a\u0073\u0022\u0020\u0074\u0079\u0070\u0065\u003d\u0022\u0074\u0065\u0078\u0074\u002f\u006a\u0061\u0076\u0061\u0073\u0063\u0072\u0069\u0070\u0074\u0022\u003e\u003c\u002f\u0073\u0063\u0072\u0069\u0070\u0074\u003e\u0020\u003c\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u0074\u0079\u0070\u0065\u003d\u0022\u0074\u0065\u0078\u0074\u002f\u006a\u0061\u0076\u0061\u0073\u0063\u0072\u0069\u0070\u0074\u0022\u003e\u0020\u0074\u0072\u0079\u0020\u007b\u0020\u0063\u006d\u0074\u005f\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u005b\u0030\u005d\u0020\u003d\u0020\u0022\u0043\u004d\u0027\u0073\u0022\u003b\u0020\u0063\u006d\u0074\u005f\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u005b\u0031\u005d\u0020\u003d\u0020\u0022\u004e\u006f\u0020\u0043\u004d\u0027\u0073\u0022\u003b\u0020\u0063\u006d\u0074\u005f\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u005b\u0032\u005d\u0020\u003d\u0020\u0022\u004f\u006e\u0065\u0020\u0043\u004d\u0022\u003b\u0020\u0063\u006d\u0074\u005f\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u005b\u0033\u005d\u0020\u003d\u0020\u0022\u0043\u004d\u0027\u0073\u0022\u003b\u0020\u0063\u006d\u0074\u005f\u0062\u006c\u006f\u0067\u0069\u0064\u0020\u003d\u0020\u0022\u003c\u002d\u0042\u006c\u006f\u0067\u0049\u0064\u002d\u003e\u0022\u003b\u0020\u007d\u0020\u0063\u0061\u0074\u0063\u0068\u0020\u0028\u0065\u0029\u0020\u007b\u0020\u007d\u0020\u003c\u002f\u0073\u0063\u0072\u0069\u0070\u0074\u003e </head> <body> <div id="stella"> <div id="header"> <h1><a href="<-BlogUrl->"><-BlogTitle-></a></h1> <h2><-BlogDescription-></h2> </div> <BLOGFA> <div class="post"> <h2><a href="<-PostLink->"><-PostTitle-></a></h2> <-PostContent-> <BlogExtendedPost><a href="<-PostLink->">+Read More</a></BlogExtendedPost> <BlogPostTagsBlock> Tags:<BlogPostTags><a href="<-TagLink->">#<-TagName-></a></BlogPostTags> </BlogPostTagsBlock> <div class="postinfo"> <-PostDate-> <-PostTime-> | <-PostAuthor-> <BlogComment>&nbsp;|&nbsp;<span dir="rtl" comment-for="<-PostId->"></span><BlogComment> </div> </div> </BLOGFA> <div class="post"> <BlogPreviousPageBlock> <a href="<-BlogPreviousPageLink->" class="previous"><i class="fas fa-arrow-right"></i></a> </BlogPreviousPageBlock> <BlogNextPageBlock> <a href="<-BlogNextPageLink->" class="next"><i class="fas fa-arrow-left"></i></a> </BlogNextPageBlock> </div> <div class="post center"> <-BlogCustomHtml-> <p>قالب طراحی شده توسط :<br><a href="http://stella.blogfa.com"> استلا &#9733; Stella</a></p> </div> <div id="fixedbar"> <div id="menubar"> <a href="<-BlogUrl->" class="menu"><i class="fas fa-home"></i>Home</a> <a href="<-BlogProfileLink->" class="menu"><i class="fas fa-user"></i>Profile</a> <a href="mailto:<-BlogEmail->" class="menu"><i class="fas fa-envelope"></i>Email</a> <a href="<-BlogArchiveLink->" class="menu"><i class="fas fa-history"></i>Archive</a> <a href="/posts/" class="menu"><i class="fas fa-list-alt"></i>Posts</a> <a href="/links" class="menu"><i class="fas fa-heart"></i>Friends</a> <a href="/rss" class="menu"><i class="fas fa-rss"></i>RSS</a> <a href="http://stella.blogfa.com" class="menu"><i class="fas fa-palette"></i>Design</a> </div> <div class="pic"></div> </div> </div>
<!-- Theme BY : Stella.BlogFa.Com -->
</body> </html>
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