import * as React from "react";
import { Pie, PieChart, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchClients } from "@/features/client/clientSlice";
import { RootState } from "@/app/store";
import { calculateBandwidthSum } from "@/utils/charts";
import { useIsMobile } from "@/hooks/use-mobile";

const Circle = () => {
  const [selectedInterVal, setSelectedInterval] = useState(7);
  const [chartData, setChartData] = useState([]);
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const clients = useSelector((state: RootState) => state.client.clients);
  const clientStatus = useSelector((state: RootState) => state.client.status);

  // Unified useEffect to handle both fetching clients and updating chart data
  useEffect(() => {
    // Fetch clients if status is 'idle'
    if (clientStatus === "idle") {
      dispatch(fetchClients());
    }
    // Once data is fetched, calculate chart data
    if (clientStatus === "succeeded" && clients.length > 0) {
      const newChartData = [...calculateBandwidthSum(clients, selectedInterVal)].slice(0, 7);
      setChartData(newChartData);
      console.log(`Updated chart data for interval ${selectedInterVal}:`, newChartData);
    }
  }, [clientStatus, dispatch, clients, selectedInterVal]);

  // Chart configuration based on the fetched chartData
  const chartConfig = React.useMemo(() => {
    const config: ChartConfig = {
      gets: {
        label: "Bandwidth",
      },
    };
    chartData?.forEach((item) => {
      config[item.id] = {
        label: item.id,
        color: item.color,
      };
    });
    return config;
  }, [chartData]);

  const totalBandwidth = React.useMemo(() => {
    return chartData.reduce((total, item) => total + item.gets, 0);
  }, [chartData]);

  // Handling interval selection
  const handleSelectInterval = (value) => {
    setSelectedInterval(value);
    console.log("Selected interval:", value);
  };

  return (
    <div className="basis-auto md:basis-1/2 space-y-4 md:space-y-10 py-4 md:py-10 px-4 md:px-8 bg-itconfig-BGCard rounded-2xl shadow-md border-[2px] border-itconfig-blue-dark/8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm md:text-xl font-roboto font-bold italic">
          Bandwidth Distribution
        </h2>
        <div className="flex flex-row justify-between items-center">
          <Select
            onValueChange={handleSelectInterval}
            defaultValue={selectedInterVal}
          >
            <SelectTrigger className="w-full md:w-[300px] h-[30px] md:h-[40px] text-base md:text-lg font-roboto">
              <SelectValue placeholder="Select an interval" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="font-medium">Intervals</SelectLabel>
                <SelectItem value={1}>Last 24 hours</SelectItem>
                <SelectItem value={7}>Last week</SelectItem>
                <SelectItem value={30}>Last Month</SelectItem>
                <SelectItem value={365}>Last Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="gets"
              nameKey="index"
              innerRadius={isMobile ? 50 : 80}
              outerRadius={isMobile ? 70 : 150}
              strokeWidth={2}
              stroke="var(--background)"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Circle;
