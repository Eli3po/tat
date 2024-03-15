import { useQuery } from "react-query";
import {
  Card,
  CardHeader,
  Text,
  Image,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Stack,
  Divider,
  Heading,
  Box,
} from "@chakra-ui/react";
import {
  SHEET_SUMMARY_RANGE,
  TOTAL_AMOUNT_RANGE,
  calculatePercentage,
  fetchSheetSummary,
  formatToILS,
} from "../../domain";
import { Flat, Heat, Nested } from "@alptugidin/react-circular-progress-bar";
import { useEffect } from "react";

type GroupSummaryActivityProps = {
  groupName: string;
};

export const GroupSummaryActivity = ({
  groupName,
}: GroupSummaryActivityProps) => {
  // const { data: collectors } = useQuery(
  //   "collectors",
  //   () => fetchSheetCollectors(sheetTitle),
  //   { cacheTime: 3000 }
  // );

  const { data: summary } = useQuery(
    ["summary", groupName],
    () => fetchSheetSummary(groupName, SHEET_SUMMARY_RANGE),
    { refetchInterval: 3000, cacheTime: 3000 }
  );

  const percentage = calculatePercentage(
    summary?.actualAmount || 0,
    summary?.commitedAmount || 0
  );

  return (
    <Card background={"#ffe796"} minW="300px" maxW="300px">
      <CardBody>
        <Heading color={"#9a4242"} fontFamily={"Assistant"}>
          {groupName}
        </Heading>
        <Stack
          mt={3}
          gap={5}
          justifyContent="space-evenly"
          direction={"row-reverse"}
        >
          <Stack alignItems={"center"} mt={"2"} spacing="1">
            <Text fontFamily={"Assistant"} color="#1e6aac" fontSize="2xl">
              {formatToILS(summary?.actualAmount)}
            </Text>
            <Stack alignItems={"center"} gap={"4px"} direction={"row-reverse"}>
              <Stack alignItems={"center"} gap={0} direction={"row-reverse"}>
                <Text
                  lineHeight={"revert"}
                  fontFamily={"Assitant"}
                  fontSize={"small"}
                >
                  מתוך
                </Text>
                <Text
                  lineHeight={"revert"}
                  fontFamily={"Assitant"}
                  fontWeight={"bold"}
                  fontSize={"small"}
                >
                  :
                </Text>
              </Stack>
              <Text fontFamily={"Assistant"}>
                {formatToILS(summary?.commitedAmount)}
              </Text>
            </Stack>
          </Stack>
          <Box width={"80px"} height={"80px"}>
            <Flat
              progress={summary ? (percentage > 100 ? 100 : percentage) : 0}
              range={{ from: 0, to: 100 }}
              sign={{ value: "%", position: "end" }}
              // text={"Matchy"}
              showMiniCircle={false}
              showValue={true}
              sx={{
                strokeColor: "#4299e199",
                barWidth: 5,
                bgStrokeColor: "#ffffff",
                shape: "full",
                strokeLinecap: "round",
                valueSize: 23,
                valueWeight: "700" as any,
                valueColor: "#424ad2a6",
                valueFamily: "Assistant" as any,
                textSize: 13,
                textWeight: "bold",
                textColor: "#000000",
                textFamily: "Assistant" as any,
                // text: "Matchy",
                loadingTime: 1000,
                miniCircleColor: "#ff0000",
                miniCircleSize: 5,
                valueAnimation: true,
                intersectionEnabled: true,
              }}
            ></Flat>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
