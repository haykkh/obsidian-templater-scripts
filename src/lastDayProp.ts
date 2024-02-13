import { TFile } from "obsidian";
import { Templater } from "../templater-types";

const findLastDayString = async (
  tp: Templater,
  lastNumber = 1
): Promise<string | null> => {
  // debugger

  const dayString = `journals/days/${tp.date.now(
    "YYYY-MM-DD ddd",
    -lastNumber
  )}.md`;

  const file = await tp.file.exists(dayString);

  if (file) return dayString;
  else if (lastNumber > 50) return null;
  else return findLastDayString(tp, lastNumber + 1);
};

const findLastDayTFile = async (tp: Templater): Promise<TFile | null> => {
  // debugger

  const lastDayString = await findLastDayString(tp);

  if (lastDayString) return tp.file.find_tfile(lastDayString);

  return null;
};

const getPropFromTFile = async (
  tp: Templater,
  tFile: TFile,
  prop: string
): Promise<string | null> => {
  // debugger

  const re = new RegExp(`${prop}: (?<value>.+)`);
  const file = await tp.file.include(tFile);

  if (file) {
    const prop = re.exec(file);
    if (prop?.groups && "value" in prop.groups) {
      return prop.groups.value;
    }
  }
  return null;
};

const getPropFromLastDay = async (tp: Templater, prop: string) => {
  // debugger;

  const lastDayFile = await findLastDayTFile(tp);

  if (lastDayFile) return await getPropFromTFile(tp, lastDayFile, prop);
};

export = getPropFromLastDay;
