
/*    Images from Unsplash

        Mark Basarab (bear image): url(https://unsplash.com/photos/y421kXlUOQk),
        Manja Vitolic (cat image): url(https://unsplash.com/photos/gKXKBY-C-Dk),
        Sam Carter (sheep image): url(https://unsplash.com/photos/GHOiyov2TSQ),
        Philipp Pilz (wolf image): url(https://unsplash.com/photos/QZ2EQuPpQJs),
        Sam Barber (wilderness image): url(https://unsplash.com/photos/3L4GUciqfhw)
*/

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let information = document.getElementById("info");
let images = document.getElementById("img");
let opinions = document.getElementById("opinion");


/* Constructor with ES6 syntax */
class Testimonials {
    constructor(img, opinion, info) {
        this.img = img;
        this.opinion = opinion;
        this.info = info;
    }
}



let arr = [];

const wolf = new Testimonials('wolf', 'Coming to Animal Kingdom really changed my life! Getting fresh meat has never been easier!', 'Wolves are carnivourous animals and exceptional hunters! One of their favourite items on menu are sheep.');
arr.push(wolf);

const bear = new Testimonials('bear', 'I am more into healthy food! Like fishes! And Animal Kingdom offered me a lot of fishes. And occassional sheep!', 'Bear is largest animal that moved into Animal Kingdom but don\'t let his size fool you! He is really fast! And he likes fishes.');
arr.push(bear);

const cat = new Testimonials('cat', 'Yeah, I am just passing my time watching them through window of the house, of the human whose owner I am. You have to play smart in this world!', 'Cat is only animal capable of taming despicable humans. And because of it\s skill, cats are often targets of envy of other animals in Animal Kingdom!');
arr.push(cat);

const sheep = new Testimonials('sheep', 'LIES! They lied to us!!! This Animal Kingdom is making life easier for carnivours! Not herbivores! HELP US!!!', 'In a world of Animal Kingdom, sheep are delicacy that most carnivourous animals would be delighted to take part in! Of course, sheep are not enthusiastic about it! At all!!');
arr.push(sheep);


let count = 0;
previous.disabled = true;
let displayedImages= `img/${arr[count].img}.jpg`;
images.src = `${displayedImages}`;
information.innerHTML = arr[count].info;
opinion.innerHTML = `"${arr[count].opinion}"`;


next.onclick = () => {
    count++;
    let displayedImages= `img/${arr[count].img}.jpg`;
    images.src = `${displayedImages}`;
    information.innerHTML = arr[count].info;
    opinion.innerHTML = `"${arr[count].opinion}"`;
    previous.disabled = false;
    console.log(count);
    if (count >= 3) {
      next.disabled = true;
    }
  };
  
  previous.onclick = () => {
    count--;
    next.disabled = false;
    let displayedImages= `img/${arr[count].img}.jpg`;
    images.src = `${displayedImages}`;
    information.innerHTML = arr[count].info;
    opinion.innerHTML = `"${arr[count].opinion}"`;
    console.log(count);
    if (count <= 0) {
      previous.disabled = true;
    }
  };








