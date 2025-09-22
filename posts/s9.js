document.getElementById("customization").innerHTML = `
   <div class="row"><label>عکس پسزمینه</label><input type="text" id="bgurl"><br></div>
   <div class="row"><label>رنگ پسزمینه</label><input type="color" id="bgcolor" value="#e9e9e9"><br></div>
   <div class="row"><label>رنگ کلی قالب 1</label><input type="color" id="color" value="#e6b4ae"><br></div>
   <div class="row"><label>رنگ کلی قالب 2</label><input type="color" id="color2" value="#73a8c1"><br></div>

   <div class="row">
   <button onclick="generateCode()">ساخت کد</button><button id="copyBtn" onclick="copyCode()" style="visibility: hidden;">کپی کد</button><br></div>

   <textarea style="visibility: hidden;" id="output" rows="10" cols="60" readonly></textarea>`
function generateCode() {
   const bgurl = document.getElementById("bgurl").value;
   const bgcolor = document.getElementById("bgcolor").value;
   const color = document.getElementById("color").value;
   const color2 = document.getElementById("color2").value;
   const code = `
<!DOCTYPE html> <html>
<!-- Theme BY : Stella.BlogFa.Com -->
<head> <link href="<-BlogPhotoLink->" rel="shortcut icon"> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="initial-scale=0.5, width=device-width"> <title><-BlogAndPostTitle-></title> <meta http-equiv="content-language" content="fa"> <meta name="description" content="<-BlogMetaDescription->"> <meta name="generator" content="blogfa.com"> <meta property="og:title" content="<-AutoPageTitle->"> <meta property="og:site_name" content="<-BlogTitle->"> <meta property="og:description" content="<-BlogMetaDescription->"> <meta name="twitter:title" content="<-AutoPageTitle->"> <meta name="twitter:description" content="<-BlogMetaDescription->"> <link rel="stylesheet" href="https://up.tempkade.ir/themes/fonts/font-awesome.min.css" type="text/css"> <link href='https://fonts.googleapis.com/css?family=Almarai' rel='stylesheet' type='text/css'> <link rel="alternate" type="application/rss+xml" title="<-BlogTitle->" href="<-BlogXmlLink->" /> <style>
      :root {
         /* رنگ کلی قالب 1 */
         --themecolor1: ${color};

         /* رنگ کلی قالب 2 */
         --themecolor2: ${color2};

         /* بکگراند */
         --background: ${bgcolor} url(${bgurl}) fixed;
      }
::selection { color: #fff; background: var(--themecolor1); } ::-moz-selection { color: #fff; background: var(--themecolor1); } ::-webkit-selection { color: #fff; background: var(--themecolor1); } * { transition: .2s; margin: 0px auto; padding: 0px; } p { margin-top: 1em; margin-bottom: 1em; } body { margin: 0; padding: 0; background: var(--background); text-align: center; height: 100%; font-family: Almarai; font-size: 9pt; color: #666; } #stella { text-align: center; width: 760px; max-width: 100%; height: 100%; direction: rtl; margin-top: 30px; margin-bottom: 30px; padding: 10px; box-sizing: border-box; } #menu { width: 100%; display: flex; justify-content: space-between; margin-top: 30px; } #menu a { color: #fff; padding-top: 15px; background: #000; border-radius: 50%; font-size: 20px; height: 35px; width: 50px; text-align: center; display: inline-block; border: 1px rgba(0, 0, 0, 0.2) solid; } #menu a:hover { opacity: 0.8; } #header { text-align: center; background: var(--themecolor2); color: #fff; padding: 10px; height: 250px; border-radius: 260px 260px 0 0; border: 1px #e5e5e5 solid; } #header h1 { font-size: 16pt; font-weight: bold; padding: 10px 0px 15px 0px; line-height: 150%; margin-top: 60px; } #header h1 a { color: #fff; } #header h2 { font-size: 9pt; font-weight: normal; line-height: 150%; padding-bottom: 30px; } #content { width: 68%; float: right; margin: 0px; padding: 10px; text-align: right; background-color: #fff; box-sizing: border-box; margin-bottom: 30px; border-radius: 260px; border: 1px #e5e5e5 solid; box-shadow: 0 0 10px 0 #aaa; } #sidebar { float: left; width: 28%; padding: 10px; overflow-x: hidden; background-color: #fff; border: 1px #e5e5e5 solid; border-radius: 110px; box-shadow: 0 0 10px 0 #aaa; box-sizing: border-box; } A { color: var(--themecolor2); text-decoration: none; font-weight: bold } A:hover { color: var(--themecolor1); } .post { text-align: right; line-height: 150%; border: 1px #e5e5e5 solid; background: #f4f4f4; margin: 10px 0; } .post h2 a { text-align: center; color: #fff; font-size: 9pt; display: block; font-weight: bold; font-style: normal; padding: 10px; background: var(--themecolor1); border-radius: 0 0 30px 30px; border-bottom: 1px #e5e5e5 solid; } .postcontent { padding: 10px; line-height: 180%; } img, p, div, table, td, tr, a, hr, span, ul, ol { max-width: 100%; height: auto; } .postinfo { font-size: 9pt; text-align: center; display: block; font-style: normal; color: #fff; padding: 5px; margin-top: 15px; border-radius: 30px 30px 0 0; background: var(--themecolor2); border-top: 1px #e5e5e5 solid; } .postinfo a { color: #fff; } .postinfo a:hover { opacity: 0.5; } .posttags { padding-top: 5px; line-height: 150%; } #sidebar .pro { background: #f4f4f4; line-height: 150%; text-align: center; padding: 10px; border: 1px #e5e5e5 solid; margin-bottom: 10px; border-radius: 110px 110px 0 0; } #sidebar .pro img { margin: 5px auto; border: 0px; display: block; max-width: 100%; text-align: center; border-radius: 50%; border: 1px #e5e5e5 solid; } #sidebar .Other { background: #f4f4f4; line-height: 150%; text-align: center; padding: 10px; border: 1px #e5e5e5 solid; border-radius: 0 0 110px 110px; } #sidebar .box { background: #f4f4f4; text-align: right; line-height: 200%; margin-bottom: 15px; border: 1px #e5e5e5 solid; border-bottom: none; } #sidebar .box a { display: block; padding: 2px 5px; border-bottom: 1px #e5e5e5 solid; } #sidebar .box a:hover { background: var(--themecolor2); color: #fff; } #sidebar .box ul { list-style-type: none; margin: 0px; } #sidebar h6 { text-align: center; color: #fff; font-size: 9pt; display: block; font-weight: bold; font-style: normal; background: var(--themecolor1); padding: 2px; border-bottom: 1px #e5e5e5 solid; } #sidebar .box ul i { color: #E0E0E0; font-style: normal; display: inline-block; } #footer { text-align: center; background: var(--themecolor2); color: #fff; padding: 10px; height: 250px; border-radius: 0 0 260px 260px; border: 1px #e5e5e5 solid; } #footer a.stella { color: #fff; font-size: 16px; font-weight: bold; padding: 10px 0px 15px 0px; line-height: 150%; } #footer p { font-size: 9pt; font-weight: normal; line-height: 150%; margin-top: 30px; display: block; } /* @media screen and (max-width: 630px) { #content { float: none; width: 100%; } #sidebar { float: none; width: 100%; } } @media screen and (max-width: 413px) { #menu a { font-size: 14px; height: 25px; width: 35px; padding-top: 10px; } } */ </style> \u003c\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0074\u0068\u0065\u006d\u0065\u002e\u0062\u006c\u006f\u0067\u0066\u0061\u002e\u0063\u006f\u006d\u002f\u0070\u0075\u0062\u006c\u0069\u0063\u002f\u0074\u0068\u0065\u006d\u0065\u002e\u0031\u002e\u0032\u002e\u006a\u0073\u0022\u0020\u0074\u0079\u0070\u0065\u003d\u0022\u0074\u0065\u0078\u0074\u002f\u006a\u0061\u0076\u0061\u0073\u0063\u0072\u0069\u0070\u0074\u0022\u003e\u003c\u002f\u0073\u0063\u0072\u0069\u0070\u0074\u003e\u0020\u003c\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u0074\u0079\u0070\u0065\u003d\u0022\u0074\u0065\u0078\u0074\u002f\u006a\u0061\u0076\u0061\u0073\u0063\u0072\u0069\u0070\u0074\u0022\u003e\u0020\u0074\u0072\u0079\u0020\u007b\u0020\u0063\u006d\u0074\u005f\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u005b\u0030\u005d\u0020\u003d\u0020\u0022\u0041\u006c\u006c\u0020\u0043\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u0022\u003b\u0020\u0063\u006d\u0074\u005f\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u005b\u0031\u005d\u0020\u003d\u0020\u0022\u004e\u006f\u0020\u0043\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u0022\u003b\u0020\u0063\u006d\u0074\u005f\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u005b\u0032\u005d\u0020\u003d\u0020\u0022\u004f\u006e\u0065\u0020\u0043\u006f\u006d\u006d\u0065\u006e\u0074\u0022\u003b\u0020\u0063\u006d\u0074\u005f\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u005b\u0033\u005d\u0020\u003d\u0020\u0022\u0043\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u0022\u003b\u0020\u0063\u006d\u0074\u005f\u0062\u006c\u006f\u0067\u0069\u0064\u0020\u003d\u0020\u0022\u003c\u002d\u0042\u006c\u006f\u0067\u0049\u0064\u002d\u003e\u0022\u003b\u0020\u007d\u0020\u0063\u0061\u0074\u0063\u0068\u0020\u0028\u0065\u0029\u0020\u007b\u0020\u007d\u0020\u003c\u002f\u0073\u0063\u0072\u0069\u0070\u0074\u003e </head> <body> <div id="stella"> <div id="content"> <div id="header"> <h1><a href="<-BlogUrl->"><-BlogTitle-></a></h1> <h2><-BlogDescription-></h2>
<!-- محل قرار گیری آیکون ها منو -->
<div id="menu">
<a href="mailto:<-BlogEmail->" class="fas fa-envelope" style="background: #de988e"></a>
<a href="<-BlogArchiveLink->" class="fas fa-calendar" style="background: #e6b4ae"></a>
<a href="<-BlogProfileLink->" class="fas fa-user" style="background: #ecc9c6"></a>
<a href="<-BlogUrl->" class="fas fa-home" style="background: #e5e4e7"></a>
<a href="/posts/" class="fas fa-archive" style="background: #d5e4eb"></a> 
<a href="/rss" class="fas fa-rss" style="background: #c0d7e2"></a>
<a href="http://stella.blogfa.com" class="fas fa-paint-brush" style="background: #a4c5d6"></a>
</div> </div> <BLOGFA> <div class="post"> <h2><a href="<-PostLink->"> <-PostTitle-> </a></h2> <div class="postcontent"> <-PostContent-> <BlogPostTagsBlock> <div class="posttags"> <span>Tage: </span> <BlogPostTags separator="# "><a href="<-TagLink->"> <-TagName-> </a></BlogPostTags> </div> </BlogPostTagsBlock> <BlogExtendedPost><a href="<-PostLink->">Read More</a></BlogExtendedPost> </div> <div class="postinfo"> <a href="<-PostLink->">+</a> <-PostDate-> <-PostTime-> BY: <-PostAuthor-> <BlogComment>&nbsp;|&nbsp;<span dir="rtl" comment-for="<-PostId->"></span></BlogComment> </div> </div> </BLOGFA> <div id="footer"> <BlogNextAndPreviousBlock> <div id="menu"> <BlogPreviousPageBlock>
<!-- آیکون فلش سمت راست -->
<a href="<-BlogPreviousPageLink->" class="fas fa-arrow-right" style="margin-right:20%; float:right;background: #e6b4ae"></a>
</BlogPreviousPageBlock>
<!-- آیکون خانه -->
<a href="<-BlogUrl->" class="fas fa-home" style="background: #e5e4e7"></a>
<BlogNextPageBlock>
<!-- آیکون فلش سمت چپ -->
<a href="<-BlogNextPageLink->" class="fas fa-arrow-left" style="margin-left:20%; float: left;background: #9ed4db"></a>
</BlogNextPageBlock>
</div> </BlogNextAndPreviousBlock> <p>قالب طراحی شده توسط :<br><a href="http://stella.blogfa.com" class="stella"> استلا &#9733; Stella</a></p> </div> </div> <div id="sidebar"> <div id="sidebarin"> <BlogProfile> <div class="pro"> <BlogPhoto><img src="<-BlogPhotoLink->"></BlogPhoto> <-BlogAbout-> </div> </BlogProfile> <BlogLinkDumpBlock> <div class="box"> <h6>Daily</h6> <ul> <BlogLinkDump> <li><a href="<-LinkUrl->" target="_blank" title="<-LinkDescription->"> <-LinkTitle-> </a></li> </BlogLinkDump> <li><a href="/links" onclick="return openlinks();">All Dailys</a></li> </ul> </div> </BlogLinkDumpBlock> <BlogArchiveBlock> <div class="box"> <h6>Archive</h6> <ul> <BlogArchive> <li><a href="<-ArchiveLink->"> <-ArchiveTitle-> </a></li> </BlogArchive> </ul> </div> </BlogArchiveBlock> <BlogCategoriesBlock> <div class="box"> <h6>Categories</h6> <ul> <BlogCategories> <li><a href="<-CategoryLink->"> <-CategoryName-> </a></li> </BlogCategories> </ul> </div> </BlogCategoriesBlock> <BlogTagsBlock> <div class="box"> <h6>Tags</h6> <ul> <BlogTags> <li><a href="<-TagLink->"> <-TagName-> (<-TagCount->) </a> </BlogTags> </ul> </div> </BlogTagsBlock> <BlogAuthorsBlock> <div class="box"> <h6>Authors</h6> <ul> <BlogAuthors> <li><a href="<-AuthorLink->"> <-AuthorName-> </a></li> </BlogAuthors> </ul> </div> </BlogAuthorsBlock> <BlogLinksBlock> <div class="box"> <h6>Links</h6> <ul> <BlogLinks> <li><a href="<-LinkUrl->" target="_blank"> <-LinkTitle-> </a></li> </BlogLinks> </ul> </div> </BlogLinksBlock> <div class="Other"> <-BlogCustomHtml-> <p>قالب طراحی شده توسط :<br><a href="http://stella.blogfa.com"> استلا &#9733; Stella</a></p> </div> </div> </div> </div>
<!-- Theme BY : Pink-Theme.BlogFa.Com -->
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