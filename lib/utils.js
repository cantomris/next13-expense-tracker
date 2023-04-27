export const currencyFormatter = (total) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "TRY",
    style: "currency"
  })

  return formatter.format(total);
}