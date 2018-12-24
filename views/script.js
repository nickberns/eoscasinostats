/**************************************************/
// MARKETSHARE
/**************************************************/
// new Chart(document.getElementById("marketshare"), {
//     type: 'doughnut',
//     data: {
//       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//       datasets: [
//         {
//           label: "Population (millions)",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [2478,5267,734,784,433]
//         }
//       ]
//     },
//     options: {
//       rotation: 1 * Math.PI,
//         circumference: 1 * Math.PI,
//       title: {
//         display: true,
//         text: 'Marketshare in Users'
//       }
//     }
// });

/**************************************************/
// DATA FEED
/**************************************************/
//DATE LABEL
datelabel=['12/01/2018', '12/02/2018'];

datelabeldivs=['11/17/2018','11/18/2018','11/19/2018','11/20/2018','11/21/2018','11/22/2018','11/23/2018', '11/24/2018', '11/25/2018', '11/26/2018', '11/27/2018', '11/28/2018', '11/29/2018', '11/30/2018', '12/01/2018'];

//DIVIDENDS
pokerdivs=
[4.94,0,7.92,19.22,8.96,1.75,11.23,11.42,2.65,17.57,2.84,2.12,3.97,8.13,4.29];
//USERS
pokerusers=[263,251];
diceusers=[2551,2462];
betusers=[1112,1187];
// endlessusers=[644,656,634,621,696,686,623,656,690,711,701,693,586,665,612,643,650,676,686];
// farmusers=[1711,1699,1563,1504,1689,1701,1784,1643,1690,1685,1645,1687,1700,1523,1678,1525,1634,1701,1723];
//volume
pokervolume=[160496,87445];
dicevolume=[3332279,2425880];
betvolume=[306963,299734];
// endlessvolume=[644,656,634,621,696,686,623,656,690,711,701,693,586,665,612,643,650,676,686];
// farmvolume=[197193];
//TX
pokertx=[116884,26498];
dicetx=[732029,788810];
bettx=[525598,457989];
// endlesstx=[644,656,634,621,696,686,623,656,690,711,701,693,586,665,612,643,650,676,686];
// farmtx=[1711,1699,1563,1504,1689,1701,1784,1643,1690,1685,1645,1687,1700,1523,1678,1525,1634,1701,1723];

/**************************************************/
// USERS
/**************************************************/
new Chart(document.getElementById("users"), {
  type: 'line',
  data: {
    labels: datelabel,
    datasets: [{
        data: pokerusers,
        label: "EOS POKER",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: diceusers,
        label: "BetDICE",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: betusers,
        label: "EOS BET",
        borderColor: "#3cba9f",
        fill: false
      }
     //  ,
     //  {
     //   data: farmusers,
     //   label: "FARMEOS",
     //   borderColor: "#a10719",
     //   fill: false
     // },
     // {
     //  data: endlessusers,
     //  label: "ENDLESS DICE",
     //  borderColor: "#115511",
     //  fill: false
     // }
    ]
  },
  options: {
    legend: {
      position: 'bottom',
    },
    scales: {
            xAxes: [{
                type: 'time',
                distribution: 'linear',
                gridLines: {
                    display: true ,
                    color: "#333",
                    LineWidth: 0.1
                          },
                time: {
                    displayFormats: {
                        day: 'MMM D'
                    }
                }
            }]
,yAxes: [{
  gridLines: {
      display: true ,
      color: "#333",
      LineWidth: 0.1
            },
  ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value, index, values) {
                      return value;
                  }
              }

}]

        },
    title: {
      display: true,
      fontSize: 18,
      text: 'Daily Users'
    }
  }
});
/**************************************************/
// VOLUME
/**************************************************/
new Chart(document.getElementById("volume"), {
  type: 'line',
  data: {
    labels: datelabel,
    datasets: [{
        data: pokervolume,
        label: "EOS POKER",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: dicevolume,
        label: "BetDICE",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: betvolume,
        label: "EOS BET",
        borderColor: "#3cba9f",
        fill: false
      }
     //  ,
     //  {
     //   data: farmvolume,
     //   label: "FARMEOS",
     //   borderColor: "#a10719",
     //   fill: false
     // },
     // {
     //  data: endlessvolume,
     //  label: "ENDLESS DICE",
     //  borderColor: "#115511",
     //  fill: false
     // }
    ]
  },
  options: {
    legend: {
      position: 'bottom',
    },
    scales: {
            xAxes: [{
                type: 'time',
                distribution: 'linear',
                gridLines: {
                    display: true ,
                    color: "#333",
                    LineWidth: 0.1
                          },
                time: {
                    displayFormats: {
                        day: 'MMM D'
                    }
                }
            }]
,yAxes: [{
  gridLines: {
      display: true ,
      color: "#333",
      LineWidth: 0.1
            },
  ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value, index, values) {
                      return value + ' EOS' ;
                  }
              }

}]
        },
    title: {
      display: true,
      text: 'Daily Volume (EOS)',
      fontSize: 18
    }
  }
});
/**************************************************/
// TRANSACTIONS
/**************************************************/
new Chart(document.getElementById("TX"), {
  type: 'line',
  data: {
    labels: datelabel,
    datasets: [{
        data: pokertx,
        label: "EOS POKER",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: dicetx,
        label: "BetDICE",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: bettx,
        label: "EOS BET",
        borderColor: "#3cba9f",
        fill: false
      }
    ]
  },
  options: {
    legend: {
      position: 'bottom',
    },
    scales: {
            xAxes: [{
                type: 'time',
                distribution: 'linear',
                gridLines: {
                    display: true ,
                    color: "#333",
                    LineWidth: 0.1
                          },
                time: {
                    displayFormats: {
                        day: 'MMM D'
                    }
                }
            }]
,yAxes: [{
  gridLines: {
      display: true ,
      color: "#333",
      LineWidth: 0.1
            },
  ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value, index, values) {
                      return value;
                  }
              }

}]
        },
    title: {
      display: true,
      text: 'Daily Transactions (N)',
      fontSize: 18
    }
  }
});
/**************************************************/
// DIVIDENDS CHART
/**************************************************/
new Chart(document.getElementById("dividends"), {
  type: 'line',
  data: {
    labels: datelabeldivs,
    datasets: [{
        data: pokerdivs,
        label: "EOS POKER",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    legend: {
      position: 'bottom',
    },
    scales: {
            xAxes: [{
                type: 'time',
                distribution: 'linear',
                gridLines: {
                    display: true ,
                    color: "#333",
                    LineWidth: 0.1
                          },
                time: {
                    displayFormats: {
                        day: 'MMM D'
                    }
                }
            }]
,yAxes: [{
  gridLines: {
      display: true ,
      color: "#333",
      LineWidth: 0.1
            },
  ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value, index, values) {
                      return value + ' EOS';
                  }
              }

}]
        },
    title: {
      display: true,
      text: 'Daily Dividends (EOS/10K POKER)',
      fontSize: 18
    }
  }
});
