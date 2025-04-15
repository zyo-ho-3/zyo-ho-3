document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作を防ぐ

    const formData = new FormData(event.target);
    const answers = {};
    formData.forEach((value, key) => {
        answers[key] = value;
    });

    function funny() {
        console.log("Funny function called!");
    }
    function smart() {
        console.log("smart function called!");
    }
    function kind() {
        console.log("kind function called!");
    }
            


    //質問１の要素を作成
    if (answers.question1 === 'A') {
        funny = 10;
        smart = 8;
        kind = 12;
    } else if (answers.question1 === 'B') {
        funny = 13;
        smart = 5;
        kind = 11;
    } else if (answers.question1 === 'C') {
        funny = 7;
        smart = 13;
        kind = 7;
    }


console.log(funny)
console.log(smart)
console.log(kind)


    // 質問２の要素を加算
    if (answers.question2 === 'D') {
        funny += 12;
        smart += 10;
        kind += 12;
    } else if (answers.question2 === 'E') {
        funny += 14;
        smart += 10;
        kind += 12;
    } else if (answers.question2 === 'F') {
        funny += 6;
        smart += 7;
        kind += 7;
    }

    console.log(funny)
    console.log(smart)
    console.log(kind)



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
