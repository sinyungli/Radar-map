import * as React from "react";
//import axios from "axios"; //this is API
import Radaroption from "./Option"
import axios from "axios";

import ReactEcharts from 'echarts-for-react';



class Radarmap extends React.Component {

  state = {
              data: [],
              locations: ["Avenue1","Avenue2"],
              challenges: ["quantum music"],
              IBLorangetrans:"rgba(249,129,27,0.5)"
  }
  
  axiosFunc = async() => {    //this function update the data
    const axios = require('axios');
    const access_token = "C6nnn3gxFoNkVArNGDKVs5CvHF4Nz3Qg9RMuQZRnHwdG"
    const form_id = "hq372Yk9"
    try {
  
    var response = await axios({
      method: 'get',
      url: 'https://api.typeform.com/forms/'+form_id+'/responses',
      headers: {
        'Authorization': 'Bearer '+ access_token,
      }
    })    
    this.setState({
      data:response.data.items
    })
   }catch(e){
      console.error(e.data)
    }
  }

  componentDidMount() {
    this.axiosFunc()
  }
  
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
        let data = this.state.data
        var show1
        var show2 = ''
        if(data){
          for(let challenges of data){
            let value = []
            var place
            if(challenges.answers[0].choice.label == "Hong Kong"){
            for(let i = 4;i<10;i++){
              value.push(Number(challenges.answers[i].choice.label))
            }
            place = challenges.answers[0].choice.label+" "+challenges.answers[1].choice.label+" "+challenges.answers[2].choice.label          
            console.log("value",value)
            
            show1 = <ReactEcharts option={new Radaroption(value, place)}/>
        }else{
          for(let i =4;i<10;i++){
            value.push(challenges.answers[i].choice.label)
          }
          place = challenges.answers[0].choice.label+" "+challenges.answers[1].choice.label+" "+challenges.answers[2].choice.label          
        show2 = <ReactEcharts option={new Radaroption(value, place)}/>
      }
      }
      }else{
          show1 = "Loading"
        };
        return (
            <div>
                {show1}
                {show2}
            <div>
        </div>
            </div>
          );
      }
  }
  
  export default Radarmap;
