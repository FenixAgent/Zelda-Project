export function gallery() {
  var imageIndex = [
    {
      url: "https://wallpaper.dog/large/20484925.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20484908.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20484911.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20484937.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20484958.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20484959.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20484969.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20485017.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20485024.jpg",
      tags: "zelda"
    },
    {
      url: "https://wallpaper.dog/large/20485036.jpg",
      tags: "zelda"
    },
    {
      url:
        "https://c4.wallpaperflare.com/wallpaper/33/730/564/the-legend-of-zelda-the-legend-of-zelda-breath-of-the-wild-mountains-dusk-trees-hd-wallpaper-preview.jpg",
      tags: "zelda"
    },
    {
      url:
        "https://c4.wallpaperflare.com/wallpaper/978/95/751/the-legend-of-zelda-background-desktop-wallpaper-preview.jpg",
      tags: "zelda"
    }
  ];

  var videoIndex = [
    {
      url: "https://www.youtube.com/embed/30DPu43_Uko",
      tags: "zelda",
      start_time: 0
    },
    {
      url: "https://www.youtube.com/embed/4bHUl92VNFg",
      tags: "zelda",
      start_time: 0
    },
    {
      url: "https://www.youtube.com/embed/mp9OUSxXoDg",
      tags: "zelda",
      start_time: 0
    },
    {
      url: "https://www.youtube.com/embed/e-3sYL7vJTQ",
      tags: "zelda",
      start_time: 0
    },
    {
      url: "https://www.youtube.com/embed/tMYg69DfFLs",
      tags: "zelda",
      start_time: 0
    }

  ];

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      events: {
        onReady: onPlayerReady
      }
    });
  }

  var isPlaying = false;


  function onPlayerReady() {

    $(btnplay).on('click', function () {
      if (isPlaying === false) {

        player.playVideo();
        isPlaying = true;
        console.log("VIDEO PLAYING")



      } else {

        player.stopVideo();
        isPlaying = false;
        console.log("VIDEO STOP")
      }
    })
  }

  const viewImageGallery = document.querySelector(".view-image-gallery");
  const viewVideoGallery = document.querySelector(".view-video-gallery");
  const searchButton = document.querySelector(".search-button");
  const searchBar = document.querySelector(".search-bar");
  const searchMenuTag = document.querySelector(".search-header");
  const imageGalleryButton = document.querySelector(".image-gallery-button");
  imageGalleryButton.disabled = true;

  const videoGalleryButton = document.querySelector(".video-gallery-button");
  videoGalleryButton.disabled = false;

  const galleryTag = document.querySelectorAll(".gallery-tag");

  var imageIndexNumber = 0;
  var videoIndexNumber = 0;

  imageGalleryButton.addEventListener("click", () => {
    viewImageGallery.style = "display: flex";
    viewVideoGallery.style = "display: none";
    imageGalleryButton.disabled = true;
    videoGalleryButton.disabled = false;
  });

  videoGalleryButton.addEventListener("click", () => {
    viewImageGallery.style = "display: none";
    viewVideoGallery.style = "display: flex";
    imageGalleryButton.disabled = false;
    videoGalleryButton.disabled = true;
  });

  // console.log("random", videoIndex[videoIndexNumber + 1].url);
  function buildPhotoGallery() {
    class ImageGallery {
      constructor(imageUrl) {
        this.el = document.createElement("img");
        this.el.src = imageUrl;
        this.el.classList.add(`image#${imageIndexNumber}`);
        this.el.classList.add(`gallery-image`);
        viewImageGallery.append(this.el);
      }
    }
    const addImage = new ImageGallery(imageIndex[imageIndexNumber].url);
  }

  buildPhotoGallery();

  function buildVideoGallery() {
    class VideoGallery {
      constructor(videoUrl) {
        this.el = document.createElement("iframe");
        this.el.src = `${videoUrl}?controls=0&showinfo=0&rel=0&enablejsapi?`;
        this.el.id = "player";
        // this.el.allowfullscreen = "";
        this.el.classList.add(`video#${videoIndexNumber}`);
        this.el.classList.add(`gallery-video`);
        viewVideoGallery.append(this.el);
      }
    }
    const addImage = new VideoGallery(videoIndex[videoIndexNumber].url);
  }

  buildVideoGallery();

  function imageGalleryPush() {
    for (var i = 0; i <= imageIndex.length - 1; i++) {
      if (imageIndexNumber < imageIndex.length - 1) {
        imageIndexNumber += 1;
        buildPhotoGallery();
      } else {
        imageIndexNumber = 0;
      }
    }
  }
  imageGalleryPush();

  function videoGalleryPush() {
    for (var i = 0; i <= videoIndex.length - 1; i++) {
      if (videoIndexNumber < videoIndex.length - 1) {
        // console.log("CHECK", videoIndexNumber, videoIndex.length - 1);
        videoIndexNumber += 1;
        buildVideoGallery();
      } else {
        videoIndexNumber = 0;
      }
    }
  }
  videoGalleryPush();


  function searchGallery() {
    //imageIndex[imageIndexNumber].tags

    searchButton.addEventListener("click", () => {
      searchBar.style = "display: flex;";
      searchMenuTag.style = "display: flex;";

      imageGalleryButton.style = "display: none;";
      videoGalleryButton.style = "display: none;";
      searchButton.style = "display: none;";
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        // console.log(e.key);

        searchBar.style = "display: none;";
        searchMenuTag.style = "display: none;";

        imageGalleryButton.style = "display: static;";
        videoGalleryButton.style = "display: static;";
        searchButton.style = "display: static;";
      }
    });

    for (var i = 0; i < galleryTag.length; i++) {
      galleryTag[i].addEventListener("click", (e) => {
        // console.log(`Selected: ${e.target.innerHTML}`);

        // console.log(imageIndex[0].tags)

        searchBar.style = "display: none;";
        searchMenuTag.style = "display: none;";

        imageGalleryButton.style = "display: static;";
        videoGalleryButton.style = "display: static;";
        searchButton.style = "display: static;";
      });
    }
  }

  searchGallery();


  function fullScreenImage() {
    const galleryImage = document.querySelector('.gallery-image')
    const fullScreenActive = document.querySelector('.full-screen-active')
    galleryImage.addEventListener('click', () => {
      fullScreenActive.style = "display: "

    })
  }

  fullScreenImage()
}