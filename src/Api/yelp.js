import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer NzfKLY2Ek08ED-f0n2CfAPolMOzMPsw5MfZxv03X7_hDEVIq4ksCbdQq6_SsCQ2whmeTsrdtdhWz_QKT05KVwXh_kHdzBnMEZOnqTSaY6n2EQRLVEvmk2KBT5xO6X3Yx",
  },
});
