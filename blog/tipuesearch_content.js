var tipuesearch = {"pages":[{"tags":"misc","text":"40423219 40423207 404232077 40423206 40423226 40423229 40423241 40123158 2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","title":"About","url":"./pages/about/"},{"tags":"Course","text":"1.Fossil Server 實習查驗 2.路徑圖 3.四連桿四足行走機構 4.分組協同零件展示 1.Fossil Server 實習查驗 bg4 期中報告 2.期中報告Solvespace window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423203/40423203.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 5 倍 ratio = 5 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 3.四連桿四足行走機構 4.分組協同零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/40423203.stl', // data path path: './../data/madeleine/src/' // path to source directory from current html file }); };","title":"Week9 期中報告","url":"./Week 9.html"},{"tags":"Course","text":"onshape八連桿組立 onshape畫出八連桿 八連桿零件繪製 零件一 零件二 零件三 零件四 零件五 零件六 零件七 零件八 八連桿 組合 八連桿導入v-rep作動 正在製作 心得 這次作業中零件比起上次多了許多，再組裝過程中有多花許多時間思考了一下，過程中也增加了自己的組裝概念，收益良多!","title":"Week7","url":"./Week 7.html"},{"tags":"Course","text":"onshape四連桿，v-rep作動 onshape四連桿 40423203四連桿零件 40423203四連桿組合 四連桿匯入v-rep 心得 onshape已經熟練很多了,這一次遇到比較困難的地方,是在v-rep,在拉作動那裡雖然上一次已經有練習過了,但還是有些地方會卡住,最後還是完成作動了","title":"Week6","url":"./Week 6.html"},{"tags":"Course","text":"v-rep 單連桿匯入作動 v-rep 單連桿匯入作動 設定v-rep單連桿匯入作動 心得 一開始接觸v-rep時以為只是能夠看實體,不過因為這一次學會設定作動了,所以之後的機構可行性都可以利用v-rep模擬了","title":"Week5","url":"./Week 5.html"},{"tags":"Course","text":"hyperworks 14-3 翻譯，單連桿 solvespace，導入v-rep 線上 倉儲 要在https://mde2a2.kmol.info 中建立第四組的倉儲 第四組 hyperworks 14-3 翻譯 40423203 40423201 以下是我翻譯的上半部分 we've also introduced what is called the park 我們還去可以使用公共模型 empathy now and i promise just like CAD park entity 就像CAD模型一樣 so what that allows us to do is give you theexact same billof materials 模型中我們給你完全一樣的物料清單 in the hypermesh models that you have in your cad systems 讓你在你的CAD系統中使用 what we can do now is have say like thin solid it normally since 15 on many differentcomponents 我們還可以做出，像較薄的物件通常有15種不同的性質 but our shell components and you still want to group all those components into playing withparts and mangement completion away 並且將這些所有物質分配組到使用零件的一部分 if you want another representation which may be has a differentmesh density you can do that and configure your model according to different types of disciplines or crash or mph you 所以如果你想要不同性質表示不同密度，你可以做到並根據不同需求來配置你的模型 單連桿 solvespace 組合 零件一 零件二 零件三 導入v-rep 心得 v-rep這個軟體還是不太熟悉如何操作,但知道未來可以利用這個軟體提升效率,還要多多研究它","title":"Week4","url":"./Week 4.html"},{"tags":"Course","text":"onshape四連桿轉入v-rep，solvespace三角形運動軌跡模擬組裝 零件一 onshape 零件二 onshape 零件三 onshape 組合 onshape solvespace轉入v rep 40423203 onshape轉入v rep 40423203 solvespace三角形運動軌跡模擬40423203 心得: v-rep這個程式可以讓我們去模擬出這個作動方式可不可以實行,這樣可以減少很多風險而且很有效率","title":"Week3","url":"./Week 3.html"},{"tags":"Course","text":"solvespace組裝四連桿機構 組合 四連桿機構 solvespace 零件一 零件二 零件三 心得: 本週要畫連桿機構，以協同模式完成Solvespace 與 Onshape 單軸旋轉連桿系統與四連桿系統，在經練習後拍下影片紀錄。 筆記: 1.REM tiny2017主要針對初學Python3與C學員所建立 2.REM近端使用fossil管理資料版本，並且定時轉為git格式後上傳到github","title":"Week2","url":"./Week 2.html"},{"tags":"Course","text":"用ipconfig/all的指令去找IP位置 利用尋找到的IP位置去改stunnel.conf的IP 用ipconfig/all的指令去找IP位置 利用尋找到的IP位置去改stunnel.conf的IP 心得:新的學期，新的開始，上學期所學的軟體也漸漸熟悉，這學期還有許多學習的地方，希望能夠順利完成所有挑戰~~","title":"Week1","url":"./Week 1.html"}]};