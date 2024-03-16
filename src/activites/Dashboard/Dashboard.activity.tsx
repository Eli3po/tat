import { CLASSES_NAMES, TOTAL_AMOUNT_SHEET } from "../../domain";
import { GroupSummaryActivity } from "../GroupSummary";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import { TotalSummaryActivity } from "../TotalSummary";
import { Collectors } from "../Collectors";

export const DashboardActivity = () => {
  return (
    <>
      <Grid
        maxWidth={"1500px"}
        templateRows="repeat(16, 1fr)"
        templateColumns="repeat(16, 1fr)"
        height={"80vh"}
        gap={4}
        background={"#081c40"}
      >
        <GridItem rowStart={3} rowSpan={4} colStart={11} colEnd={15}>
          <GroupSummaryActivity groupName={CLASSES_NAMES[0]!} />
        </GridItem>
        <GridItem rowSpan={3} colStart={11} colEnd={15}>
          <GroupSummaryActivity groupName={CLASSES_NAMES[1]!} />
        </GridItem>
        <GridItem rowStart={3} rowSpan={4} colStart={0} colEnd={3}>
          <GroupSummaryActivity groupName={CLASSES_NAMES[2]!} />
        </GridItem>
        <GridItem rowStart={7} rowSpan={4} colStart={0} colEnd={3}>
          <GroupSummaryActivity groupName={CLASSES_NAMES[3]!} />
        </GridItem>
        <GridItem
          position={"relative"}
          right={"20px"}
          top={"20px"}
          rowStart={10}
          rowSpan={4}
          colStart={7}
        >
          <GroupSummaryActivity groupName={CLASSES_NAMES[4]!} />
        </GridItem>
        <GridItem rowStart={6} rowSpan={4} colStart={4} colSpan={6}>
          <TotalSummaryActivity groupName={TOTAL_AMOUNT_SHEET} />
        </GridItem>
        <GridItem
          position={"relative"}
          left={"35px"}
          rowStart={1}
          rowSpan={3}
          colStart={5}
          colSpan={3}
          bottom={"20px"}
        >
          <Image src="tat-logo.png" />
        </GridItem>
      </Grid>
      <Collectors />
    </>
  );
};
