let keyBoard = document.querySelector('body')
let Personnage = $('#personnage')
const Document = $(document)
var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
Document.keydown(move)
let imgbombes = [];

imgbombes = round()

setInterval(fall, 100)

function move(event){

    if(event.key == "e"){
        Personnage.attr('src', "assets/images/character.gif")
        Personnage.offset({left:Personnage[0].offsetLeft + 10})
    }
    if(event.key == "a"){
        Personnage.attr('src', "assets/images/character-r.gif")
        Personnage.offset({left:Personnage[0].offsetLeft - 10})
    }
    if(Personnage[0].offsetLeft + Personnage[0].clientWidth > window.innerWidth){
        Personnage.offset({left:Personnage[0].offsetLeft = window.innerWidth - Personnage[0].clientWidth})
    }
    if(Personnage[0].offsetLeft < 0){
        Personnage.offset({left:Personnage[0].offsetLeft = 0})
    }
}
// bombesmall.offset({top:bombesmall[0].offsetTop + 50})

function round() {
    let imageArray = ["assets/images/bombe.png"];
    let imgs = [];
    for (let i = 0; i < 10; i++) {
        if (i < 10) {
            let img = document.createElement('img');
            img.src = imageArray[0];
            img.id = "img" + i
            console.log(img.id);
            img.className = "imgs"
            img.style = "postion:relative ; left:"+Math.floor(Math.random() * screen.width - 400)+"px;"
            document.getElementById('game').appendChild(img);
            imgs.push(img);
        }
    }
    return imgs;
}

function fall() {
    let bombe = imgbombes[Math.floor(Math.random() * 10)]
    let score = document.getElementById('score')
    let score_de_base = 0


    if ($(bombe).offset().top <= limit) {
        for (let i = 0; i < 10; i++) {
            $(bombe).offset({top: bombe.offsetTop + 2})
        }
    } else {
        score_de_base += 10
        $("#score").text("Score : " + (score_de_base + 10))
        $(bombe).offset({ top: 0})
    }
}
