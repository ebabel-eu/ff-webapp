import React, { Component } from 'react';

export default class Dice extends Component {
  render() {
    return (
      <g id="dice" transform="translate(3.000000, 0.000000)">
        <path
          d="M21.6480952,0.00595238095 L-5.29100529e-05,12.5046296 L-5.29100529e-05,37.5017196 L21.6480952,49.9998677 L43.2962434,37.5017196 L43.2962434,12.5046296 L21.6480952,0.00595238095 Z M21.6480952,3.67896825 L33.188836,16.9951058 L10.1073545,16.9951058 L21.6480952,3.67896825 Z M25.9756085,6.1776455 L39.5020635,13.9874339 L34.6361905,16.8136243 L25.9756085,6.1776455 Z M3.79386243,13.9874339 L17.320582,6.1776455 L8.66,16.8136243 L3.79386243,13.9874339 Z M35.254709,17.8847884 L40.1150265,15.0617725 L40.1150265,30.6617725 L35.254709,17.8847884 Z M3.18116402,15.0617725 L8.04121693,17.8847884 L3.18116402,30.6617725 L3.18116402,15.0617725 Z M9.88989418,18.2324074 L33.4060317,18.2324074 L21.6480952,38.1265873 L9.88989418,18.2324074 Z M34.3687302,19.0345238 L40.1150265,35.6649471 L22.8319577,38.5548942 L34.3687302,19.0345238 Z M3.18116402,35.6649471 L8.92746032,19.0347884 L20.4642328,38.5548942 L3.18116402,35.6649471 Z M22.2666138,39.8816138 L36.1094709,37.977381 L22.2666138,45.9694444 L22.2666138,39.8816138 Z M7.18671958,37.9776455 L21.0295767,39.8816138 L21.0295767,45.9694444 L7.18671958,37.9776455 Z"
        ></path>
        <g
          id="number"
          transform="translate(15.608466, 19.047619)"
        >
          <path
            d="M2.09126984,7.79428571 L2.09126984,7.7326455 L2.74338624,7.2284127 C3.01375661,6.90857143 3.29047619,6.55804233 3.57354497,6.1768254 C3.85661376,5.79534392 4.11455026,5.39984127 4.3484127,4.98978836 C4.58227513,4.57973545 4.77486772,4.16148148 4.92671958,3.73502646 C5.07830688,3.30883598 5.1542328,2.88634921 5.1542328,2.46809524 C5.1542328,2.09111111 5.09259259,1.76068783 4.96957672,1.4778836 C4.84656085,1.19507937 4.67830688,0.959365079 4.46534392,0.770740741 C4.2521164,0.582116402 3.9978836,0.438465608 3.7026455,0.34005291 C3.40767196,0.241640212 3.08333333,0.192698413 2.73095238,0.192698413 C2.18148148,0.192698413 1.7037037,0.272328042 1.2978836,0.432380952 C0.892063492,0.592169312 0.529365079,0.803544974 0.20952381,1.06571429 L0.848941799,2.19746032 C1.03756614,2.0252381 1.26931217,1.88396825 1.54417989,1.77312169 C1.81878307,1.66253968 2.08703704,1.60698413 2.34973545,1.60698413 C2.76798942,1.60698413 3.07328042,1.71571429 3.26587302,1.9331746 C3.45873016,2.15037037 3.55502646,2.42708995 3.55502646,2.76333333 C3.55502646,3.04216931 3.49973545,3.33740741 3.38888889,3.64904762 C3.27830688,3.96068783 3.12857143,4.28238095 2.93994709,4.61439153 C2.75132275,4.94666667 2.53809524,5.2768254 2.3005291,5.60486772 C2.06269841,5.93291005 1.81878307,6.25063492 1.56851852,6.55804233 C1.31825397,6.86544974 1.07037037,7.15671958 0.824338624,7.43132275 C0.578306878,7.70619048 0.356878307,7.94613757 0.16005291,8.15089947 L0.16005291,8.97497354 L5.33862434,8.97497354 L5.33862434,7.62206349 L2.97698413,7.62206349 L2.09126984,7.79428571 Z"
          ></path>
          <path
            d="M10.3509524,7.04391534 C10.125291,7.54417989 9.77079365,7.79417989 9.28719577,7.79417989 C8.78666667,7.79417989 8.42767196,7.52169312 8.21074074,6.97619048 C7.99328042,6.43095238 7.88481481,5.65820106 7.88481481,4.65767196 C7.88481481,3.59973545 7.99328042,2.81666667 8.21074074,2.30820106 C8.42767196,1.8 8.78269841,1.54550265 9.2747619,1.54550265 C9.79142857,1.54550265 10.1562434,1.81613757 10.3694709,2.35740741 C10.5826984,2.89867725 10.6890476,3.66534392 10.6890476,4.65767196 C10.6890476,5.7484127 10.5766138,6.54391534 10.3509524,7.04391534 M11.5625926,1.28121693 C11.0787302,0.555555556 10.3202646,0.192592593 9.28719577,0.192592593 C8.31920635,0.192592593 7.57740741,0.55952381 7.06047619,1.29338624 C6.54380952,2.02751323 6.28560847,3.1489418 6.28560847,4.65767196 C6.28560847,6.1010582 6.52740741,7.20978836 7.01153439,7.98492063 C7.49513228,8.75978836 8.24962963,9.1473545 9.2747619,9.1473545 C10.2422222,9.1473545 10.9864021,8.77830688 11.5073016,8.04021164 C12.0279365,7.30238095 12.288254,6.17486772 12.288254,4.65767196 C12.288254,3.13227513 12.0461905,2.00687831 11.5625926,1.28121693"
          ></path>
        </g>
      </g>
    );
  }
}