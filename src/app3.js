import './app3.css';
import $ from 'jquery';

const $squere = $('#app3 .square');
$squere.on('click', () => {
    $squere.toggleClass('active')//toggleClass如果没有就加上没有就删掉
})