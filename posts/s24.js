document.getElementById("customization").innerHTML = `
   <div class="row"><label>عکس پسزمینه</label><input type="text" id="bgurl"><br></div>
   <div class="row"><label>رنگ پسزمینه</label><input type="color" id="bgcolor" value="#ededed"><br></div>
   <div class="row"><label>رنگ کلی قالب</label><input type="color" id="color" value="#f9b8d5"><br></div>

   <div class="row">
   <button onclick="generateCode()">ساخت کد</button><button id="copyBtn" onclick="copyCode()" style="visibility: hidden;">کپی کد</button><br></div>

   <textarea style="visibility: hidden;" id="output" rows="10" cols="60" readonly></textarea>`
function generateCode() {
   const bgurl = document.getElementById("bgurl").value;
   const bgcolor = document.getElementById("bgcolor").value;
   const color = document.getElementById("color").value;
   const code = `
   <!DOCTYPE html>
   <html>
   
   <head>
      <!-- Theme BY : Stella.BlogFa.Com -->
      <link href="<-BlogPhotoLink->" rel="shortcut icon">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>
         <-BlogAndPostTitle->
      </title>
      <meta http-equiv="content-language" content="fa">
      <meta name="description" content="<-BlogMetaDescription->">
      <meta name="generator" content="blogfa.com">
      <meta property="og:title" content="<-AutoPageTitle->">
      <meta property="og:site_name" content="<-BlogTitle->">
      <meta property="og:description" content="<-BlogMetaDescription->">
      <meta name="twitter:title" content="<-AutoPageTitle->">
      <meta name="twitter:description" content="<-BlogMetaDescription->">
      <link rel="alternate" type="application/rss+xml" title="<-BlogTitle->" href="<-BlogXmlLink->" />
      <link href="https://fonts.googleapis.com/css2?family=Zain&display=swap" type="text/css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      <style>
         /* رنگ کلی قالب */
      :root { --maincolor: ${color}; }
   
      /* پسزمینه */
      body { background: ${bgcolor} url(${bgurl}) fixed; 
   
   font-size: 18px; direction: rtl; } img, p, div, table, td, tr, a, hr, span, ul, ol { max-width: 100%; height: auto; }  ::selection { background: var(--maincolor); color: white; } ::-moz-selection { background: var(--maincolor); color: white; } ::-webkit-scrollbar { width: 7px; } ::-webkit-scrollbar-thumb { background: var(--maincolor); } * { margin: 0px; padding: 0px; transition: 0.5s; font-family: Zain, tahoma; text-decoration: none; color: #444; box-sizing: border-box; } A { font-weight: bold; color: var(--maincolor); } A:hover { opacity: 0.7; } img { border-radius: 5px; outline: 15px solid rgba(255, 255, 255, 0.3); outline-offset: -15px; } #stella { margin: 20px auto; padding: 0 10px; width: 500px; display: flex; flex-direction: column; box-sizing: border-box; gap: 20px; background: linear-gradient(to right, transparent, transparent 20%, white 0, white 22%, transparent 0, transparent 78%, white 0, white 80%, transparent 0); } .box { background: white; border-radius: 30px; padding: 30px; width: 100%; } .box2 { background: white; border-radius: 30px; overflow: hidden; width: 100%; } .topcolor { background: var(--maincolor); height: 100px; margin-bottom: -70px; } .padding { padding: 20px; padding-top: 0;} h1, h3 { color: var(--maincolor); } h2 { font-size: 18px; font-weight: normal; } a.btn { color: white; font-size: 13px; padding: 5px 10px; border-radius: 100px; background: var(--maincolor); color: white; text-align: center; } a.cmnt { cursor: pointer; } .flex1 { flex: 1; } .p { float: right; } .n { float: left; } .column { display: flex; flex-direction: column; width: 100%; } ul, ul a { list-style: none; font-weight: normal; } .themeby { text-align: center; margin-top: 10px; font-size: 14px; animation: themeby 1s alternate infinite; } .gap { gap: 10px; } .flex { display: flex; align-items: center; width: 100%; } .center { text-align: center; } .small { font-size: 12px; color: gray; } .round { border-radius: 10000px; } .title { font-weight: bold; font-size: 20px; } .aligncenter { align-items: center; } .wrap{ flex-wrap: wrap; } @keyframes themeby { from { opacity: 0; } to { opacity: 1; } }
      </style>
      <script src="http://theme.blogfa.com/public/theme.1.2.js" type="text/javascript"></script>
      <script type="text/javascript">
         try {
            cmt_caption[0] = "All Comments";
            cmt_caption[1] = "No Comments";
            cmt_caption[2] = "One Comment";
            cmt_caption[3] = "Comments";
            cmt_blogid = "<-BlogId->";
         }
         catch (e) { }
      </script>
   </head>
   
   <body>
      <div id="stella">
         <div class="box2 center">
            <BlogPhoto><div class="topcolor"></div>
            <img src="<-BlogPhotoLink->" alt="<-BlogTitle->" class="round"></BlogPhoto>
            <div class="padding column gap center aligncenter top">
               <a href="/">
                  <h1>
                     <-BlogTitle->
                  </h1>
               </a>
               <h2>
                  <-BlogDescription->
               </h2>
               <BlogProfile>
                  <p class="small">
                     <-BlogAbout->
                  </p>
               </BlogProfile>
               <div class="flex gap">
                  <a href="/" class="btn flex1">Home</a>
                  <BlogProfileLinkBlock>
                     <a href="<-BlogProfileLink->" class="btn flex1">Profile</a>
                  </BlogProfileLinkBlock>
                  <a href="/posts/" class="btn flex1">Posts</a>
                  <a href="http://stella.blogfa.com" class="btn flex1">Designer</a>
               </div>
            </div>
         </div>
         <BLOGFA>
            <div class="box">
               <div class="column">
                  <a href="<-PostLink->">
                     <h3>
                        <-PostTitle->
                     </h3>
                  </a>
                  <span class="small">
                     <-PostDate->
                        <-PostTime-> ~ <-PostAuthor->
                  </span>
               </div>
               <-PostContent->
                  <BlogPostTagsBlock>
                     <div class="gap wrap" style="margin-bottom: 10px;">
                        tags :
                        <BlogPostTags>
                           <a href="<-TagLink->" class="btn small"># <-TagName-></a>
                        </BlogPostTags>
                     </div>
                  </BlogPostTagsBlock>
                  <BlogComment><a class="cmnt"><span dir="rtl" comment-for="<-PostId->"></span></a></BlogComment>
                  <BlogExtendedPost><a href="<-PostLink->" class="n">. . . Read More</a></BlogExtendedPost>
            </div>
         </BLOGFA>
         <BlogNextAndPreviousBlock>
            <div class="box center">
               <BlogPreviousPageBlock>
                  <div class="p"><a href="<-BlogPreviousPageLink->" class="fa-solid fa-chevron-right"></a></div>
               </BlogPreviousPageBlock>
               <a href="/posts/">All Posts</a>
               <BlogNextPageBlock>
                  <div class="n"><a href="<-BlogNextPageLink->" class="fa-solid fa-chevron-left"></a></div>
               </BlogNextPageBlock>
            </div>
         </BlogNextAndPreviousBlock>
         <BlogLinkDumpBlock>
            <div class="box">
               <div class="title">Daily</div>
   
               <ul>
                  <BlogLinkDump>
                     <li><a href="<-LinkUrl->" target="_blank" title="<-LinkDescription->">
                           <-LinkTitle->
                        </a></li>
                  </BlogLinkDump>
                  <li><a href="/links" onclick="return openlinks();">All Dailys</a></li>
               </ul>
            </div>
         </BlogLinkDumpBlock>
         <BlogArchiveBlock>
            <div class="box">
               <div class="title">Archive</div>
   
               <ul>
                  <BlogArchive>
                     <li><a href="<-ArchiveLink->">
                           <-ArchiveTitle->
                        </a></li>
                  </BlogArchive>
               </ul>
            </div>
         </BlogArchiveBlock>
         <BlogCategoriesBlock>
            <div class="box">
               <div class="title">Categories</div>
               <ul>
                  <BlogCategories>
                     <li><a href="<-CategoryLink->">
                           <-CategoryName->
                        </a></li>
                  </BlogCategories>
               </ul>
            </div>
         </BlogCategoriesBlock>
         <BlogTagsBlock>
            <div class="box">
               <div class="title">Tags</div>
               <div class="gap wrap flex">
                  <BlogTags>
                     <a href="<-TagLink->" class="btn">
                        <-TagName-> (<-TagCount->)
                     </a>
                  </BlogTags>
               </div>
            </div>
         </BlogTagsBlock>
         <BlogAuthorsBlock>
            <div class="box">
               <div class="title">Authors</div>
   
               <ul>
                  <BlogAuthors>
                     <li><a href="<-AuthorLink->">
                           <-AuthorName->
                        </a></li>
                  </BlogAuthors>
               </ul>
            </div>
         </BlogAuthorsBlock>
         <BlogLinksBlock>
            <div class="box">
               <div class="title">Links</div>
               <ul>
                  <BlogLinks>
                     <li><a href="<-LinkUrl->" target="_blank">
                           <-LinkTitle->
                        </a></li>
                  </BlogLinks>
               </ul>
            </div>
         </BlogLinksBlock>
         <div class="box center">
            <-BlogCustomHtml->
               <br><a href="http://stella.blogfa.com" class="themeby">قالب طراحی شده توسط : استلا &#9733; Stella</a>
         </div>
      </div>
   </body>
   <!-- Theme BY : Stella.BlogFa.Com -->
   
   </html>
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