let text1 = 'Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.';

// Monday ,Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
let regEx = /\b[MTWFS]\w{2,5}day\b/g;

console.log(text1.replace(regEx, "Monday"));