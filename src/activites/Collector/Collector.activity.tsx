import { Card, CardBody, Stack, Text } from "@chakra-ui/react";
import { formatToILS } from "../../domain";
import { Collector } from "../../domain/sheets-handler";

export const CollectorCard = ({ collector }: { collector: Collector }) => {
  return (
    <Card
      background={"#ffe796"}
      minW={"250px"}
      fontFamily={"Assistant"}
      padding={"small"}
    >
      <CardBody alignItems={"center"} textAlign={"center"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          justifyItems={"center"}
          direction={"column"}
          alignContent={"center"}
        >
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"#9a4242"}>
            {collector.name}
          </Text>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            gap={0.5}
            direction={"row"}
          >
            <Text fontSize={"3xl"} color="#1e6aac">
              {formatToILS(collector.actualAmount)}
            </Text>
            <Text fontWeight={"bold"} fontSize={"large"}>
              /
            </Text>
            <Text fontSize={"larger"}>
              {formatToILS(collector.commitedAmount)}
            </Text>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};
