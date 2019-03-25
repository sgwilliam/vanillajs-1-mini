console.log('hello world');

let element = document.getElementById('counter');

let count = 0;

function increase() {
  count += 1;
  // console.log(count);
  element.innerText = count;
};

function decrease() {
  count -= 1;
  // console.log(count);
  element.innerText = count;
}

function reset() {
  count = 0;
  // console.log(count);
  element.innerHTML = '<mark>' + count + '</mark>';
}

function selectTheme(theme) {
  document.getElementsByTagName('body')[0].className = theme;
  document.getElementsByTagName('main')[0].className = theme;
  let buttons = document.getElementsByTagName('button');
  for(i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}