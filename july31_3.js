

// get the picture element (an id)
var pic =  document.getElementById('myPhoto');
// make an image list with the pictures we want
var imageList = ['images/IMG_4422.jpg','images/IMG_3472.jpg','images/IMG_2701.jpg'];
// keep track of index
var index = 0;
// make a function
function slideshow (){
  //this is where the code goes
  //we have to change image attribute scratched
  pic.setAttribute('src',imageList[index]);

  if (index == imageList.length - 1){
    index = 0;
  }
  else{
    index++;

  }
}

setInterval(slideshow,2000);
  // go through each picture in the list
