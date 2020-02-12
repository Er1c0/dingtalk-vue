import axios from "@/utils/request";

// 批量获取周报
export function getDcSummary(date) {
  return axios({
    url: "/dcsummary",
    method: "post",
    data: {
      date: date
    }
  });
}
