<%*
const fileDate = moment(tp.file.title, 'YYYY-MM-DD ddd');

// moment dates are mutable
const prevDay = moment(fileDate).subtract(1, 'd').format('YYYY-MM-DD ddd');
const nextDay = moment(fileDate).add(1, 'd').format('YYYY-MM-DD ddd');
const yearLink = fileDate.format('YYYY');
const monthLink = fileDate.format('YYYY MMM');
const weekLink = fileDate.format('gggg-[W]WW');

// ❮❮ ⋮ 2021 › Q4 › 12 › W49 ⋮ ❯❯
// [[path/to/file|display_text]]
let navStr = `[[journals/days/${prevDay}|❮❮]] ⋮ [[journals/years/${yearLink}|${yearLink}]] › [[journals/months/${monthLink}|${fileDate.format('MM')}]] › [[journals/weeks/${weekLink}|${fileDate.format('[W]WW')}]] ⋮ [[journals/days/${nextDay}|❯❯]]`;
tR += navStr
%>