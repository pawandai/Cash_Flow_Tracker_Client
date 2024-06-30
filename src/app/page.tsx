"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "@/components/shared/Home";

// const chartData = {
// 	labels: ["Saving", "Expense", "Investment"],
// 	datasets: [
// 		{
// 			label: "%",
// 			data: [13, 8, 3],
// 			backgroundColor: ["rgba(75, 192, 192)", "rgba(255, 99, 132)", "rgba(54, 162, 235)"],
// 			borderColor: ["rgba(75, 192, 192)", "rgba(255, 99, 132)", "rgba(54, 162, 235, 1)"],
// 			borderWidth: 1,
// 			borderRadius: 30,
// 			spacing: 10,
// 			cutout: 130,
// 		},
// 	],
// };

ChartJS.register(ArcElement, Tooltip, Legend);

export const client = new ApolloClient({
  uri: process.env.API_URL || "http://localhost:5000/api",
  cache: new InMemoryCache(), // cache is used to store the data that is fetched from the server.
  credentials: "include", // send cookies with every request.
});

const HomePage = () => {
  // const { data } = useQuery(GET_TRANSACTION_STATISTICS);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "$",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
        borderRadius: 30,
        spacing: 10,
        cutout: 130,
      },
    ],
  });

  // useEffect(() => {
  // 	if (data?.categoryStatistics) {
  // 		const categories = data.categoryStatistics.map((stat) => stat.category);
  // 		const totalAmounts = data.categoryStatistics.map((stat) => stat.totalAmount);

  // 		const backgroundColors = [];
  // 		const borderColors = [];

  // 		categories.forEach((category) => {
  // 			if (category === "saving") {
  // 				backgroundColors.push("rgba(75, 192, 192)");
  // 				borderColors.push("rgba(75, 192, 192)");
  // 			} else if (category === "expense") {
  // 				backgroundColors.push("rgba(255, 99, 132)");
  // 				borderColors.push("rgba(255, 99, 132)");
  // 			} else if (category === "investment") {
  // 				backgroundColors.push("rgba(54, 162, 235)");
  // 				borderColors.push("rgba(54, 162, 235)");
  // 			}
  // 		});

  // 		setChartData((prev) => ({
  // 			labels: categories,
  // 			datasets: [
  // 				{
  // 					...prev.datasets[0],
  // 					data: totalAmounts,
  // 					backgroundColor: backgroundColors,
  // 					borderColor: borderColors,
  // 				},
  // 			],
  // 		}));
  // 	}
  // }, [data]);

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};
export default HomePage;
