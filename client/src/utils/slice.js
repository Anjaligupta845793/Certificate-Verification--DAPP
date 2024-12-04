export const slice = (account) => {
  if (account) {
    return account.slice(0, 6);
  } else {
    return "connect";
  }
};
