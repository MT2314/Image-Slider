// Dom Selection

let imgCont = document.getElementById("imgContainer");
let btnBack = document.getElementById("back");
let btnForward = document.getElementById("forward");
let info = document.getElementById("name");

// Array

let slideShow = [
    {
        "img":"cars/corvette.jpg",
        "name": "Corvette"
    },
    {
        "img":"cars/Bugatti Chiron 1500HP.jpg",
        "name": "Bugatti Chiron 1500HP"
    },
    {
        "img":"cars/McLaren SpeedTail.jpg",
        "name": "McLaren SpeedTail"
    },
    {
        "img":"cars/2020 Ford Shelby GT500.jpg",
        "name": "2020 Ford Shelby GT500"
    },

];

//Object Constructor

function Picture(img, name){
    this.img = img;
    this.name = name;
};


// View

let pic = document.createElement("img");
let i = 0;
imgCont.appendChild(pic);
pic.className += "pic";

//Change Image

function changeImg(){
    pic.src = (slideShow[i].img);
        };
        
   
changeImg();

//Back Button
if (btnForward.addEventListener("click",
    function changI(){
            if (i === slideShow.length-1){
            i = 0;
            changeImg();
            }
            else{
            i = i + 1;
            }
        changeImg();
        info.innerHTML = slideShow[i].name;
        console.log(i);
}));

//Forward Button
if (btnBack.addEventListener("click",
    function changI(){

            if (i === 0){
            i = slideShow.length - 1;
            changeImg();
             }
             else{
                i = i - 1;
             }

        
        changeImg();
        info.innerHTML = slideShow[i].name;
        console.log(i);
}));
       


//Display Name


info.innerHTML = slideShow[i].name;




