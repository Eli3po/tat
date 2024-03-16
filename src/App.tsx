import "./App.css";

import { useQuery } from "react-query";

import { fetchSheetCollectors, fetchSheetSummary } from "./domain";
import { Collector, DashboardActivity } from "./activites";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <DashboardActivity />
    </ChakraProvider>
  );
};

export default App;
