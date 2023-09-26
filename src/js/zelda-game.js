const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 600;

const images = {};
images.map = new Image();
// images.map.src = "https://pbs.twimg.com/media/EeRWDIJU8AA2ixf?format=jpg&name=large"
images.map.src =
  "https://tcrf.net/images/4/4f/ALTTP_Quadrant_1_%28varied_dates%29.png";
images.player = new Image();
images.player.src = "https://www.wiizelda.net/images/alttp/sprite1.png";

const lostWoods = new Audio(
  "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/35%20-%20Lost%20Woods.mp3"
);

const swordSlash = new Audio(
  "https://noproblo.dayjo.org/ZeldaSounds/LA/LA_Sword_Slash1.wav"
);

function playLostWoods() {
  lostWoods.play();
  lostWoods.loop = true;
}

let playerWidth = 450 / 15;
let playerHeight = 299 / 10;

const mapWidth = 1024;
const mapHeight = 1024;

console.log(playerWidth, playerHeight);

let frameX = 1;
let frameY = 0;
let playerX = 200;
let playerY = 200;
let playerScale = 3;
const playerSpeed = 15;

let mapframeX = 0;
let mapframeY = 0;
let mapX = -200;
let mapY = -2550;
let mapScale = 3;

let swordActive = false;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function drawMap(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawMap(
    images.map,
    mapWidth * mapframeX,
    mapHeight * mapframeY,
    mapWidth,
    mapHeight,
    mapX,
    mapY,
    mapWidth * mapScale,
    mapHeight * mapScale
  );

  drawSprite(
    images.player,
    playerWidth * frameX,
    playerHeight * frameY,
    playerWidth,
    playerHeight,
    playerX,
    playerY,
    playerWidth * playerScale,
    playerHeight * playerScale
  );
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    frameY = 1;

    if (frameX <= 6) {
      console.log("move DOWN");
      frameX++;
      playerY += playerSpeed;
    } else {
      frameX = 0;
    }
  }

  if (e.key === "ArrowUp") {
    frameY = 4;

    if (frameX <= 6) {
      console.log("move UP");
      frameX++;
      playerY -= playerSpeed;
    } else {
      frameX = 0;
      frameY = 4;
    }
  }

  if (e.key === "ArrowLeft") {
    frameY = 1;

    if (frameX <= 12) {
      if (frameX < 7) {
        frameX = 7;
      }
      console.log("move LEFT");
      frameX++;
      playerX -= playerSpeed;
    } else {
      //
      frameY = 0;
      frameX = 5;
    }
  }

  if (e.key === "ArrowRight") {
    frameY = 4;

    if (frameX <= 12) {
      if (frameX < 7) {
        frameX = 7;
      }
      console.log("move RIGHT");
      frameX++;
      playerX += playerSpeed;
    } else {
      //
      frameY = 4;
      frameX = 8;
    }
  }

  if (e.key === " ") {
    e.preventDefault();
    frameY = 3;

    // if (frameX <= 4) {
    frameX = 0;
    frameY = 3;
    swingSword("down");
    // } else {
    // frameX = 0;
    // }
  }

  function swingSword(direction) {
    if (swordActive !== true) {
      swordSlash.currentTime = 0;
      swordSlash.play();
      swordSlash.addEventListener("ended", () => {
        swordSlash.currentTime = 0;
      });
      if (direction === "down") {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            console.log(i, "SWING");

            let j = 0;
            console.log(frameX);
            frameX++;

            if (j <= 4) {
              j++;
              console.log(j, "roll frame");
              if (frameX === 2) {
                frameY = 2.9;
              }

              if (frameX === 3) {
                frameX = 2.8;
                dx = 85;
              }

              if (frameX === 4 && frameY === 1) {
                frameY = 2.9;
                frameX = 3.8;
                dx = 150;
              }

              if (frameX === 5) {
                frameY = 2.95;
                frameX = 3.2;
                dx = 150;
              }
            } else {
              j = 0;
              frameX = 0;
              frameY = 3;
              dx = 100;
            }
          }, i * 80);
        }
        setTimeout(() => {
          console.log("SWING DONE");
          frameX = 0;
          frameY = 1;
          swordActive = false;
        }, 100 * 4);
      }
    } else {
      return;
    }
  }

  checkMap();
});

function checkMap() {
  if (playerX + playerWidth > canvas.width) {
    console.log("LINK ON RIGHT OF MAP!");
    mapX -= 600;
    playerX = -1;
    drawMap();
    drawSprite();
  }

  if (playerX <= 0) {
    console.log("LINK ON LEFT OF MAP!");
    mapX += 600;
    playerX = canvas.width - playerWidth - 1;
    drawMap();
    drawSprite();
  }

  if (playerY <= 0) {
    console.log("LINK ON TOP OF MAP!");
    mapY += 500;
    console.log(mapframeY, "-------HERE");
    playerY = playerY + canvas.height - playerHeight - 1;
    drawMap();
    drawSprite();
  }

  if (playerY + playerHeight >= 500) {
    console.log("LINK ON BOTTOM OF MAP!");
    mapY -= 500;
    playerY = 0;
    drawMap();
    drawSprite();
  }
}

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowDown") {
    frameY = 0;
    frameX = 1;
  }

  if (e.key === "ArrowUp") {
    frameY = 0;
    frameX = 2;
  }

  if (e.key === "ArrowLeft") {
    frameY = 0;
    frameX = 5;
  }

  if (e.key === "ArrowRight") {
    frameY = 4;
    frameX = 11;
  }
});

// class Link {
//   constructor() {
//     this.playerWidth = playerWidth;
//     this.playerHeight = playerHeight;
//     this.frameX = frameX;
//     this.frameY = frameY;
//     this.playerX = 200;
//     this.playerY = 200;
//     this.playerScale = 3;
//     this.playerSpeed = 10;
//   }
//   draw() {
//     console.log("draw");
//   }
//   update() {
//     console.log("update");
//   }
// }
