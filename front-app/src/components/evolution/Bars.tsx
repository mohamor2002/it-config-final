import { Bar, BarChart, CartesianGrid, XAxis ,YAxis} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
const chartConfig = {
    "wants": {
      label: "wants",
      color: "hsl(142.4 71.8% 29.2%)",
    },
    "MIR": {
      label: "MIR",
      color:  "hsl(200.4 98% 39.4%)",
    },
    "CIR": {
      label: "CIR",
      color:  "hsl(0 72.2% 50.6%)",
    },
  }
const Bars = ({clients}) => {
    const [chartData,setChartData]=useState();
    useEffect(()=>{
      const newChartData=clients.map((client) => ({
        name: client.name,
        "wants": client.bandwidth_logs[0]?.requested_bandwidth,
        "MIR": client.bandwidth_logs[0]?.allocated_bandwidth,
        "CIR": client.bandwidth_logs[0]?.minimum_bandwidth,
      }))
      setChartData(newChartData)
    },[clients])

     
  return (
    <div className="">
      <Card className="px-0 md:px-28">
        <CardHeader>
          <CardTitle className=" font-roboto text-lg md:text-2xl italic text-itconfig-blue-dark">Client Bandwith Optimization</CardTitle>
          <CardDescription className=" text-sm md:text-base text-inter font-medium text-itconfig-blue-dark">the destribution of the MIR and CIR powered by our AI model</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
               dataKey="wants" fill={chartConfig["wants"].color}
                stackId="a"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="MIR" fill={chartConfig["MIR"].color} 
                stackId="a"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                 dataKey="CIR" fill={chartConfig["CIR"].color} 
                stackId="a"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bars;
