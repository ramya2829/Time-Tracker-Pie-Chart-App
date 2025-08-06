import{Pie} from "react-chartjs-2"
import {Chart as ChartJS,ArcElement,Tooltip,Legend}from "chart.js"
ChartJS.register(ArcElement,Tooltip,Legend);
interface Props{
    data:{activity:string,hours:Number}[]
}


const TimeChart = ({data}:Props) => {

    const chartData={
        labels:data.map((d) => d.activity),
        datasets:[
        {
            label:"Hours",
            data:data.map((d) => d.hours),
            backgroundColor:['#d1ef0cff','#1f1553ff','#fb0831ff','#9b06a8ff','#FF5733'],
            borderWidth:3,

        }
        ]  
      }
  return <Pie data={chartData}/>
}

export default TimeChart
