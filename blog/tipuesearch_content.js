var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"w9網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 期中整合 影片","tags":"w9 41123235","url":"./w9-41123235.html"},{"title":"w4網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第四週網誌 協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用.Odoo 參考文章中英並列，Replit 靜態網站檢視。","tags":"w4 41123235","url":"./w4 41123235.html"},{"title":"w1網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1 41123235","url":"./w1-41123235.html"},{"title":"w3網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第三週 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作.期中協同分組報告，有關 Codespaces 使用","tags":"w3 41123235","url":"./w3-41123235.html"},{"title":"w2網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第二週 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案.","tags":"w2 41123235","url":"./w2-41123235.html"},{"title":"w10網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第十週 w10 鋼球平衡台模擬控制 請各組員下載上列鋼球平衡台場景與 ZMQ RemoteAPI Python 控制程式後, 先採單機啟動場景與控制外, 再以跨 IPv6 與 IPv4 網路連線控制後, 將模擬過程影片與實際操作心得放置個人與分組網站與網誌中. W10 起 Replit 已經可以用來維護分組倉儲 建立各班學員的倉儲、網站與分組連結 閱讀結果: 各篇論文要點摘要： 論文一：Construction and theoretical study of a ball balancing platform 探討自動控制理論在穩定動態系統時的局限性，以球體平衡平台為例。 建立球體平衡平台的理論模型，並與實際搭建的平台進行比較。 分析理論與實際結果之間的差異，探討控制理論與系統實施的挑戰。 結論： 線性控制可以實現球體平衡平台的良好性能，但存在靜態誤差。 理論與實際結果的差異主要來自於物理模型的誤差和電子元件的非理想特性。 穩定動態系統的性能受限於狀態調整的靈活性、控制器設計和輸入數據的準確性。 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation 提出基於 PID 控制器的解決方案，以提高球體在平台上的位置調節精度。 使用 FPGA 實現平行計算，以提高系統速度和性能。 開發球體平衡平台的轉移函數，並合成 PID 控制器。 結論： 透過 FPGA 平行計算實現的 PID 控制器能有效提高球體位置調節精度。 該方案可應用於控制具有多個參數的高速物件。 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach 設計和比較三種控制結構，用於自動穩定球體在平台上的位置和軌跡追踪：PD 控制器、狀態空間反饋和帶狀態空間回饋的狀態空間觀測器。 使用牛頓法推導球體平衡平台的數學模型，並設計直流電機位置迴路控制。 結論： 三種控制結構均能實現穩定控制，但狀態空間觀測器具有最佳性能。 該研究建立了一個教育平台，用於向非技術人員解釋基本控制系統原理。 論文四：Design and Implementation a Ball Balancing System for Control Theory Course 開發一個球體平衡系統，使用微控制器和控制演算法來調節球體在梁上的平衡。 利用超聲波傳感器獲取球體位置，並使用 PID 控制演算法調整梁的角度。 開發介面程式，將即時位置曲線繪製在 MATLAB 中。 結論： 球體平衡系統是一個低成本的教育工具，可用於教授控制理論的應用。 該系統允許學生將理論知識應用於實踐中，並了解封閉迴路回饋系統和 PID 演算法的原理。 論文五：Ball on the plate balancing control system 設計一個二自由度球體平衡實驗平台，用於測試和驗證平衡控制演算法。 使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 結論： 該系統使用步進電機替代伺服電機，並無需外部電腦進行圖像處理，具有成本效益和易於控制的優勢。 未來計劃改進球體位置回饋信號的濾波，以提高控制系統的速度和品質。 論文六：2D Ball Balancer Control using QUARC 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 結論： PD 和 PID 控制器均能實現球體位置控制，但 PID 控制器在跟踪斜坡和正弦參考信號時具有更好的性能。 該實驗涵蓋了建模、控制器設計、模擬和實施等多個控制系統的關鍵步驟，為學生提供了寶貴的學習經驗。 接下來, 必須要設法了解, 哪一篇或哪幾篇論文對我們解決下列問題最有參考價值! 請從下列檔案中, 在個人與分組網站中說明從零組件繪圖、轉入 CoppeliaSim, 並透過 PID 控制後, 展示在不同的控制參數設定, 鋼球的 x 座標與 y 座標運動路徑圖.實習步驟: 開啟可攜程式系統中的 CoppeliaSim 開啟鋼球平衡台模擬場景 啟動可攜程式系統, pip install keyboard cbor pyzmq matplotlib 在 SciTE 中執行上列程式, 確定系統穩定後, 按下 q 終止模擬 matplotlib 將畫出鋼球在平台上的 x 與 y 座標圖 鋼球平衡台零組件繪圖","tags":"w10 41123235","url":"./w10-41123235.html"},{"title":"w11網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第十一週 利用 NX 1872 繪製鋼球平衡台所需的零組件.影片說明如何在個人或各組完成階段性改版之前, 先透過獨立分支進行資料改版提交與推送, 等個人階段性版本確定後, 再與分組分支合併, 最後各組的階段性版本再與建立網頁的主分支進行合併.影片說明如何設定 Siemens NX Journal 存檔格式, 並且利用 NXOpen 程式分別執行建立 block 與挖孔 (透過錄製 Journal 程式產生)後, 請設法將兩個程式合併為一個程式, 可以直接完成建立一個 block 並在其特定面上挖孔. d2024 協同產品設計實習課程專案的內容, 主要延續 CAD2023 課程重點, 然後再透過分組, 利用 Odoo PLM 相關文獻閱讀與應用作為協同產品開發流程的參考, 實際進行鋼球平衡台與綜合球賽機器人模擬系統的協同設計.","tags":"w11 41123235","url":"./w11-41123235.html"},{"title":"w12網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第十二週 協同產品設計實習第十二週實習操作, 各學員利用 NX 1872 繪製鋼球平衡台所需的零組件, 將各分組倉儲設為評分倉儲的子模組, 跨網路操控模擬場景裝置. NXOpen 實習項目一 以下影片說明如何設定 Siemens NX Journal 存檔格式, 並且利用 NXOpen 程式分別執行建立 block 與挖孔 (透過錄製 Journal 程式產生)後, 請設法將兩個程式合併為一個程式, 可以直接完成建立一個 block 並在其特定面上挖孔. 實習任務一: 請參考上列教學影片與參考程式, 將鋼球平衡台零組件的繪製與組立任務分配給組員, 由組員分別繳交至少一份零件繪製的 NXOpen Python 程式, 以及至少一份零件組立的 NXOpen Python 程式, 完成後, 請在個人的課程網誌紀錄 w12 實習任務一的執行心得. 將各分組倉儲設為評分倉儲的子模組 實習任務二: 將分組倉儲設為評分網站子模組 cd2023 足球機器人網際場景模擬 實習任務三: 跨網路操控足球機器人進行競技","tags":"w12 41123235","url":"./w12-41123235.html"},{"title":"w13網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第十三週 繪製鋼球平衡台","tags":"w13 41123235","url":"./w13-41123235.html"},{"title":"w14網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第十四週 鋼球平衡台的控制與模擬","tags":"w14 41123235","url":"./w14-41123235.html"},{"title":"w15網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第十五週 繪製足球機器人網際場景","tags":"w15 41123235","url":"./w15-41123235.html"},{"title":"w16網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第十六週 足球機器人網際場景的模擬","tags":"w16 41123235","url":"./w16-41123235.html"},{"title":"w17網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第十七週 做表單上的任務","tags":"w17 41123235","url":"./w17-41123235.html"},{"title":"w5網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第五週 第十一教學影片 第十二教學影片","tags":"w5 41123235","url":"./w5-41123235.html"},{"title":"w6網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第六週 協同產品設計實習的第六週, 說明協同 NX 零組件繪圖以及 CoppeliaSim 場景模擬相關檔案格式. Github Actions 帶有子模組的 main.yml 設定，ODOO PLM 論文中英並列任務 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作.教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 ODOO, NX, Sourcetree, Github and Replit 利用 ODOO PLM, Siemens NX, Sourcetree, Github 分組倉儲與 Replit 打造協同產品開發環境。","tags":"w6 41123235","url":"./w6-41123235.html"},{"title":"w7網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第七週 協同產品設計實習的第七週, 正值春假期間, 用來回顧課程內容重點.分組網站內容的協同 各分組網站內容的協同包含: 章節式網站內容 週記式網誌內容 網際簡報內容 分組零組件設計的協同 這是一個用於四對四個 robot 足球員的競技場, 希望利用 Solvespace 與 Siemens NX 建立能夠踢球進足球門, 並且能挑射球進對手籃球框得分的 robot 球員, 相關尺寸規格如下: 球場參考規格:競技球: 白色, 直徑 0.1m, 重量 0.5kg場地: 長 4m x 寬 2.5m, 外圍以足夠高度之隱形柵欄區隔足球門: 長 0.6m, 高 0.3m, 寬 0.1m籃板: 長 0.3m, 高 0.3m, 寬 0.1m, 位於足球門上方中央籃框: 由籃板向場內距離 0.1m, 內徑 0.2m, 框管直徑 0.02球員尺寸範圍: 長寬高各 0.2m, 重量 5kg, 請問你會如何設計這樣的一組 robot 球員? 因為 robot 球員機構零組件設計完成後, 需要轉檔進入 CoppeliaSim 完成模擬場景, 且將利用 ZMQ Remote API python 進行後續的球員競技控制, 針對這樣的配置, 你會如何建議? 我們想要用最簡單有效的 robot 球員設計, 你有甚麼建議? 假如藉由四輪車前方的撞擊板角度調整, 來推球或將球挑起進行達到踢球與挑球入籃框的動作, 是否合宜, 請協助評估! 不然, 你還有甚麼容易實現的踢球與挑球機構可供參考? cd2024 的鋼球平衡台控制系統擬採用 Solvespace 與 Siemens 繪製, 預計將系統中所需的零組件分別由子模組中的倉儲 downloads 目錄進行儲存, 各組員可以在 Windows 環境完成零件繪圖後, 放入各組員課程倉儲中的 downloads 目錄後, 再統一從分組倉儲 downloads 目錄中的組立檔案引用. 過程中再依照相同尺寸與架構規劃, 以隨身碟中的 Siemens NX1872.7z (需要登入 @nfu.edu.tw 後下載) 連網取得授權後進行繪製, 也可採用電腦輔助設計室所安裝的 NX1872 完成繪製. 利用 NX 繪製零件過程, 開啟 NXOpen Python Journal 程式的錄製後, 從中擷取設計參數以便在之後的 ECO (Engineering Change Order) 流程中透過參數調控取得新的零組件. 以下為 NXOpen Python 的範例程式 (nxopen_block.py, 零件檔案: block.prt):","tags":"w7 41123235","url":"./w7-41123235.html"},{"title":"w8網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第八週 協同產品設計實習的專案實習, 透過 ChatGPT、Gemini 1.5 Pro 與 Claude 3 的協助下進行. 協同資料處理，鋼球平衡台 PID 控制與模擬 實習步驟: 開啟可攜程式系統中的 CoppeliaSim 開啟鋼球平衡台模擬場景 啟動可攜程式系統, pip install keyboard cbor pyzmq matplotlib 在 SciTE 中執行上列程式, 確定系統穩定後, 按下 q 終止模擬 matplotlib 將畫出鋼球在平台上的 x 與 y 座標圖 工作原理： 模擬時間步長 (Simulation Time Step): CoppeliaSim 使用固定時間步長進行物理模擬. 這個時間步長決定了模擬推進和更新場景中物件的位置、速度和其他狀態的時間間隔. 實際的模擬時間步長可能因場景複雜性和硬體性能等因素而略有不同. 控制迴路時序 (Control Loop Timing): Python 程式中的控制迴路以一定的頻率運行，由 dt 值（原始程式中為 0.05 秒）决定。 這意味著控制器每 0.05 秒計算新的控制信號並向馬達發送指令. adjusted_dt 的計算: 如果模擬運行速度慢於實時(即模擬時間步長大於 0.05 秒), 控制迴路將比模擬更新運行得更快而導致問題, 因為控制器是基於過時的球的位置資料來做出決策的. 因此, adjusted_dt 會根據實際模擬時間步長與預期時間步長（0.05 秒）的比率，對原始 dt 值進行缩放： adjusted_dt = dt * sim.getSimulationTimeStep() / 0.05 對控制迴路的影響: 如果模擬運行速度比預期的慢(模擬時間步長 > 0.05 秒), adjusted_dt 將大於原始 dt. 這將有效地減慢了控制迴路的速度, 使其與模擬更新的速度相匹配. 通過使控制迴路與模擬速度同步, 控制器更有可能接收到關於球位置的最新資料，從而做出更好的控制決策並提高穩定性. 優點： 減少時序差異： adjusted_dt 有助於減輕控制迴路和模擬之間的時間不匹配, 這可能是不同硬體配置下控制性能差異的重要來源. 提高穩定性： 通過確保控制迴路以與模擬更新一致的速度運行, 控制器可以做出更明智的決策, 可能導致更好的穩定性和控制精度. 缺點： 非理想解決方案： 雖然 adjusted_dt 可以提高一致性, 但它并不能完全消除模擬速度變化帶來的問題. 其他因素, 例如網路延遲和數值精度, 仍然會導致結果的差異. 潛在的性能影響： 減慢控制迴路的速度可能會降低系統的響應能力, 尤其是在模擬運行速度明顯慢於實時的情況下.","tags":"w8 41123235","url":"./w8-41123235.html"}]};