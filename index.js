function getFirstSelector(selector){
  let item = document.querySelector(selector);
  return item;
}
function nestedTarget(){
  let item = document.querySelector('#nested .target');
  return item;
}
function increaseRankBy(n){
  let lists0 = document.querySelectorAll('.ranked-list');
  //let num = parseInt(n, 10);
  for (let i = 0; i < lists0.length; i++){
    lists0[i].innerHTML += num;
  }
}
