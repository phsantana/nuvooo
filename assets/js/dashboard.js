( function ( $ ) {
  "use strict";

//AJAX
Array.from(document.querySelectorAll("#main-menu a"))
.forEach(anchor => {
  anchor.addEventListener('click', e => {
    var main = document.querySelector('main');
    e.preventDefault();

    if(!e.currentTarget.href.match(/#/)){
      while(main.childElementCount){
        main.removeChild(document.querySelector('main').firstElementChild);
      }

      var xhttp = new XMLHttpRequest();
      var parser = new DOMParser();

      xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

          let doc = parser.parseFromString(this.responseText,'text/html');

          let kids = Array.from(doc.querySelector("#right-panel").children)
                    .filter(element => !element.matches('header'));

          kids.forEach(k =>
            main.appendChild(k)
          );
        }
      };

      xhttp.open('GET',e.currentTarget.href,true);
      xhttp.send();
    }
  });
});

//MENU
document.querySelector('.btn.navbar-toggler').addEventListener('click', e =>
  Array.from(document.querySelectorAll('aside,.btn.navbar-toggler'))
  .forEach(element =>
    element.classList.toggle('is-active')
    )
  );


// const brandPrimary = '#20a8d8'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'

function convertHex (hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var elements = 27
var data1 = []
var data2 = []
var data3 = []

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200))
  data2.push(random(80, 100))
  data3.push(65)
}


    //Traffic Chart
    var ctx = document.getElementById( "trafficChart" );
    //ctx.height = 200;
    var myChart = new Chart( ctx, {
      type: 'line',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
        {
          label: 'My First dataset',
          backgroundColor: convertHex(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: data1
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: brandSuccess,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: data2
        },
        {
          label: 'My Third dataset',
          backgroundColor: 'transparent',
          borderColor: brandDanger,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 1,
          borderDash: [8, 5],
          data: data3
        }
        ]
      },
      options: {
            //   maintainAspectRatio: true,
            //   legend: {
            //     display: false
            // },
            // scales: {
            //     xAxes: [{
            //       display: false,
            //       categoryPercentage: 1,
            //       barPercentage: 0.5
            //     }],
            //     yAxes: [ {
            //         display: false
            //     } ]
            // }


            maintainAspectRatio: true,
            legend: {
              display: false
            },
            responsive: true,
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: false
                }
              }],
              yAxes: [ {
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(250 / 5),
                  max: 250
                },
                gridLines: {
                  display: true
                }
              } ]
            },
            elements: {
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              }
            }


          }
        } );


  } )( jQuery );