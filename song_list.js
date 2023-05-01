//song list
let All_song = [
   {
     name: "Niwezeshe",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Mélanie Kitwana feat. Prince Mulidwa"
   },
   {
     name: "Niache Ni Wite",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Mélanie Kitwana"
   },
   {
     name: "Vuta Subira",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Mélanie Kitwana"
   },
   {
     name: "Tawala",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Mélanie Kitwana"
   },
   {
     name: "Uwe Na Amani",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Mélanie Kitwana"
   },
   {
    name: "Safari",
    path: "music/6.mp3",
    img: "images/1.jpg",
    singer: "Mélanie Kitwana"
   },
    {
    name: "Ingiliya kati",
    path: "music/7.mp3",
    img: "images/1.jpg",
    singer: "Mélanie Kitwana"
   },
    {
    name: "Atafany njia",
    path: "music/8.mp3",
    img: "images/1.jpg",
    singer: "Mélanie Kitwana"
   },
    {
    name: "Ebeneza",
    path: "music/9.mp3",
    img: "images/1.jpg",
    singer: "Mélanie Kitwana"
   },
    {
    name: "Jipe raha",
    path: "music/11.mp3",
    img: "images/1.jpg",
    singer: "Mélanie Kitwana"
   },
    {
    name: "Kuna Ushindi",
    path: "music/12.mp3",
    img: "images/1.jpg",
    singer: "Mélanie Kitwana"
   },
    {
    name: "Kwa Injili tuna fahulu",
    path: "music/13.mp3",
    img: "images/1.jpg",
    singer: "Mélanie Kitwana"
   },
    {
    name: "Karibu nawe",
    path: "music/14.mp3",
    img: "images/1.jpg",
    singer: "Mélanie Kitwana"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-play" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};

/* search bar function */
//const handleSearch = () => {
//    songValue = searchSongs.value
//    let songsOf = []
//    for (let i = 0; i < All_song.length; i++) {
//        if (All_song[i].name === songValue) {
//            console.log(songValue)
//            songsOf += ` <div class="song">
//                  <div class="img">
//                  <img src="${All_song[i].img}"/>
//                  </div>
//                  <div class="more">
//                  <audio src="${All_song[i].path}" id="music"></audio>
//                  <div class="song_info">
//                     <p id="title">${All_song[i].name}</p>
//                     <p>${All_song[i].singer}</p>
//                  </div>
//                  <button id="play_btn"><i class="fa fa-play" aria-hidden="true"></i></button>
//                  </div>
//                </div>`;
//            
//        }
//    }
//    tracks.innerHTML = songsOf
//}
//searchBtn.addEventListener("click", handleSearch)