// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let num = 0;

function update() {
  $('#main').html(`you've been on this page for ${num} seconds...`);
  num += 1;
}

setInterval(update, 1000);
