class video{
    constructor (title, uploader, time){

     this.title = title;
     this.uploader = uploader ;
     this.time =  time;

    }
    watch(){
        console.log(`${this.uploader} parameter watched all ${this.time} parameter of ${this.title} parameter!`)
    }
}
const video1 = new video("Quran", "Adnane", 500);
video1.watch();
const video2 = new video("Quran", "Qitami", 700);
video2.watch();
let store = [];
const videosData = [
    { title: "Quran", uploader: "Adnane", time: 500 },
    { title: "Quran", uploader: "Qitami", time: 700 },
    { title: "Tafsir", uploader: "Ahmed", time: 600 },
    { title: "Fiqh", uploader: "Omar", time: 450 },
    { title: "Sira", uploader: "Youssef", time: 800 }
];

for (const vid of videosData){
    const item = new video ( vid.title, vid.uploader, vid.time);
    store.push(item);
    item.watch();
   
}
 console.log(store);
