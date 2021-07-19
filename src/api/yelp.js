import axios from "axios";
import { MY_YELP_KEY } from "@env";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${MY_YELP_KEY}`,
  },
});
