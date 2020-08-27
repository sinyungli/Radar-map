var IBLorangetrans = "rgba(249,129,27,0.5)"

function Radartitle(x,firstteam){
  let distance = (6+20*x).toString() + "%";
  let teamname = "Team"+ (firstteam).toString();
  this.text= teamname;
  this.left= distance;
  this.top='20%';
  this.textAlign='center';
  console.log("title",firstteam)
}

function Radarradar(x){
  var centerx  = (20*x+10).toString()+"%";
  this.center=[centerx,"50%"];
  this.radius= "50%";
  this.name={
        
      };
    this.nameGap=0;
    this.axisLine={   
        lineStyle: {
            color: 'rgba(100, 100, 100, 0.15)'
        }
    };
    this.splitLine={
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)'
        }
    };
     
    this.indicator= [
          { name: 'Dimension1', max: 10},
          { name: 'Dimension2', max: 10},
          { name: 'Dimension3', max: 10},
          { name: 'Dimension4', max: 10},
          { name: 'Dimension5', max: 10},
      ]
    
}

function Radarseries(x){
  this.type='radar';
  this.radarIndex= x;
  this.label= {
        show: false
      }
  // areaStyle: {normal: {}},
  this.data=[
      {
          value: [3,3,3,3,3],//We may need to change this data
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

function Radaroption(x,firstteam){
  this.title=[];
  this.tooltip={
    show:false,
    trigger: 'item',
    formatter: "{b}:{c}[0] "
};
  this.legend={          //legend is the filter
    data: [],
  };
  this.grid = { // 控制图的大小，调整下面这些值就可以，
        x: 40,
        x2: 100,
        y2: 150// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
    };
  this.radar = []
  this.series = []
  for(let i = 0;i < x;i++){
    this.legend.data.push("Team"+i.toString())
    this.radar.push(new Radarradar(i))
    this.series.push(new Radarseries(i))
    this.title.push(new Radartitle(i,firstteam))
  }
}


export default Radaroption


// people in the same group will be divided into different centers, how to display the charts