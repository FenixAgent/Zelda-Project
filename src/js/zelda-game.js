const logo = document.querySelector(".logo")
const linkChar = document.querySelector('.link')
const zeldaMusic = document.getElementById('zelda-music')
const zeldaIntro = document.getElementById('zelda-intro')

const layout = document.querySelector(".layout")
const holdLayout = document.querySelector(".holdlayout")
const slash = document.getElementById("sword-slash")

const startM = document.querySelector(".start")
const slashM = document.querySelector(".swing")
const downM = document.querySelector(".down")

var onoff = false;

startM.addEventListener("click", () => {

    if (onoff === false) {

        linkChar.classList.remove("walk-left")
        linkChar.classList.remove("walk-down")
        linkChar.classList.remove("walk-up")
        linkChar.classList.remove("walk-right")

        linkChar.classList.add("stand-down")
        zeldaIntro.play()

        holdLayout.style = "opacity: 0; animation: fadeIn 10s ease-in forwards; animation-delay: 3s;"
        onoff = true;
    } else {

        zeldaIntro.pause();
        zeldaIntro.currentTime = 0


        holdLayout.style = "opacity: 0;"

        onoff = false


    }
})

slashM.addEventListener("click", () => {
    linkChar.classList.remove("walk-left")
    linkChar.classList.remove("walk-down")
    linkChar.classList.remove("walk-up")
    linkChar.classList.remove("walk-right")

    linkChar.classList.add("swing-sword-down")

    slash.play();


    setTimeout(() => {



        linkChar.classList.remove("swing-sword-down")

        linkChar.classList.add("stand-down")

    }, 400)

})

downM.addEventListener("click", () => {
    linkChar.classList.remove("walk-left")
    linkChar.classList.remove("walk-right")
    linkChar.classList.remove("walk-up")
    linkChar.classList.remove("stand-down")


    linkChar.classList.add("walk-down")
    layout.style = "animation: layout-run-down 1s ease-in forwards"


})







document.addEventListener('keydown', (e) => {

    if (e.key === "ArrowUp") {
        linkChar.classList.remove("walk-left")
        linkChar.classList.remove("walk-down")
        linkChar.classList.remove("stand-down")
        linkChar.classList.remove("walk-right")

        linkChar.classList.add("walk-up")
        layout.style = "animation: layout-run-up 1s ease-in forwards"



    }

    if (e.key === "ArrowRight") {
        linkChar.classList.remove("walk-left")
        linkChar.classList.remove("walk-down")
        linkChar.classList.remove("stand-down")
        linkChar.classList.remove("walk-up")

        linkChar.classList.add("walk-right")
        layout.style = "animation: layout-run-right 1s ease-in forwards"

    }


    if (e.key === "ArrowDown") {

        linkChar.classList.remove("walk-left")
        linkChar.classList.remove("walk-right")
        linkChar.classList.remove("walk-up")
        linkChar.classList.remove("stand-down")


        linkChar.classList.add("walk-down")
        layout.style = "animation: layout-run-down 1s ease-in forwards"




    }

    if (e.key === "ArrowLeft") {

        linkChar.classList.remove("walk-down")
        linkChar.classList.remove("stand-down")
        linkChar.classList.remove("walk-up")
        linkChar.classList.remove("walk-right")


        linkChar.classList.add("walk-left")
        layout.style = "animation: layout-run-left 1s ease-in forwards"



    }

    if (e.key === "Enter") {

        linkChar.classList.remove("walk-left")
        linkChar.classList.remove("walk-down")
        linkChar.classList.remove("walk-up")
        linkChar.classList.remove("walk-right")

        linkChar.classList.add("stand-down")
        zeldaIntro.play()

        holdLayout.style = "opacity: 0; animation: fadeIn 10s ease-in forwards; animation-delay: 3s;"





    }

    if (e.key === "Backspace") {



        zeldaIntro.pause();
        zeldaIntro.currentTime = 0


        holdLayout.style = "opacity: 0;"



    }

    if (e.key === " ") {

        linkChar.classList.remove("walk-left")
        linkChar.classList.remove("walk-down")
        linkChar.classList.remove("walk-up")
        linkChar.classList.remove("walk-right")

        linkChar.classList.add("swing-sword-down")

        slash.play();


        setTimeout(() => {



            linkChar.classList.remove("swing-sword-down")

            linkChar.classList.add("stand-down")

        }, 400)



    }

})

document.addEventListener("animationend", () => {
    console.log(linkChar.getBoundingClientRect())

})



document.addEventListener('keyup', (e) => {


    linkChar.classList.remove("walk-left")
    linkChar.classList.remove("walk-down")
    linkChar.classList.remove("walk-up")
    linkChar.classList.remove("walk-right")
    linkChar.classList.add("stand-down")



})





function playIntro() {


    zeldaMusic.play()

}

///console.log meow


