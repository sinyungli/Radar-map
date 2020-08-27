const axios = require('axios');

const apiurl = "https://api.typeform.com/me"
const access_token = "C6nnn3gxFoNkVArNGDKVs5CvHF4Nz3Qg9RMuQZRnHwdG"
const requestOptions = {
  url: `${apiurl}`,
  method: 'GET',
  responseType: 'json',
  timeout: 10000,
  headers: {
    'Authorization': `${access_token}`,
  },
};

axios({
  method: 'get',
  url: 'https://api.typeform.com/me',
  headers:{
    'Authorization':`Bearer${C6nnn3gxFoNkVArNGDKVs5CvHF4Nz3Qg9RMuQZRnHwdG}`
  }
})
  .then(function (response) {
    console.log(response.data)
  }).catch((error)=>{
    console.log(error.response)
  });







/*var IBLorangetrans = "rgba(249,129,27,0.5)"

function Radarradar(x){
  var centerx  = (10*x).toString()+"%";
  this.radar = {
      center:[centerx,"50%"],
      radius: "50%",
      name: {
        textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
        }
      },
      axisLine: {   
        lineStyle: {
            color: 'rgba(100, 100, 100, 0.15)'
        }
    },
    splitLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)'
        }
    },
     
      indicator: [
          { name: 'Dimension1', max: 3},
          { name: 'Dimension2', max: 3},
          { name: 'Dimension3', max: 3},
          { name: 'Dimension4', max: 3},
          { name: 'Dimension5', max: 3},
      ]
    }
    
}

function Radarseries(x){
  this.type='radar';
  this.radarIndex= x;
  // areaStyle: {normal: {}},
  this.data=[
      {
          value: [3,3,3,3,3],
          name: '',
          areaStyle: {
            color: IBLorangetrans
        },
        lineStyle: {
          color: "rgba(242, 226, 226, 1)"
        },
        itemStyle: {
          color: IBLorangetrans,
          opacity: 0
        }
      },
  ]
}

function Radaroption(x){
  this.title={
    text:""
  };
  this.tooltip={show:true};
  this.legend={          //legend is the filter
    data: [],
  };
  this.radar = []
  this.series = []
  for(let i = 0;i < x;i++){
    this.legend.data.push("Team"+i.toString())
    this.radar.push(new Radarradar(i))
    this.series.push(new Radarseries(i))
  }
  
}

var x = new Radaroption(3)

console.log(x.radar)*/