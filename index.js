function getFirstSelector(selector){
  let item = document.querySelector(selector);
  return item;
}
function nestedTarget(){
  let item = document.querySelector('#nested .target');
  return item;
}
function deepestChild(){
  let child = document.querySelector('#grand-node')
  while (child.querySelector('div')){
    child = child.querySelector('div')
  }
  return child;
}
