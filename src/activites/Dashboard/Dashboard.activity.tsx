import { CLASSES_NAMES, TOTAL_AMOUNT_SHEET } from "../../domain";
import { GroupSummaryActivity } from "../GroupSummary";
import { Grid, GridItem, Image, Stack } from "@chakra-ui/react";
import { TotalSummaryActivity } from "../TotalSummary";
import { Collector } from "../Collector";
import { Collectors } from "../Collectors";

export const DashboardActivity = () => {
  return (
    <>
      <Grid
        margin={"5px 0"}
        maxWidth={"1280px"}
        templateRows="repeat(16, 1fr)"
        templateColumns="repeat(16, 1fr)"
        height={"80vh"}
        gap={2}
        background={"#081c40"}
      >
        <GridItem rowStart={3} rowSpan={4} colStart={11} colEnd={15}>
          <GroupSummaryActivity groupName={CLASSES_NAMES[0]!} />
        </GridItem>
        <GridItem rowSpan={3} colStart={11} colEnd={15}>
          <GroupSummaryActivity groupName={CLASSES_NAMES[1]!} />
        </GridItem>
        <GridItem rowStart={3} rowSpan={4} colStart={0} colEnd={4}>
          <GroupSummaryActivity groupName={CLASSES_NAMES[2]!} />
        </GridItem>
        <GridItem rowStart={7} rowSpan={4} colStart={0} colEnd={4}>
          <GroupSummaryActivity groupName={CLASSES_NAMES[3]!} />
        </GridItem>
        <GridItem
          position={"relative"}
          left={"15px"}
          rowStart={9}
          rowSpan={4}
          colStart={5}
          colEnd={10}
        >
          <GroupSummaryActivity groupName={CLASSES_NAMES[4]!} />
        </GridItem>
        <GridItem rowStart={5} rowSpan={4} colStart={5} colEnd={8}>
          <TotalSummaryActivity groupName={TOTAL_AMOUNT_SHEET} />
        </GridItem>
        <GridItem
          position={"relative"}
          left={"11px"}
          rowStart={1}
          rowSpan={3}
          colStart={5}
          colEnd={10}
        >
          <Image src="tat-logo.png" />
        </GridItem>
      </Grid>
      <Collectors />
    </>
  );
};
