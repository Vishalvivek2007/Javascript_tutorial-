const listElement =document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');


const xhr  = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

xhr.onload = function(){
  const listOfPost= JSON.parse(xhr.response);
  for(const post of listOfPost){
    const postEL = document.importNode(postTemplate.content,true);
    postEL.querySelector('h2').textContent = post.title.toUpperCase();
    postEL.querySelector('p').textContent = post.body;
    listElement.append(postEL);
  }
}


xhr.send();