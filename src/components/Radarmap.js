import * as React from "react";
//import axios from "axios"; //this is API
import Radaroption from "./Option"


import ReactEcharts from 'echarts-for-react';



class Radarmap extends React.Component {

  state = {
              data: [{    //this is sample data wrote by oneself
                name:"Avenue1",
                teams:[{
                  team_num: 1,
                  value: [{
                    challenge: "quantum music",
                    criteria: "criteria",
                    score: 2,
                    fellow: "Tony",
                    totalscore: 10,
                  },{
                    challenge: "health",
                    criteria: "criteria",
                    score: 1,
                    fellow: "Tako",
                    totalscore: 10,
                  },
                  {
                    challenge: "quantum music",
                    criteria: "criteria",
                    score: 1,
                    fellow: "Tony",
                    totalscore: 10,
                  },
                  {
                    challenge: "quantum music",
                    criteria: "criteria",
                    score: 1,
                    fellow: "Tony",
                    totalscore: 10,
                  },
                  {
                    challenge: "quantum music",
                    criteria: "criteria",
                    score: 1,
                    fellow: "Tony",
                    totalscore: 10,
                  }]
                }],
              }],
              locations: ["Avenue1","Avenue2"],
              challenges: ["quantum music"],
              IBLorangetrans:"rgba(249,129,27,0.5)"
  }
  
  /*axiosFunc = () => {    //this function update the data
    axios.get("/api").then(res => {
      const data = res.data.data.data;
      const locations = res.data.data.locations;
      const challenges = res.data.data.challenges;
      console.log(data);
      this.setState({
        data,
        locations,
        challenges
      });
    });
  };*/
  
  /*Showradar=(data,radaroption)=>{
    let radarop = radaroption
    let d = data;
    let i = 0 //for the first loop of avenues //for the second loop of teams
    let k = 0 //for the third loop of challenges
    let teamnums = d.teams.length
    let j
    radarop.title= {
      text: d["name"]
  }
    for(j = 0;j < teamnums; j += 1){
      radarop.legend.data.push("Team"+(j+1).toString());
      radarop.series[0].data[0].name = "Team"+(j+1).toString()
      for(k = 0; k < d.teams[i].value.length;k += 1){
        radarop.series[j].data[0].value.push(d.teams[j].value[k].score)
      //console.log(teamnums,j,radarop.series[0].data[j].name,radarop.series[0].data[j].value)
      };
    }
    console.log(radarop.series[0].data[0])
    return(radarop)
  }*/
    
          
      render(){
        /*let radarop= Radaroption
        let data = this.state.data
        if(data.length > 0){
          var show = <ReactEcharts option={this.Showradar(data[0],radarop,1)}/>
        }else{
          var show = "Loading"
        };*/
        return (
            <div>
                <ReactEcharts option={new Radaroption(5, 0)}/>
            <div>
        </div>
            </div>
          );
      }
  }
  
  export default Radarmap;
