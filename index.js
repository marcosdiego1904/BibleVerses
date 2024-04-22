function randomCite(min,max){
    let random = Math.floor(Math.random() * (max-min) + min);
    return random;
}
function getCiteHapiness(){
    let indice = randomCite(0,happiness.length);
    let text = happiness[indice].text;
    $(".verse").text(`"${text}"`);
    let author = happiness[indice].cite;
    $(".author").text(`${author}`)
}

function getSadness(){
    let indice = randomCite(0,sadness.length);
    let text = sadness[indice].text;
    $(".verse").text(`"${text}"`);
    let author = sadness[indice].cite;
    $(".author").text(`${author}`)
}
function getAnxiety(){
    let indice = randomCite(0,anxiety.length);
    let text = anxiety[indice].text;
    $(".verse").text(`"${text}"`);
    let author = anxiety[indice].cite;
    $(".author").text(`${author}`)
}
function getFear(){
    let indice = randomCite(0,fear.length);
    let text = fear[indice].text;
    $(".verse").text(`"${text}"`);
    let author = fear[indice].cite;
    $(".author").text(`${author}`)
}

function getMoney(){
    let indice = randomCite(0,money.length);
    let text = money[indice].text;
    $(".verse").text(`"${text}"`);
    let author = money[indice].cite;
    $(".author").text(`${author}`)
}
function getFuture(){
    let indice = randomCite(0,sadness.length);
    let text = future[indice].text;
    $(".verse").text(`"${text}"`);
    let author = future[indice].cite;
    $(".author").text(`${author}`)
}
$(document).ready(function(){
    $("#happiness").click(function(){
        $("#change").show();
        getCiteHapiness();
        let val1 = true;
        if(val1){
            $("#change").click(function(){
                getCiteHapiness();
            })
        }
       
    })
    
    $("#sadness").click(function(){
        $("#change").show();
        getSadness();
        let val2 = true;
        if(val2){
            $("#change").click(function(){
                getSadness();
            })
        }
    })
    $("#anxiety").click(function(){
        $("#change").show();
        getAnxiety();
        let val2 = true;
        if(val2){
            $("#change").click(function(){
                getAnxiety();
            })
        }
    })
    $("#fear").click(function(){
        $("#change").show();
        getFear();
        let val2 = true;
        if(val2){
            $("#change").click(function(){
                getFear();
            })
        }
    })
    $("#money").click(function(){
        $("#change").show();
        getMoney();
        let val2 = true;
        if(val2){
            $("#change").click(function(){
                getMoney();
            })
        }
    })
    $("#future").click(function(){
        $("#change").show();
        getFuture();
        let val2 = true;
        if(val2){
            $("#change").click(function(){
                getFuture();
            })
        }
    })
   
})