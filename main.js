var chance, itemToRender;


function showPizzaPuppy() {
  chance = Math.random();
  if(chance>0.5){
    // show puppy :
    itemToRender = "puppies";

    renderItem(itemToRender);
  } else{
    // show pizza : 
    itemToRender = "pizza";

    renderItem(itemToRender);
  }
}


function renderItem(str){
  fetch(`https://source.unsplash.com/1600x900/?${str}`).then((response)=> {
    document.getElementById('imageContainer').style.visibility = "visible";
    document.getElementById('imageToShow').src = `${response.url}`;
  })
}
