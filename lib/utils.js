export const currencyFormatter = (total) => {
  const formatter = Intl.NumberFormat("tr-TR", {
    currency: "TRY",
    style: "currency"
  })

  return formatter.format(total);
}