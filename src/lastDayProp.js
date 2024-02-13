"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const findLastDayString = (tp, lastNumber = 1) => __awaiter(void 0, void 0, void 0, function* () {
    // debugger
    const dayString = `journals/days/${tp.date.now("YYYY-MM-DD ddd", -lastNumber)}.md`;
    const file = yield tp.file.exists(dayString);
    if (file)
        return dayString;
    else if (lastNumber > 50)
        return null;
    else
        return findLastDayString(tp, lastNumber + 1);
});
const findLastDayTFile = (tp) => __awaiter(void 0, void 0, void 0, function* () {
    // debugger
    const lastDayString = yield findLastDayString(tp);
    if (lastDayString)
        return tp.file.find_tfile(lastDayString);
    return null;
});
const getPropFromTFile = (tp, tFile, prop) => __awaiter(void 0, void 0, void 0, function* () {
    // debugger
    const re = new RegExp(`${prop}: (?<value>.+)`);
    const file = yield tp.file.include(tFile);
    if (file) {
        const prop = re.exec(file);
        if ((prop === null || prop === void 0 ? void 0 : prop.groups) && "value" in prop.groups) {
            return prop.groups.value;
        }
    }
    return null;
});
const getPropFromLastDay = (tp, prop) => __awaiter(void 0, void 0, void 0, function* () {
    // debugger;
    const lastDayFile = yield findLastDayTFile(tp);
    if (lastDayFile)
        return yield getPropFromTFile(tp, lastDayFile, prop);
});
module.exports = getPropFromLastDay;
