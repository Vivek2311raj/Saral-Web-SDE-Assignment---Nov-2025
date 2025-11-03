const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];
  const events = [];
  for (const [start, end] of ranges) {
    events.push({ time: start, type: "start" });
    events.push({ time: end, type: "end" });
  }

  events.sort((a, b) => a.time - b.time || (a.type === "end" ? -1 : 1));

  const merged = [];
  let activeCount = 0;
  let currentStart = null;

  for (const event of events) {
    if (event.type === "start") {
      if (activeCount === 0) {
        // Beginning of a new merged range
        currentStart = event.time;
      }
      activeCount++;
    } else {
      activeCount--;
      if (activeCount === 0) {
        // End of a merged range
        merged.push([currentStart, event.time]);
        currentStart = null;
      }
    }
  }

  const finalMerged = [];
  let [s, e] = merged[0];

  for (let i = 1; i < merged.length; i++) {
    const [ns, ne] = merged[i];
    const gap = ns - e;
    if (gap <= threshold) {
      e = ne; // merge
    } else {
      finalMerged.push([s, e]);
      [s, e] = [ns, ne];
    }
  }
  finalMerged.push([s, e]);

  return finalMerged;
};

module.exports = {
  mergeTimeRanges
};
