export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const getDepositAddress = (chainId: number | undefined) => {
  switch (chainId) {
    case 1:
      return "0xa1619Fb8CcC03Ee3c8D543fB8be993764030e028";
    case 5:
      return "0x6271762adafe2b66bc56a306c6e32b0045712cd4";
    default:
      return "0x3892653CC2E380fB28A53eb52cAF2fF89E6452Ed";
  }
};

export const formatDate = (dateString: string) => {
  const d = new Date(dateString);
  return d.toLocaleString("zh-CN");
};
