function getFirstSelector(selector){
  let item = document.querySelector(selector);
  return item;
}
function nestedTarget(){
  let item = document.getElementsByClassName('nested').getElementById('target');
  return item;
}
