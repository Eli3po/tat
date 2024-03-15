import axios from "axios";
import {
  SHEET_COLLECTORS_RANGE,
  SHEET_ID,
  SHEET_SUMMARY_RANGE,
  TOTAL_AMOUNT_RANGE,
} from "./sheetMetadata";
import { shuffleArray } from "./utils";

export const fetchSheet = async (sheetTitle: string, range: string) => {
  const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${sheetTitle}&range=${range}`;

  const response = await axios.get(FULL_URL);
  return processRawData(response.data);
};

export type Collector = {
  name: string;
  commitedAmount: number;
  actualAmount: number;
};

export type Summary = {
  commitedAmount: number;
  actualAmount: number;
};

export const fetchSheetCollectors = async (
  sheetTitle: string
): Promise<Collector[]> => {
  const rows = await fetchSheet(sheetTitle, SHEET_COLLECTORS_RANGE);
  const collectors: Collector[] = rows.map((row: { c: { v: any }[] }) => {
    return {
      name: row.c[0]?.v.toString().trim(),
      commitedAmount: row.c[1]?.v,
      actualAmount: row.c[2]?.v,
    };
  });

  return collectors;
};

export const fetchAllCollectors = async (
  sheetTitles: string[]
): Promise<Collector[]> => {
  let allCollectors: Collector[] = [];

  for (const sheetTitle of sheetTitles) {
    const collectors = await fetchSheetCollectors(sheetTitle);
    allCollectors = [...allCollectors, ...collectors];
  }

  return shuffleArray(allCollectors);
};

export const fetchSheetSummary = async (
  sheetTitle: string,
  range: string
): Promise<Summary> => {
  const rows = await fetchSheet(sheetTitle, range);
  const summary = rows.map((row: { c: { v: any }[] }) => {
    return {
      commitedAmount: row.c[0]?.v,
      actualAmount: row.c[1]?.v,
    };
  });

  return summary[0];
};

export const processRawData = (rawData: string) => {
  const jsonStr = rawData
    .replace("google.visualization.Query.setResponse(", "")
    .replace("/*O_o*/", "")
    .slice(0, -2);

  const data = JSON.parse(jsonStr);
  const rows = data.table.rows;

  return rows;
};
