import "./App.css";

import { useQuery } from "react-query";

import { fetchSheetCollectors, fetchSheetSummary } from "./domain";
import { Collector, DashboardActivity } from "./activites";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  // const { data: collectors } = useQuery(
  //   "collectors",
  //   () => fetchSheetCollectors("שיעור א"),
  //   { cacheTime: 3000 }
  // );
  // console.log("🚀 ~ App ~ collectors:", collectors);

  // const { data: summary } = useQuery("summary", () =>
  //   fetchSheetSummary("שיעור א")
  // );
  // console.log("🚀 ~ App ~ summary:", summary);
  return (
    <ChakraProvider>
      <DashboardActivity />
    </ChakraProvider>
  );
};

export default App;
