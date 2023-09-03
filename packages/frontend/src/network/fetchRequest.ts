import { ENV } from "@/constants/env";

interface CooperationInfoObject {
  corpName: string;
  industryType: string;
  introduce: string;
  twitter?: string;
  website?: string;
  propose?: string;
  contactEmail: string;
}

const sendCooperationInfo = async (params: CooperationInfoObject) => {
  const env: string = process.env.PROVIDER_MODE || ENV.GOERLI;

  const requestDomain: Record<string, string> = {
    [ENV.PROD]: "api.trekki.io",
    [ENV.LOCAL]: "trekki-api.tripscorp.com",
    [ENV.GOERLI]: "trekki-api.tripscorp.com",
  };

  // prod
  return fetch(`https://${requestDomain[env]}/api/v1/corp/save`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(params),
  });
};

export default sendCooperationInfo;
