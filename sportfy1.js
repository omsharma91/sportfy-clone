let boxes = document.querySelectorAll(".box1");
let music = document.querySelector(".music")
const songItems = Array.from(document.getElementsByClassName('songitem'));
const masterPlay = document.getElementById("masterPlay");
const audio = new Audio("songs/1.mp3")
const progressbar = document.getElementById("progressbar")
const gif = document.getElementById('gif') 
const masterSongName = document.getElementById('masterSongName')
const time = document.getElementById("tm")
const playList = document.querySelectorAll(".playlist_song")
const plus = document.querySelector(".lib_plus")
const sng = document.querySelector("#sng")
const album = document.getElementById("album")
const title = document.querySelector(".title")
const bottom = document.querySelector("#btm")
const left = document.querySelector(".img")
const login = document.querySelector(".log")
const login_page = document.querySelector(".login")
const logbtn = document.querySelector(".loginbtn")
const home = document.querySelector(".hm")
const search = document.querySelector(".srch")
const search_page = document.querySelector(".search")
console.log(search_page)

let songs=[
    {songName:"Love The Way You Lie II (Ft. Eminem)(0)",path:"songs/1.mp3"},
    {songName:"Lay It Down by Mc Flo (2012)",path:"songs/1.mp3"},
    {songName:"Dil Kare Chu Che 192Kbps",path:"songs/1.mp3"},
    {songName:"555__Maya_(High_Sessions)(256k)",path:"songs/1.mp3"},
    {songName:"shree ram dhun __DJwali.com__",path:"songs/1.mp3"},
    {songName:"shree ram dhun __DJwali.com__",path:"songs/1.mp3"},
];

boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        if (songIndex==0){
            album.classList.remove("hide");
            title.classList.add("hide");
            music.classList.add("hide");
        }
        else{
            album.classList.add("hide");
        };
    });
});

playList.forEach((element,i)=>{
    element.getElementsByClassName('songNames')[0].innerText = songs[i].songName;
});

songItems.forEach((element,i)=>{
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

const play = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

masterPlay.addEventListener('click',()=>{
    if (audio.paused||audio.currentTime<=0){
        audio.play();
        play();
        gif.style.opacity=  1
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audio.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    };
});

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        if (audio.paused){
            play();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audio.src = `songs/${songIndex}.mp3`;
            audio.currentTime = 0;
            masterSongName.innerText = songs[songIndex-1].songName;
            audio.play();
            duration = audio.duration;
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottom.classList.remove("hide")
        }
        else {
            audio.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
        };
    });
});

audio.addEventListener('timeupdate',()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    let totalTime = audio.duration/60;
    let progressTime = progress/60;
    time.innerText=progressTime.toFixed(2)+'/'+ totalTime.toFixed(2);
    progressbar.value=progress;   
});

progressbar.addEventListener('change',()=>{
    audio.currentTime = progressbar.value*audio.duration/100;
});

plus.addEventListener("click",()=>{
    sng.classList.toggle("hide");
});

// console.log(document.querySelectorAll(".songItemPlay"))
// document.querySelectorAll(".songItemPlay").forEach(()=>{
//     addEventListener("click",()=>{
//         bottom.classList.remove("hide");
//     });
// });

// console.log(Array.from(document.querySelector(".songItemPlay")))
// Array.from(document.getElementsByClassName("songItemPlay")).addEventListener("click",()=>{
//     bottom.classList.remove("hide");
// })

// document.getElementsByClassName('songItemPlay').on("click", function () {
//     console.log("here")
// })

left.addEventListener("click",()=>{
    console.log("hiiii");
    album.classList.add("hide");
    login_page.classList.add("hide");
    search_page.classList.add("hide")
    music.classList.remove("hide");

});
login.addEventListener('click',()=>{
    album.classList.add("hide");
    music.classList.add("hide");
    title.classList.add("hide");
    search_page.classList.add("hide")
    login_page.classList.remove("hide")

})
logbtn.addEventListener("click",()=>{
    login_page.classList.add("hide")
    album.classList.add("hide");
    music.classList.remove("hide");
    title.classList.remove("hide");
    search_page.classList.add("hide")
    alert("Log in Sucessfully")
})
home.addEventListener("click",()=>{
    login_page.classList.add("hide")
    album.classList.add("hide");
    music.classList.remove("hide");
    title.classList.remove("hide");
    search_page.classList.add("hide")
})
search.addEventListener("click",()=>{
    login_page.classList.add("hide")
    album.classList.add("hide");
    music.classList.add("hide");
    title.classList.add("hide");
    search_page.classList.remove("hide")
})