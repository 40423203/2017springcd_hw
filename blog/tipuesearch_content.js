var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","tags":"misc","text":"40423219 40423207 404232077 40423206 40423226 40423229 40423241 40123158 2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog"},{"url":"./Week 12.html","title":"Week12","tags":"Course","text":"正齒輪傳動繪圖 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 53 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx #ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 cobj = window.Cobj.new creategeartooth = window.createGearTooth.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 17 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = cobj(data, \"SHAPE\", { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = cobj(shapedefs.circle(hr), \"PATH\") shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path cx = canvas.width/2 cy = canvas.height/2 gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 cgo.render(gear)"},{"url":"./Week 11.html","title":"Week11","tags":"Course","text":"讀後心得 正齒輪傳動繪圖 1.讀後心得 Onshape's Greatest Tech Tips– Volume 1 心得: 清楚了解on shape功能對於產品設計中的應用外，也可發現on shape在協同上的重視，如:追隨模式，方便讓合作夥伴與作者同步討論外，也能對產品特徵做及時修改，以及使用導入DXF檔的功能，能讓2D草圖匯入後，方便對照進行3D建模，建好的產品儲存後，可以去看時間軸了解產品變化。 An Introduction to Agile Product Design 心得: 在強調速度與創新的現代社會中，越快抓住市場趨勢改變的人就越有優勢，因此敏捷的產品設計在這時代是不可或缺的能力，由此可見設計使用的軟體越偏向快速、成本低、功能完備、方便討論的趨勢，若能縮短產品設計與發佈的時間，越能搶佔市場優勢，成為新潮產品，並獨佔專利權，團隊合作方面也不如以往，一人一台電腦CAD畫圖階段性接著畫，現在為節省時間，強調同步處理也就說到了，前面所提到的on shape，此軟體在現在要求敏捷產品設計的社會中，可發現在協同上的便利，一方面讓團隊能隨時注意組員畫圖進度若要組裝可以馬上應用外，一方面因為是網頁式開啟，比起以往需要帶著軟體到處跑，現在只需要有網路皆可開啟討論。 總心得:看完文章後了解了on shpae的便利性並對他的再產品設計中的地位有不同的認識，並也了解到了現代產品設計的趨勢與合作團隊模式的改變，或許現在的on shape還不能完全取代許多繪圖軟體，但相信在未來一步步改善後，非常有機會成為未來產品設計的主流。"},{"url":"./Week 9.html","title":"Week9 期中報告","tags":"Course","text":"1.Fossil Server 實習查驗 2.路徑圖 3.四連桿四足行走機構 4.分組協同零件展示 1.Fossil Server 實習查驗 bg4 期中報告 2.期中報告Solvespace window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423203/40423203.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 5 倍 ratio = 5 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 3.四連桿四足行走機構 四連桿四足行走機構作動 4.分組協同零件展示"},{"url":"./Week 7.html","title":"Week7","tags":"Course","text":"onshape八連桿組立 onshape畫出八連桿 八連桿零件繪製 零件一 零件二 零件三 零件四 零件五 零件六 零件七 零件八 八連桿 組合 八連桿導入v-rep作動 正在製作 心得 這次作業中零件比起上次多了許多，再組裝過程中有多花許多時間思考了一下，過程中也增加了自己的組裝概念，收益良多!"},{"url":"./Week 6.html","title":"Week6","tags":"Course","text":"onshape四連桿，v-rep作動 onshape四連桿 40423203四連桿零件 40423203四連桿組合 四連桿匯入v-rep 心得 onshape已經熟練很多了,這一次遇到比較困難的地方,是在v-rep,在拉作動那裡雖然上一次已經有練習過了,但還是有些地方會卡住,最後還是完成作動了"},{"url":"./Week 5.html","title":"Week5","tags":"Course","text":"v-rep 單連桿匯入作動 v-rep 單連桿匯入作動 設定v-rep單連桿匯入作動 心得 一開始接觸v-rep時以為只是能夠看實體,不過因為這一次學會設定作動了,所以之後的機構可行性都可以利用v-rep模擬了"},{"url":"./Week 4.html","title":"Week4","tags":"Course","text":"hyperworks 14-3 翻譯，單連桿 solvespace，導入v-rep 線上 倉儲 要在https://mde2a2.kmol.info 中建立第四組的倉儲 第四組 hyperworks 14-3 翻譯 40423203 40423201 以下是我翻譯的上半部分 we've also introduced what is called the park 我們還去可以使用公共模型 empathy now and i promise just like CAD park entity 就像CAD模型一樣 so what that allows us to do is give you theexact same billof materials 模型中我們給你完全一樣的物料清單 in the hypermesh models that you have in your cad systems 讓你在你的CAD系統中使用 what we can do now is have say like thin solid it normally since 15 on many differentcomponents 我們還可以做出，像較薄的物件通常有15種不同的性質 but our shell components and you still want to group all those components into playing withparts and mangement completion away 並且將這些所有物質分配組到使用零件的一部分 if you want another representation which may be has a differentmesh density you can do that and configure your model according to different types of disciplines or crash or mph you 所以如果你想要不同性質表示不同密度，你可以做到並根據不同需求來配置你的模型 單連桿 solvespace 組合 零件一 零件二 零件三 導入v-rep 心得 v-rep這個軟體還是不太熟悉如何操作,但知道未來可以利用這個軟體提升效率,還要多多研究它"},{"url":"./Week 3.html","title":"Week3","tags":"Course","text":"onshape四連桿轉入v-rep，solvespace三角形運動軌跡模擬組裝 零件一 onshape 零件二 onshape 零件三 onshape 組合 onshape solvespace轉入v rep 40423203 onshape轉入v rep 40423203 solvespace三角形運動軌跡模擬40423203 心得: v-rep這個程式可以讓我們去模擬出這個作動方式可不可以實行,這樣可以減少很多風險而且很有效率"},{"url":"./Week 2.html","title":"Week2","tags":"Course","text":"solvespace組裝四連桿機構 組合 四連桿機構 solvespace 零件一 零件二 零件三 心得: 本週要畫連桿機構，以協同模式完成Solvespace 與 Onshape 單軸旋轉連桿系統與四連桿系統，在經練習後拍下影片紀錄。 筆記: 1.REM tiny2017主要針對初學Python3與C學員所建立 2.REM近端使用fossil管理資料版本，並且定時轉為git格式後上傳到github"},{"url":"./Week 1.html","title":"Week1","tags":"Course","text":"用ipconfig/all的指令去找IP位置 利用尋找到的IP位置去改stunnel.conf的IP 用ipconfig/all的指令去找IP位置 利用尋找到的IP位置去改stunnel.conf的IP 心得:新的學期，新的開始，上學期所學的軟體也漸漸熟悉，這學期還有許多學習的地方，希望能夠順利完成所有挑戰~~"}]};