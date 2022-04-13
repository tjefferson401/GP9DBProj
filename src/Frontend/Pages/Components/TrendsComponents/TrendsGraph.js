import { Box } from '@material-ui/core';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data1 = {"metaData":[{"name":"NAME"},{"name":"TOTAL_BUDGET"}],
"rows":[
  {"NAME":1972,"TOTAL_BUDGET":9.200000000000001},
  {"NAME":1973,"TOTAL_BUDGET":6.1000000000000005},
  {"NAME":1974,"TOTAL_BUDGET":46.6},{"NAME":1975,"TOTAL_BUDGET":77},
  {"NAME":1976,"TOTAL_BUDGET":112.60000000000001},{"NAME":1977,"TOTAL_BUDGET":59.800000000000004},{"NAME":1978,"TOTAL_BUDGET":37},{"NAME":1979,"TOTAL_BUDGET":95.4},{"NAME":1980,"TOTAL_BUDGET":135.1},{"NAME":1981,"TOTAL_BUDGET":92.10000000000001},{"NAME":1982,"TOTAL_BUDGET":132.9},{"NAME":1983,"TOTAL_BUDGET":109},{"NAME":1984,"TOTAL_BUDGET":98.60000000000001},{"NAME":1985,"TOTAL_BUDGET":84.8},{"NAME":1986,"TOTAL_BUDGET":95},{"NAME":1987,"TOTAL_BUDGET":100.10000000000001},{"NAME":1988,"TOTAL_BUDGET":76.5},{"NAME":1989,"TOTAL_BUDGET":115.8},{"NAME":1990,"TOTAL_BUDGET":92.3},{"NAME":1991,"TOTAL_BUDGET":211.1},{"NAME":1992,"TOTAL_BUDGET":298.2},{"NAME":1993,"TOTAL_BUDGET":290.90000000000003},{"NAME":1994,"TOTAL_BUDGET":435.40000000000003},{"NAME":1995,"TOTAL_BUDGET":421.8},{"NAME":1996,"TOTAL_BUDGET":367.1},{"NAME":1997,"TOTAL_BUDGET":260},{"NAME":1998,"TOTAL_BUDGET":98.2},{"NAME":1999,"TOTAL_BUDGET":80.60000000000001},{"NAME":2000,"TOTAL_BUDGET":76.2},{"NAME":2001,"TOTAL_BUDGET":73.10000000000001},
{"NAME":2002,"TOTAL_BUDGET":82.60000000000001},{"NAME":2003,"TOTAL_BUDGET":91.5},
{"NAME":2004,"TOTAL_BUDGET":83.2},{"NAME":2005,"TOTAL_BUDGET":81},{"NAME":2006,"TOTAL_BUDGET":81.3},
{"NAME":2007,"TOTAL_BUDGET":81.3},{"NAME":2008,"TOTAL_BUDGET":81.3},{"NAME":2009,"TOTAL_BUDGET":81.3},{"NAME":2010,"TOTAL_BUDGET":81.3},{"NAME":2011,"TOTAL_BUDGET":70.2},{"NAME":2012,"TOTAL_BUDGET":65.6},{"NAME":2013,"TOTAL_BUDGET":63.2},{"NAME":2014,"TOTAL_BUDGET":57},
{"NAME":2015,"TOTAL_BUDGET":73.60000000000001},{"NAME":2016,"TOTAL_BUDGET":64.5},
{"NAME":2017,"TOTAL_BUDGET":59.7}]};


const data = [
  {
    name: 'Page A',
    uv: 4000
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class TrendsGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  constructor(props) {
    super();
    this.dataKey1 = props.dataKey1
    this.dataKey2 = props.dataKey2
    this.xlabel = props.xlabel
    this.ylabel = props.ylabel
    this.data = props.data

  }

  render() {
    console.log(data1['rows'])
    return (
       
    //   <ResponsiveContainer aspect={8}>
         
      <Box sx={{ display:"flex" , 
      width:1000 ,height:500,  borderRadius: 10 , opacity:'.75',bgcolor:'white', marginLeft:'20px', 
      border:1, paddingRight:25}}>  
        <LineChart
          width={1000}
          height={500}
          data={this.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.dataKey1} label={{ value: this.xlabel, position: 'insideBottomRight', offset: 0 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={this.dataKey2} stroke="#8884d8" activeDot={{ r: 8 }} />
  
        </LineChart>

        </Box>
    //   </ResponsiveContainer>


    );
  }
}
