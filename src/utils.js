
export function convertStatus(status) {
  switch (status) {
    case "MALFUNCTIONING": return "Malfunction";
    case "RUNNING": return "Running";
    case "STOPPED": return "Stopped";
    default: return "Running";
  }
}

export const bannerBkgnds = {
  "MALFUNCTIONING": "#D16565",
  "RUNNING": "#33A083",
  "STOPPED": "#888888",
}
