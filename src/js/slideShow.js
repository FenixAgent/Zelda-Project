export function slideShowRun() {
    const imageLink = [
        {
            url: "https://wallpaper.dog/large/20484925.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20484908.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20484911.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20484937.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20484958.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20484959.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20484969.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20485017.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20485024.jpg"
        },
        {
            url: "https://wallpaper.dog/large/20485036.jpg"
        }
    ];


    const slideWrapper = document.querySelector(".slide-wrapper");
    const slideShow = document.querySelector(".slide-show");
    const previous = document.querySelector(".previous");
    const next = document.querySelector(".next");
    const controls = document.querySelector(".controls");

    var imageCounter = document.querySelector(".count");
    var imageCount = imageLink.length;
    var imageNumber = 0;


    ///FUNC TO BUILD OUT SLIDES AND SLIDE NAV RULES

    imageSlide(imageLink[imageNumber].url);

    function imageSlide(imageLink) {

        class ZeldaImage {
            constructor(imageLink) {
                this.el = document.createElement("img");
                this.el.src = imageLink;
                this.alt = `ZELDA IMAGE ${imageNumber}`;
                this.el.classList.add(`zeldaImage${imageNumber}`);
                this.el.classList.add(`slide-image`);
                slideShow.append(this.el);
            }
        }
        const addImage = new ZeldaImage(imageLink);


        imageCounter.innerHTML = `${imageNumber + 1} of ${imageCount}`;

        if (imageNumber === imageCount) {
            console.log(`END OF SLIDE`);
            next.style.visibility = "hidden";
        } else if (imageNumber === 0) {
            console.log(`FIRST SLIDE`);
            previous.style.visibility = "hidden";
        } else {
            previous.style.visibility = "visible";
            next.style.visibility = "visible";
        }
    }


    ///KICK OFF AUTO-SLIDE BASED ON THE ABOVE IMAGELINKS[] & IMAGESLIDE() 

    // function autoSlide() {
    //     for (let i = 1; i <= imageCount; i++) {
    //         setTimeout(() => {
    //             next.click();
    //         }, 5500 * i);
    //     }
    // }
    // autoSlide();


    /// SET KEYBOARD & BUTTON CLICK METHODS TO NAV SLIDESHOW 

    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            previous.click();
        }
        if (e.key === "ArrowRight") {
            next.click();
        }
    });

    next.addEventListener("click", () => {
        if (imageNumber + 1 === imageCount) {
            document.querySelector(`.zeldaImage${imageNumber}`).remove();
            console.log("ROLL");
            imageNumber = 0;
            imageSlide(imageLink[imageNumber].url);
        } else {

            document.querySelector(`.zeldaImage${imageNumber}`).remove();
            imageNumber += 1;
            imageSlide(imageLink[imageNumber].url);
        }
    });

    previous.addEventListener("click", () => {
        if (imageNumber <= 0) {
            document.querySelector(`.zeldaImage${imageNumber}`).remove();
            console.log("CAN'T GO BACK");
            imageSlide(imageLink[imageNumber].url);
        } else {
            document.querySelector(`.zeldaImage${imageNumber}`).remove();
            imageNumber -= 1;
            imageSlide(imageLink[imageNumber].url);
        }
    });


    /// BRIGHTEN BUTTONS/ARROWS TO SLIDESHOW NAV

    slideWrapper.addEventListener("mouseover", () => {
        controls.style = "opacity:1;";
    });


    /// SET FULLSCREEN METHOD ON IMAGE CLICK

    controls.addEventListener('click', (e) => {
        if (e.target.className === "controls") {

            fullScreen()

        }
    })

    /// SET FULL SCREEN METHODS

    const fullScreenCover = document.querySelector('.full-screen-cover')
    const fullScreenImage = document.querySelector('.full-screen-image')


    window.addEventListener('keydown', (e) => {
        if (e.key === " ") {
            fullScreenCover.style = "display: none;";

        }
    })

    function fullScreen() {

        fullScreenImage.src = imageLink[imageNumber].url;
        fullScreenCover.style = "display: flex;";

        fullScreenImage.addEventListener('click', (e) => {
            fullScreenCover.style = "display: none;";


        })
    }


}