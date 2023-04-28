import { microcmsClient } from "../api/microcms";
import type { MicroCMSQueries } from "microcms-js-sdk";

export const getAllBlogs = async (queries: MicroCMSQueries) => {
  await microcmsClient
    .get({
      endpoint: "myblog",
      queries: { limit: 20 },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
