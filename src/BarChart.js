import * as d3 from "d3";
import { useEffect, useRef } from "react";

const data = [
  { date: 2008, crimes: 1352 },
  { date: 2009, crimes: 1211 },
  { date: 2010, crimes: 1239 },
  { date: 2011, crimes: 1121 },
  { date: 2012, crimes: 927 },
  { date: 2013, crimes: 751 },
  { date: 2014, crimes: 901 },
  { date: 2015, crimes: 942 },
  { date: 2016, crimes: 1067 },
  { date: 2017, crimes: 1986 },
  { date: 2018, crimes: 1879 },
  { date: 2019, crimes: 2107 },
  { date: 2020, crimes: 2026 },
  { date: 2021, crimes: 2717 },
];
const width = 650;
const height = 520;

export default function BarChart(props) {
  //get the min and max with the extent function

  useEffect(() => {
    let start = new Date(2008, 1, 1);
    let end = new Date(2021, 1, 1);
    console.log(d3.timeYear.range(start, end, 1));

    //axis bottom is a bottom oriented axis, tickarguments give the arguments for the axis and tick format formats it as a date, and then the ticks gives the number
    const xAxis = d3
      .axisBottom()
      .tickArguments([d3.timeYear.range(start, end, 2)])
      .tickFormat(d3.format("d"))
      .scale(xScale)
      .ticks(14);
    console.log(xAxis);
    const yAxis = d3.axisLeft().scale(yScale);

    d3.select(xRef.current).call(xAxis);
    d3.select(yRef.current).call(yAxis);
  }, []);

  const extent = d3.extent(data, (d) => d.date);
  console.log(extent);
  //use scaleTime to map time values to range, which goes up to width
  const xAxisScale = d3.scaleTime().domain([2008, 2021]).range([0, width]);

  const xScale = d3
    .scaleTime()
    .domain(extent)
    .range([50, width - 20]);
  console.log(xScale(20210101));

  //get the min and mix with the extent function
  const [min, max] = d3.extent(data, (d) => d.crimes);
  console.log(min, max);
  //not time data - use scalelinear to map values to y range
  const yScale = d3
    .scaleLinear()
    .domain([0, max])
    .range([height - 20, 0]);
  console.log(yScale(2700));
  const heightScale = d3
    .scaleLinear()
    .domain([0, max])
    .range([0, height - 20]);

  const bars = data.map((d) => {
    return {
      x: xScale(d.date),
      y: yScale(d.crimes),
      height: heightScale(d.crimes),
    };
  });

  const xRef = useRef();
  const yRef = useRef();

  return (
    <svg width={width} height={height}>
      {bars.map((d, i) => {
        return (
          <rect
            x={d.x - 0}
            y={d.y}
            width="20"
            height={d.height}
            fill={i < 5 ? "rgb(175,175,175)" : "rgb(255,0,0)"}
          />
        );
      })}
      <g ref={xRef} transform={`translate(10, 500)`} />
      <g ref={yRef} transform={`translate(50,0)`} />
    </svg>
  );
}
