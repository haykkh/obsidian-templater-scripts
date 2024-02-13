"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropFromLastDay = void 0;
const findLastDayString = async (tp, lastNumber = 1) => {
    // debugger
    const dayString = `journals/days/${tp.date.now("YYYY-MM-DD ddd", -lastNumber)}.md`;
    const file = await tp.file.exists(dayString);
    if (file)
        return dayString;
    else if (lastNumber > 50)
        return null;
    else
        return findLastDayString(tp, lastNumber + 1);
};
const findLastDayTFile = async (tp) => {
    // debugger
    const lastDayString = await findLastDayString(tp);
    if (lastDayString)
        return tp.file.find_tfile(lastDayString);
    return null;
};
const getPropFromTFile = async (tp, tFile, prop) => {
    // debugger
    const re = new RegExp(`${prop}: (?<value>.+)`);
    const file = await tp.file.include(tFile);
    if (file) {
        const prop = re.exec(file);
        if ((prop === null || prop === void 0 ? void 0 : prop.groups) && "value" in prop.groups) {
            return prop.groups.value;
        }
    }
    return null;
};
const getPropFromLastDay = async (tp, prop) => {
    // debugger;
    const lastDayFile = await findLastDayTFile(tp);
    if (lastDayFile)
        return await getPropFromTFile(tp, lastDayFile, prop);
};
exports.getPropFromLastDay = getPropFromLastDay;
