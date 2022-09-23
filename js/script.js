console.log("Welcome Spotify");

const header = document.querySelector('header');
const boxes = document.getElementsByClassName("box");
let prevBtn = document.getElementById("prevBtn");
let playBtn = document.getElementById("playBtn");
let nextBtn = document.getElementById("nextBtn");
let indexNo = 0;
let range = document.getElementById("range");
const song = new Audio('songs/song1.mp3');
let songName = document.getElementById("songName");
let songArtist = document.getElementById("songArtist");
let songHeading = document.getElementsByClassName("songHeading");
let searchBox = document.getElementById("searchBox");
let searchBtn = document.getElementById("searchBtn");




for (let i = 0; i < 15; i++) {
    let box = boxes[i];
    box.addEventListener('click' , () => {
    // alert(box.id);
    indexNo = box.id;
    songLoad(indexNo);
    });
    
}


let checkIndex = 0;

searchBtn.addEventListener('click' , () => {

for(let i = 0; i < 15; i++) {

    let content = (searchBox.value).toUpperCase();
    let presentContent = (songHeading[i].innerHTML).toUpperCase();
    // console.log(content);
    //  console.log(presentContent);

    if((presentContent).indexOf(content) > -1){
        // console.log(songHeading[i].parentElement.parentElement.parentElement.firstElementChild);
        songHeading[i].parentElement.parentElement.parentElement.firstElementChild.style.textAlign = "center";
        checkIndex = i;

        songHeading[i].parentElement.style.display = "";
        // console.log(checkIndex);
        

    }else {
       
       
        songHeading[i].parentElement.parentElement.parentElement.firstElementChild.style.display = "none";
        songHeading[checkIndex].parentElement.parentElement.parentElement.firstElementChild.style.display = "";
        



        songHeading[i].parentElement.style.display = "none";

    }
   


}

});













const songs = [

    {
        song_name : "Deva Deva",
        path : "songs/song1.mp3",
        song_artist : "Arijit Singh"
       
    },
    {
        song_name : "Tere Hawale",
        path : "songs/song2.mp3",
        song_artist : "Arijit Singh"

    },
    {
        song_name : "Aashiqu Tera Tera",
        path : "songs/song3.mp3",
        song_artist : "Arijit Singh"
       
    },
    {
        song_name : "Aashiqui Aa Gayi",
        path : "songs/song4.mp3",
        song_artist : "Arijit Singh"

    },
    {
        song_name : "Akhiyaan Milavanga",
        path : "songs/song5.mp3",
        song_artist : "Arijit Singh"
       
    },
    {
        song_name : "Lambiyaan Si Judaayiaan",
        path : "songs/song6.mp3",
        song_artist : "Arijit Singh"

    },
    {
        song_name : "Desh Mere",
        path : "songs/song7.mp3",
        song_artist : "Arijit Singh"
       
    },
    {
        song_name :  "Ishq Mubarak",
        path : "songs/song8.mp3",
        song_artist : "Arijit Singh"

    },
    {
        song_name :  "Meet",
        path : "songs/song9.mp3",
        song_artist : "Arijit Singh"
       
    },
    {
        song_name :  "Bekhayali",
        path : "songs/song10.mp3",
        song_artist : "Arijit Singh"

    },
    {
         song_name : "Rait Jara Si",
        path : "songs/song11.mp3",
        song_artist : "Arijit Singh"
       
    },
    {
         song_name : "Hum Mar Jaayenge",
        path : "songs/song12.mp3",
        song_artist : "Arijit Singh"

    },
    {
         song_name : "Dholna",
        path : "songs/song13.mp3",
        song_artist : "Arijit Singh"
       
    },
    {
         song_name : "Bandeya",
        path : "songs/song14.mp3",
        song_artist : "Arijit Singh"

    },
    {
         song_name : "Channa Mereya",
        path : "songs/song15.mp3",
        song_artist : "Arijit Singh"
       
    }

];

let isPlay = false;

prevBtn.addEventListener('click' , () => {
    if(indexNo >= 0) {
  indexNo -= 1;
  songLoad(indexNo);
    }
    else {
        indexNo = 14;
    }
});

playBtn.addEventListener('click' , () => {
  
if(isPlay === false) {
    songLoad(indexNo);
    playBtn.src = "images/pause_button.png";
    isPlay = true;
}
else {
  
    song.pause();
    playBtn.src = "images/play_button.png";
    isPlay = false; 
header.classList.remove('shadow');



}

});








function songLoad(indexNo) {
song.src = songs[indexNo].path;
songName.innerHTML = songs[indexNo].song_name;
songArtist.innerHTML = songs[indexNo].song_artist;

song.play();
playBtn.src = "images/pause_button.png";
isPlay = true;
header.classList.add('shadow');


}





nextBtn.addEventListener('click' , () => {

if(indexNo < 15) {
indexNo += 1;
songLoad(indexNo);

}
else {
    indexNo = 0;
   
}
});

song.addEventListener('timeupdate' , ()=> {
range.value = (song.currentTime / song.duration) * 100;

if(song.currentTime >= song.duration) {
    indexNo += 1;
    songLoad(indexNo);
}

});

range.addEventListener('change' , () => {
song.currentTime = (range.value * song.duration) / 100;

});










