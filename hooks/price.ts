export function convertUSDToBRL(usdValue: number): string {
  const brlValue = usdValue * 4.95; // Assuming the exchange rate is 5.5 BRL per USD
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(brlValue);
}

export function applyDiscount(
  usdValue: number,
  discountPercentage: number
): string {
  const brlValue = usdValue * 4.95;
  const discountedBrlValue = brlValue - brlValue * (discountPercentage / 100);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(discountedBrlValue);
}
