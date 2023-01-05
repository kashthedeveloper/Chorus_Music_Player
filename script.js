let musics = [
  {
    title: "Onde anda você",
    artist: "Thiago Nacarato",
    src: "mscs/Onde Anda Você.mp3",
    img: "imgs/ondeandavoce.jpg"
  },
  {
    title: "Happier than Ever",
    artist: "Inutilismo",
    src:
      "mscs/Billie Eilish - Happier than Ever Cover by Lucas @canalinutilismo.mp3",
    img: "imgs/lukinha.jpg"
  }
];

let music_total = musics.length - 1;

let musica = document.querySelector(".msc");

let music_duration = document.querySelector(".fim");

let capa = document.querySelector(".capa");

let musicName = document.querySelector(".msc-name");

let musicArtist = document.querySelector(".art-name");

let indexMusica = 0;

renderMusic(indexMusica);

//Events

document.querySelector(".play").addEventListener("click", PlayMusica);

document.querySelector(".pause").addEventListener("click", PauseMusica);

musica.addEventListener("timeupdate", UpdateBar);

document.querySelector(".previous").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = music_total;
  }
  renderMusic(indexMusica);
  PlayMusica();
});

document.querySelector(".next").addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > music_total) {
    indexMusica = 0;
  }
  renderMusic(indexMusica);
  PlayMusica();
});

musica.addEventListener("loadeddata", duration);

//funcs

function renderMusic(index) {
  musica.setAttribute("src", musics[index].src);
  musica.addEventListener("loadeddata", () => {
    musicName.textContent = musics[index].title;
    musicArtist.textContent = musics[index].artist;
    capa.src = musics[index].img;
    music_duration.textContent = Sec2Min(Math.floor(musica.duration));
  });
}

function PlayMusica() {
  musica.play();
  document.querySelector(".pause").style.display = "block";
  document.querySelector(".play").style.display = "none";
}

function PauseMusica() {
  musica.pause();
  document.querySelector(".play").style.display = "block";
  document.querySelector(".pause").style.display = "none";
}

function UpdateBar() {
  let bar = document.querySelector("progress");
  bar.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let timecurrent = document.querySelector(".inicio");
  timecurrent.textContent = Sec2Min(Math.floor(musica.currentTime));
}

function duration() {
  let duracaoMusica = document.querySelector(".fim");

  duracaoMusica.textContent = Sec2Min(Math.floor(musica.duration));
}

function Sec2Min(sec) {
  let minutecamp = Math.floor(sec / 60);
  let seccamp = sec % 60;
  if (seccamp < 10) {
    seccamp = "0" + seccamp;
  }
  if (isNaN(minutecamp)) {
    console.log("tem nada");
  }
  return minutecamp + ":" + seccamp;
}
