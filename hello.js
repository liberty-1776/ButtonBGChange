function random_bg_color() {
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function colorize(){
    this.style.backgroundColor = random_bg_color()
    this.style.color = random_bg_color()
}

const button = document.querySelectorAll('button')
for(let btn of button){
    btn.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1')
for(let h1 of h1s){
    h1.addEventListener('click', colorize)
}

