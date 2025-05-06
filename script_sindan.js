(function () {

    var COUNT = 200;
    var masthead = document.querySelector('.background_01');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = masthead.clientWidth;
    var height = masthead.clientHeight;
    var i = 0;
    var active = false;
  
    function onResize() {
      width = masthead.clientWidth;
      height = masthead.clientHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = '#FFF';
  
      var wasActive = active;
      active = width > 200;
  
      if (!wasActive && active)
        requestAnimFrame(update);
    }
  
    var Snowflake = function () {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
      this.r = 0;
  
      this.reset();
    }
  
    Snowflake.prototype.reset = function() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.vy = 0.5 + Math.random() * 2;
      this.vx = 0.3 - Math.random();
      this.r = 0.5 + Math.random() * 1.5;
      this.o = 0.3 + Math.random() * 0.5;
    }
  
    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';
  
    var snowflakes = [], snowflake;
    for (i = 0; i < COUNT; i++) {
      snowflake = new Snowflake();
      snowflake.reset();
      snowflakes.push(snowflake);
    }
  
    function update() {
  
      ctx.clearRect(0, 0, width, height);
  
      if (!active)
        return;
  
      for (i = 0; i < COUNT; i++) {
        snowflake = snowflakes[i];
        snowflake.y += snowflake.vy;
        snowflake.x += snowflake.vx;
  
        ctx.globalAlpha = snowflake.o;
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 5, false);
        ctx.closePath();
        ctx.fill();
  
        if (snowflake.y > height) {
          snowflake.reset();
        }
      }
  
      requestAnimFrame(update);
    }
  
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  
    onResize();
    window.addEventListener('resize', onResize, false);
  
    masthead.appendChild(canvas);
  })();




  


document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作を防ぐ

    const formData = new FormData(event.target);
    const answers = {};
    formData.forEach((value, key) => {
        answers[key] = value;
    });

/*
const ess = 0;
const science = 0;
const sakado = 0;
const k_on = 0;
const suisou = 0;
const ko_rasu = 0;
const seitokai = 0;
const bizyutu = 0;
const syodou = 0;
const housou = 0;
const syasin = 0;
const autodoa = 0;
const soccer = 0;
const rikuzyou = 0;
const suiei = 0;
const hand = 0;
const basuke = 0;
const bare_ = 0;
const syourinzi = 0;
const zyuudou = 0;
const takkyuu = 0;
const bado = 0;
const dance = 0;
const amadare = 0;
const ekuse = 0;
const tennis = 0;
*/

    function ess() {
        console.log("ess function called!");
    }
    function science() {
        console.log("science function called!");
    }
    function sakado() {
        console.log("sakado function called!");
    }
    function k_on() {
        console.log("k_on function called!");
    }
    function suisou() {
        console.log("suisou function called!");
    }
    function ko_rasu() {
        console.log("ko_rasu function called!");
    }   
    function seitokai() {
        console.log("seitokai function called!");
    }
    function bizyutu() {
        console.log("bizyutu function called!");
    }
    function syodou() {
        console.log("syodou function called!");
    }    
    function housou() {
        console.log("housou function called!");
    }
    function syasin() {
        console.log("syasin function called!");
    }
    function autodoa() {
        console.log("autodoa function called!");
    }
    function soccer() {
        console.log("soccer function called!");
    }
    function rikuzyou() {
        console.log("rikuzyou function called!");
    }
    function suiei() {
        console.log("suiei function called!");
    }
    function hand() {
        console.log("hand function called!");
    }
    function basuke() {
        console.log("basuke function called!");
    }    
    function bare_() {
        console.log("bare_ function called!");
    }
    function syourinzi() {
        console.log("syourinzi function called!");
    }
    function zyuudou() {
        console.log("zyuudou function called!");
    }    
    function takkyuu() {
        console.log("takkyuu function called!");
    }
    function bado() {
        console.log("bado function called!");
    }
    function dance() {
        console.log("dance function called!");
    }
    function amadare() {
        console.log("takkyuu function called!");
    }
    function ekuse() {
        console.log("bado function called!");
    }
    function tennis() {
        console.log("dance function called!");
    }


