let Physical = 10
let stress,literature,mathematics = 0
let moisture = 100
let up = 0
let science = 0
let soil_p = 100
let looks = 0
let history = 0
let mode = "normal"

function Start() {
    document.getElementById('Title').remove()
    document.getElementById('Start').remove()

    const plant = document.createElement('h1')//ここで植物
    plant.textContent = "苗1"
    document.body.appendChild(plant)


    let pop = document.createElement('button')
    pop.textContent = "勉強"
    pop.setAttribute('id','study')
    pop.setAttribute('onclick','study()')
    pop.setAttribute('class','event')
    document.body.appendChild(pop)

    pop = document.createElement('button')
    pop.textContent = "気遣う"
    pop.setAttribute('id','worry')
    pop.setAttribute('onclick','worry()')
    pop.setAttribute('class','event')
    document.body.appendChild(pop)

    pop = document.createElement('button')
    pop.textContent = "遊ぶ"
    pop.setAttribute('id','break')
    pop.setAttribute('class','event')
    document.body.appendChild(pop)
}

function study() {
    const dialog = document.getElementById("STUDY");
    dialog.show();  // ダイアログを表示する
    dialog.setAttribute("open", "true");
}

function worry() {
    const dialog = document.getElementById("WORRY");
    dialog.show();  // ダイアログを表示する
    dialog.setAttribute("open", "true");
}

function Language() {

    rand(5,10)
    literature += up;
    rand(5,5)
    stress += up
    check()
    
}

function Math() {

    rand(5,10)
    mathematics += up;
    rand(5,5)
    stress += up
    check()
    
}

function Science() {

    rand(5,10)
    science += up;
    rand(5,5)
    stress += up
    check()
    
}

function Work() {

    rand(5,20)
    Physical += up;
    rand(5,5)
    stress += up
    check()
    
}

function Sorclai_Study() {

    rand(5,10)
    history += up;
    rand(5,5)
    stress += up
    check()
    
}

function Soil() {

    rand(5,20)
    soil_p += up;
    rand(5,10)
    looks += up;
    rand(5,0)
    stress += up
    check()
    
}

function Water() {

    rand(5,20)
    moisture += up;
    rand(5,0)
    stress -= up
    check()
    
}

function Out() {

    rand(5,10)
    stress -= up;
    rand(10,0)
    looks += up;
    check()
    
}

function Bacation() {

    rand(50,100)
    stress -= up;
    rand(10,20)

    const rand = Math.floor(Math.random() * 8) + 1
    if (rand == "1") {
        Physical += up
    } else if (rand == "2") {
        moisture += up
    } else if (rand == "3") {
        mathematics += up
    } else if (rand == "4") {
        science += up
    } else if (rand == "5") {
        literature += up
    } else if (rand == "6") {
        soil_p += up
    } else if (rand == "7") {
        looks += up
    } else if (rand == "8") {
        history += up
    };

    check()
}

function check() {
    if (stress > Physical) {
        mode = "sick"
    }
}

function rand(n,m) {
    up = Math.floor(Math.random() * n) + m
}