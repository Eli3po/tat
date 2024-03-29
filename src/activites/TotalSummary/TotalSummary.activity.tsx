import { useQuery } from "react-query";
import { Card, Text, CardBody, Stack, Heading, Box } from "@chakra-ui/react";
import {
  TOTAL_AMOUNT_RANGE,
  calculatePercentage,
  fetchSheetSummary,
  formatToILS,
} from "../../domain";
import { Flat } from "@alptugidin/react-circular-progress-bar";

type GroupSummaryActivityProps = {
  groupName: string;
};

export const TotalSummaryActivity = ({
  groupName,
}: GroupSummaryActivityProps) => {
  const { data: summary } = useQuery(
    ["summary", groupName],
    () => fetchSheetSummary(groupName, TOTAL_AMOUNT_RANGE),
    { refetchInterval: 3000, cacheTime: 3000 }
  );

  const percentage = calculatePercentage(
    summary?.actualAmount || 0,
    summary?.commitedAmount || 0
  );

  return (
    <Card background={"#ffe796"} minW="400px" minH={"200px"} maxW="l">
      <CardBody>
        <Heading fontSize={"4xl"} color={"#9a4242"} fontFamily={"Assistant"}>
          {groupName}
        </Heading>
        <Stack
          mt={3}
          gap={5}
          justifyContent="space-evenly"
          direction={"row-reverse"}
        >
          <Stack alignItems={"center"} mt={"2"} spacing="1">
            <Text fontFamily={"Assistant"} color="#1e6aac" fontSize="3xl">
              {formatToILS(summary?.actualAmount)}
            </Text>
            <Stack alignItems={"center"} gap={"4px"} direction={"row-reverse"}>
              <Stack alignItems={"center"} gap={0} direction={"row-reverse"}>
                <Text
                  lineHeight={"revert"}
                  fontFamily={"Assitant"}
                  fontSize={"large"}
                >
                  מתוך
                </Text>
                <Text
                  lineHeight={"revert"}
                  fontFamily={"Assitant"}
                  fontWeight={"bold"}
                  fontSize={"large"}
                >
                  :
                </Text>
              </Stack>
              <Text fontSize={"x-large"} fontFamily={"Assistant"}>
                {formatToILS(summary?.commitedAmount)}
              </Text>
            </Stack>
          </Stack>
          <Box width={"90px"} height={"90px"}>
            <Flat
              progress={summary ? (percentage > 100 ? 100 : percentage) : 0}
              range={{ from: 0, to: 100 }}
              sign={{ value: "%", position: "end" }}
              showMiniCircle={false}
              showValue={true}
              sx={{
                strokeColor: "#4299e199",
                barWidth: 8,
                bgStrokeColor: "#ffffff",
                shape: "full",
                strokeLinecap: "round",
                valueSize: 28,
                valueWeight: "700" as any,
                valueColor: "#424ad2a6",
                valueFamily: "Assistant" as any,
                textSize: 25,
                textWeight: "bold",
                textColor: "#000000",
                textFamily: "Assistant" as any,
                loadingTime: 1000,
                miniCircleColor: "#ff0000",
                miniCircleSize: 7,
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
