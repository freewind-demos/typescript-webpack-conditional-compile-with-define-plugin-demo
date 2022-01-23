import $ from 'jquery'
import './index.css';

declare global {
  const SHOW_SECRET: boolean
}

$('#main').text(
  SHOW_SECRET
    ? 'yes, SHOW_SECRET! (111)'
    : 'no SHOW_SECRET! (222)'
);

