import BigNumber from "bignumber.js";

export function ellipseAddress(
  address: string | null | undefined,
  width = 6
): string {
  if (!address) {
    return "";
  }

  if (width === -1) {
    return address;
  }

  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export const displayBalance = (
  balance: any | undefined,
  decimals?: number,
  fixed?: number
) => {
  if (!balance || balance === "NaN") {
    return new BigNumber("0").toFormat();
  }

  decimals = decimals ? decimals : 18;
  fixed = fixed ? fixed : 3;
  // return new BigNumber(balance).dividedBy(new BigNumber('10').pow(decimals)).toFixed(fixed, BigNumber.ROUND_DOWN)
  return new BigNumber(balance)
    .dividedBy(new BigNumber("10").pow(decimals))
    .toFormat(fixed);
};
export const trimBalance = (balance: string, fixed?: number) => {
  if (!balance || balance === "NaN") {
    return new BigNumber("0").toFormat(2);
  }
  if (!fixed) {
    fixed = 4;
  }
  return new BigNumber(balance).toFormat(fixed);
};

export const displayOrderStatus = (status: string) => {
  switch (status) {
    case "CREATED":
      return "validator_status_created";
    case "DEPLOYED":
      return "validator_status_deployed";
    case "PENDING":
      return "validator_status_pending";
    case "ACTIVE":
      return "validator_status_actived";
    case "WILL_EXITING":
      return "validator_status_exiting";
    case "EXITING":
      return "validator_status_exiting";
    case "EXITED":
      return "validator_status_exited";
    case "WITHDRAWAL_DONE":
      return "validator_status_withdrawal_done";
    case "ABNORMAL":
      return "validator_status_abnormal";
    case "CANCELED":
      return "validator_status_canceled";
    default:
      return "validator_status_abnormal";
  }
};

export const getMonthName = (month: number) => {
  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
  }
};
