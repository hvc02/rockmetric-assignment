import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Button } from "./Button";
export const Highchart = () => {
  const [options, setOptions] = useState({});
  const [chartType, setChartType] = useState("line");

  const handleClick = (e) => {
    setChartType(e.target.value);
  };

  const loadChart = async () => {
    let tokyo = [];
    let london = [];
    let date = [];
    const url =
      "https://rmimgblob.blob.core.windows.net/interviewdata/SampleRockData.json";
    try {
      const res = await fetch(url);
      const dataArr = await res.json();
      // console.log(dataArr);

      dataArr.map((item) => {
        if (item.city === "Tokyo") tokyo.push(item.value);
        else london.push(item.value);
        date.push(item.date);
      });
      //converting string arrays to num & getting month name from date string
      tokyo = tokyo.map(Number);
      london = london.map(Number);
      date = date.map((item) => {
        return new Date(item).toLocaleString("default", { month: "short" });
      });
      date.length = 12;

      setOptions({
        chart: {
          type: chartType,
        },
        tooltip: {
          backgroundColor: "#fff",
        },
        legend: {
          enabled: false,
        },
        title: {
          text: "Monthly Average Temperature",
        },
        subtitle: {
          text: "Source: Rockmetric Analysis",
        },
        xAxis: {
          categories: date,
        },
        yAxis: {
          title: {
            text: "Temperature (°C)",
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: true,
          },
        },
        series: [
          {
            name: "tokyo",
            data: tokyo,
          },
          {
            name: "London",
            data: london,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadChart();
  }, [chartType]);

  return (
    <div style={{ marginTop: 200 }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="cta-buttons">
        <Button
          type="primary"
          label="Line Chart"
          handleClick={handleClick}
          value="line"
        />
        <Button
          type="primary"
          label="Bar Chart"
          handleClick={handleClick}
          value="column"
        />
      </div>
    </div>
  );
};
