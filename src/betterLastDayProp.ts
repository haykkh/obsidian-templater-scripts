import { TFile } from "obsidian";
import { Templater } from "../templater-types";
import "moment";

const findLastDayWithFile = async (
  tp: Templater,
  startDate?: string,
  lastNumber = 1
): Promise<{ file: TFile | null; lastNumber: number }> => {
  const dateString = startDate
    ? tp.date.now("YYYY-MM-DD ddd", -lastNumber, startDate, "YYYY-MM-DD ddd")
    : tp.date.now("YYYY-MM-DD ddd", -lastNumber);
  const fileName = `journals/days/${dateString}.md`;

  const fileExists = await tp.file.exists(fileName);

  if (fileExists) {
    const file = tp.file.find_tfile(fileName);

    if (file) return { file, lastNumber };
  }

  if (lastNumber > 50) {
    console.error("recursed too many times in findLastDayWithFile");

    return { file: null, lastNumber };
  } else return findLastDayWithFile(tp, startDate, lastNumber + 1);
};

const getPropFromTFile = async (
  tp: Templater,
  tFile: TFile,
  propName: string
): Promise<string | null> => {
  const re = new RegExp(`${propName}: (?<value>.+)`);
  const file = await tp.file.include(tFile);

  if (file) {
    const prop = re.exec(file);

    if (prop?.groups && "value" in prop.groups) {
      return prop.groups.value;
    }
  }

  return null;
};

const betterGetPropFromLastDay = async (
  tp: Templater,
  prop: string,
  startDate?: string,
  dateOffset?: number
): Promise<string | null | undefined> => {
  const { file, lastNumber } = await findLastDayWithFile(
    tp,
    startDate,
    dateOffset
  );

  if (file) {
    const propValue = await getPropFromTFile(tp, file, prop);

    if (propValue) return propValue;
  } else if (lastNumber > 50) {
    console.error("recursed too many times in betterGetPropFromLastDay");

    return null;
  } else return betterGetPropFromLastDay(tp, prop, startDate, lastNumber);
};
