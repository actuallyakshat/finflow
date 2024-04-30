export const Currencies = [
  {
    value: "USD",
    label: "$ Dollar",
    locale: "en-US",
  },
  {
    value: "INR",
    label: "₹ Rupee",
    locale: "en-IN",
  },
  {
    value: "EUR",
    label: "€ Euro",
    locale: "en-DE",
  },
  {
    value: "GBP",
    label: "£ Pound",
    locale: "en-GB",
  },
  {
    value: "JPY",
    label: "¥ Yen",
    locale: "ja-JP",
  },
  {
    value: "RUB",
    label: "₽ Ruble",
    locale: "ru-RU",
  },
  {
    value: "AED",
    label: "د.إ AED",
    locale: "ar-AE",
  },
];

export type Currency = (typeof Currencies)[0];
