function selectAll(btn){
  var images = document.getElementsByClassName("image");
  if(btn.value == "UnSelect All"){
    for (var i = 0 ; i < images.length ; i++){
    images[i].classList.remove("image-selected");
    }
  }
  else{
    for (var i = 0 ; i < images.length ; i++){
      images[i].classList.add("image-selected");
    }
  }
  if(btn.value == "Unselect All"){
    btn.value = "Select All";
  }
  else{
    btn.value="UnSelect All";
  }
}

function imageSelect(btn){
  btn.classList.toggle("image-selected");
}

function imageMagnified(btn){
  btn.timerId = setTimeout(function(){
    btn.classList.add("image-magnified")
  }, 1000);
}

function imageReduce(btn){
  clearTimeout(btn.timerId);
  btn.classList.remove("image-magnified");
}

function slideShow(btn){
  var images = document.getElementsByClassName("image");
  var index = 0;
  images[index].classList.add("image-magnified");

  var intervalId = setInterval(function(){
    images[index].classList.remove("image-magnified");
    index++;
    if(index<images.length){
      images[index].classList.add("image-magnified");
    }
    else{
      clearInterval(intervalId);
    }
  }, 1000)
}
