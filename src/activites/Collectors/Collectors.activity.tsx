import { Stack } from "@chakra-ui/react";
import { CollectorCard } from "../Collector/Collector.activity";
import "../../index.scss";
import {
  CLASSES_NAMES,
  fetchAllCollectors,
  fetchSheetCollectors,
} from "../../domain";
import { useQuery } from "react-query";

export const Collectors = () => {
  const { data: collectors } = useQuery(
    "collectors",
    () => fetchAllCollectors(CLASSES_NAMES),
    { cacheTime: 60000, refetchInterval: 60000 }
  );

  console.log("🚀 ~ Collectors ~ collectors:", collectors);
  return (
    <div className="slider">
      <div className="slide-track">
        {collectors?.map((collector) => (
          <CollectorCard key={collector.name} collector={collector} />
        ))}
      </div>
    </div>
  );
};
