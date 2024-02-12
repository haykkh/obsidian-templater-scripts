const findLastDayString = async (tp, lastNumber = 1) => {
  // debugger
  const dayString = `journals/days/${tp.date.now(
    "YYYY-MM-DD ddd",
    -lastNumber
  )}.md`;

  const file = await tp.file.exists(dayString);

  if (file) return dayString;
  else if (lastNumber > 50) return 0;
  else return findLastDayString(tp, lastNumber + 1);
};

const findLastDayTFile = async (tp) => {
  // debugger
  const lastDayString = await findLastDayString(tp);

  return tp.file.find_tfile(lastDayString);
};

const getPropFromTFile = (tp, tFile, prop) => {
  // debugger
  const re = new RegExp(`${prop}: (?<value>.+)`);
  const file = tp.file.include(tFile);

  if (file) {
    const prop = re.exec(file);
    if (prop?.groups && "value" in prop.groups) {
      return prop.groups.value;
    }
  }
  return "";
};

const getPropFromLastDay = async (tp, prop) => {
  debugger;
  const lastDayFile = await findLastDayTFile(tp);
  return getPropFromTFile(tp, lastDayFile, prop);
};

module.exports = getPropFromLastDay;
