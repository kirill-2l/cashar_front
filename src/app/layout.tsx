export const metadata = {
  title: "CashAr – все обменники в Аргентине",
  description:
    "Обмен USD, USDT, RUB, EUR и вывод с Wise, Payoneer, PayPal там, где удобно и выгодно",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