ess = 0;
science = 0;
sakado = 0;
k_on = 0;
suisou = 0;
ko_rasu = 0;
seitokai = 0;
bizyutu = 0;
syodou = 0;
housou = 0;
syasin = 0;
autodoa = 0;
soccer = 0;
rikuzyou = 0;
suiei = 0;
hand = 0;
basuke = 0;
bare_ = 0;
syourinzi = 0;
zyuudou = 0;
takkyuu = 0;
bado = 0;
dance = 0;
amadare = 0;
ekuse = 0;
tennis = 0;

    //質問１の要素を作成
    if (answers.question1 === 'AA') {
        ekuse += 2;
    } else if (answers.question1 === 'AB') {
        autodoa += 1;
        science += 1;
        sakado += 1;
    } else if (answers.question1 === 'AC') {

    }


    //質問2の要素を作成
    if (answers.question2 === 'AD') {
        autodoa += 2;
        soccer += 2;
        rikuzyou += 2;
        suiei += 2;
        hand += 2;
        basuke += 2;
        bare_ += 2;
        syourinzi += 2;
        zyuudou += 2;
        bado += 2;
        dance += 2;
        tennis += 2;
    } else if (answers.question2 === 'AE') {
        k_on += 1;
        suisou += 1;
    } else if (answers.question2 === 'AF') {

    }


    //質問3の要素を作成
    if (answers.question3 === 'AG') {
        seitokai += 2;
    } else if (answers.question3 === 'AH') {
        bizyutu += 1;
        science += 1;
        autodoa += 1;
        ekuse += 1;
        ess += 1;
        ko_rasu += 1;
    } else if (answers.question3 === 'AI') {
    
    }


    //質問4の要素を作成
    if (answers.question4 === 'AJ') {

    } else if (answers.question4 === 'AK') {
        autodoa += 1;
        soccer += 1;
        rikuzyou += 1;
        suiei += 1;
        hand += 1;
        basuke += 1;
        bare_ += 1;
        syourinzi += 1;
        zyuudou += 1;
        bado += 1;
        dance += 1;
        tennis += 1;
    } else if (answers.question4 === 'AL') {

    }


    //質問5の要素を作成
    if (answers.question5 === 'AM') {
        science += 2;
        bizyutu += 2;
    } else if (answers.question5 === 'AN') {
        k_on += 1;
        syodou += 1;
    } else if (answers.question5 === 'AO') {
    
        }

    //質問6の要素を作成
    if (answers.question6 === 'AP') {
        ess += 2;
        ekuse += 2;
        seitokai += 2;
    } else if (answers.question6 === 'AQ') {
        autodoa += 1;
        soccer += 1;
        rikuzyou += 1;
        suiei += 1;
        hand += 1;
        basuke += 1;
        bare_ += 1;
        syourinzi += 1;
        zyuudou += 1;
        bado += 1;
        dance += 1;
        tennis += 1;
    } else if (answers.question6 === 'AR') {

    }

    //質問7の要素を作成
    if (answers.question7 === 'AS') {
        autodoa += 2;
        soccer += 2;
        rikuzyou += 2;
        suiei += 2;
        hand += 2;
        basuke += 2;
        bare_ += 2;
        syourinzi += 2;
        zyuudou += 2;
        bado += 2;
        dance += 2;
        tennis += 2;
        suisou += 2;
        ko_rasu += 2;
        k_on += 2;
    } else if (answers.question7 === 'AT') {

    } else if (answers.question7 === 'AU') {
    
    }

    //質問8の要素を作成
    if (answers.question8 === 'AV') {
        seitokai += 2;
    } else if (answers.question8 === 'AW') {
        autodoa += 1;
        soccer += 1;
        rikuzyou += 1;
        suiei += 1;
        hand += 1;
        basuke += 1;
        bare_ += 1;
        syourinzi += 1;
        zyuudou += 1;
        bado += 1;
        dance += 1;
        tennis += 1;
    } else if (answers.question8 === 'AX') {

    }

    //質問9の要素を作成
    if (answers.question9 === 'AY') {

    } else if (answers.question9 === 'AZ') {
        autodoa += 1;
        soccer += 1;
        rikuzyou += 1;
        suiei += 1;
        hand += 1;
        basuke += 1;
        bare_ += 1;
        syourinzi += 1;
        zyuudou += 1;
        bado += 1;
        dance += 1;
        tennis += 1;
        suisou += 1
        k_on += 1
        housou += 1
    } else if (answers.question9 === 'BA') {
    
    }

    //質問10の要素を作成
    if (answers.question10 === 'BB') {

    } else if (answers.question10 === 'BC') {
        autodoa += 1;
        soccer += 1;
        rikuzyou += 1;
        suiei += 1;
        hand += 1;
        basuke += 1;
        bare_ += 1;
        syourinzi += 1;
        zyuudou += 1;
        bado += 1;
        dance += 1;
        tennis += 1;
        suisou += 1;
        k_on += 1;
        ekuse += 1;
        science += 1;
        seitokai += 1;
        housou += 1;
    } else if (answers.question10 === 'BD') {

    }

    //質問11の要素を作成
    if (answers.question11 === 'BE') {
        autodoa += 2;
        soccer += 2;
        rikuzyou += 2;
        suiei += 2;
        hand += 2;
        basuke += 2;
        bare_ += 2;
        syourinzi += 2;
        zyuudou += 2;
        bado += 2;
        dance += 2;
        tennis += 2;
    } else if (answers.question11 === 'BF') {
        autodoa += 1;

    } else if (answers.question11 === 'BG') {
    
    }

    //質問12の要素を作成
    if (answers.question12 === 'BH') {

    } else if (answers.question12 === 'BI') {
        k_on += 1;
        ess += 1;
        science += 1;
        sakado += 1;
        ko_rasu += 1;
        seitokai += 1;
        bizyutu += 1;
        syodou += 1;
        housou += 1;
        syasin += 1;
        amadare += 1;
        ekuse += 1;
    } else if (answers.question12 === 'BJ') {

    }

    //質問13の要素を作成
    if (answers.question13 === 'BK') {

    } else if (answers.question13 === 'BL') {
        autodoa += 1;
        soccer += 1;
        rikuzyou += 1;
        suiei += 1;
        hand += 1;
        basuke += 1;
        bare_ += 1;
        syourinzi += 1;
        zyuudou += 1;
        bado += 1;
        dance += 1;
        tennis += 1;
        autodoa += 1;
        k_on += 1;
        suisou += 1;
    } else if (answers.question13 === 'BM') {
    
    }

    //質問14の要素を作成
    if (answers.question14 === 'BN') {

    } else if (answers.question14 === 'BO') {
        ess += 1;
        science += 1;
        sakado += 1;
        ko_rasu += 1;
        seitokai += 1;
        bizyutu += 1;
        syodou += 1;
        housou += 1;
        syasin += 1;
        amadare += 1;
        ekuse += 1;
        tennis += 1;
    } else if (answers.question14 === 'BP') {

    }

    //質問15の要素を作成
    if (answers.question15 === 'BQ') {

    } else if (answers.question15 === 'BR') {
        autodoa += 1;
        soccer += 1;
        rikuzyou += 1;
        suiei += 1;
        hand += 1;
        dance += 1;
        tennis += 1;
        autodoa += 1;
        k_on += 1;
        suisou += 1;
    } else if (answers.question15 === 'BS') {
    
    }

    //質問16の要素を作成
    if (answers.question16 === 'BT') {
        ekuse += 2;
        ess += 2;
    } else if (answers.question16 === 'BU') {
        seitokai += 1;
        k_on += 1;
    } else if (answers.question16 === 'BV') {

    }

    //質問17の要素を作成
    if (answers.question17 === 'BW') {

    } else if (answers.question17 === 'BX') {
        basuke += 1;
        bare_ += 1;
        dance += 1;
        syourinzi += 1;
        soccer += 1;
    } else if (answers.question17 === 'BY') {
    
    }

    //質問18の要素を作成
    if (answers.question18 === 'BZ') {
        bizyutu += 2;
        syodou += 2;
        suisou += 2;
    } else if (answers.question18 === 'CA') {
        housou += 1;
        science += 1;
    } else if (answers.question18 === 'CB') {

    }

    //質問19の要素を作成
    if (answers.question19 === 'CC') {

    } else if (answers.question19 === 'CD') {
        syourinzi += 1;
        soccer += 1;
        dance += 1;
        basuke += 1;
    } else if (answers.question19 === 'CE') {
    
    }

    //質問20の要素を作成
    if (answers.question20 === 'CF') {

    } else if (answers.question20 === 'CG') {
        basuke += 1;
        syourinzi += 1;
        dance += 1;
        rikuzyou += 1;
        suiei += 1;
        seitokai += 1;
        k_on += 1;
        suisou += 1;
        bizyutu += 1;
    } else if (answers.question20 === 'CH') {

    }


    console.log(ess)
    console.log(science)
    console.log(sakado)
    console.log(k_on)
    console.log(suisou)
    console.log(ko_rasu)
    console.log(seitokai)
    console.log(bizyutu)
    console.log(syodou)
    console.log(housou)
    console.log(syasin)
    console.log(autodoa)
    console.log(soccer)
    console.log(rikuzyou)
    console.log(suiei)
    console.log(hand)
    console.log(basuke)
    console.log(bare_)
    console.log(syourinzi)
    console.log(zyuudou)
    console.log(takkyuu)
    console.log(bado)
    console.log(dance)
    console.log(amadare)
    console.log(ekuse)
    console.log(tennis)



    const an = 2;

    // 各アルファベットに対応する数値と文言
    const sindandata = { 
        a: { value: ess, label: "ESS部" }, 
        b: { value: science, label: "サイエンス部" }, 
        c: { value: sakado, label: "茶華道部" }, 
        d: { value: k_on, label: "軽音部" }, 
        e: { value: suisou, label: "吹奏楽部" }, 
        f: { value: ko_rasu, label: "コーラス部" }, 
        g: { value: seitokai, label: "生徒会" }, 
        h: { value: bizyutu, label: "美術部" }, 
        i: { value: syodou, label: "書道部" }, 
        j: { value: housou, label: "放送部" }, 
        k: { value: syasin, label: "写真部" }, 
        l: { value: autodoa, label: "アウトドア部" }, 
        m: { value: soccer, label: "サッカー部" }, 
        n: { value: rikuzyou, label: "陸上部" }, 
        o: { value: suiei, label: "水泳部" }, 
        p: { value: hand, label: "ハンドボール部" }, 
        q: { value: basuke, label: "バスケ部" }, 
        r: { value: bare_, label: "バレー部" }, 
        s: { value: syourinzi, label: "少林寺拳法部" }, 
        t: { value: zyuudou, label: "柔道部" }, 
        u: { value: takkyuu, label: "卓球部" }, 
        v: { value: bado, label: "バドミントン部" }, 
        w: { value: dance, label: "ダンス部" }, 
        x: { value: amadare, label: "あまだれ部" }, 
        y: { value: ekuse, label: "エクセ部" }, 
        z: { value: tennis, label: "テニス部" }
    };

    // 昇順ソート
    const sortedEntries = Object.values(sindandata).sort((a, b) => b.value - a.value);

    // 結果をHTMLに追加
    const listElement = document.getElementById("sortedList");
    sortedEntries.forEach(({ value, label }) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${label} (${value})`;
        listElement.appendChild(listItem);
    });



    document.getElementById("dataForm").addEventListener("submit", function() {
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const message = document.getElementById("messageInput").value;
        document.getElementById("dataInput").value = JSON.stringify({ sindandata, rating, message });
      });


});

    /*
    let result_a = '';

    let result_b = '';

    let result_c = '';
    // 比較の計算
    if (funny < 20) {
        result_a = 'おもんなくて';
    } else {
        result_a = 'おもろくて';
    }

    if (smart < 20) {
        result_b = '馬鹿な';
    } else {
        result_b = '賢い';
    }

    if (funny < 20) {
        result_c = '人の心無いです！';
    } else {
        result_c = '優しい人です！';
    }


    document.getElementById('result_a').innerText = result_a;

    document.getElementById('result_b').innerText = result_b;

    document.getElementById('result_c').innerText = result_c;


});

*/