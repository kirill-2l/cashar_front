import {
  Box,
  Button,
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";

import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { ExchangeRatesTable } from "@/components/exchangeRatesTable";

export interface ExchangeRates {
  rate: number;
  exchangerName: string;
  exchangerTelegram: string;
  id: number;
}

const currenciesGive = [
  {
    label: "USD",
    id: "usd",
  },
  {
    label: "USD small bills",
    id: "usd_small",
  },
  {
    label: "USD small heads",
    id: "usd_small_heads",
  },
  {
    label: "USDT",
    id: "usdt",
  },
  {
    label: "RUB",
    id: "rub",
  },
];
const currenciesReceive = [
  {
    label: "ARS",
    id: "ars",
  },
  {
    label: "ARS WU",
    id: "ars_wu",
  },
  {
    label: "EUR",
    id: "eur",
  },
  {
    label: "RUB",
    id: "rub",
  },
];

const columnHelper = createColumnHelper<ExchangeRates>();

const columns = [
  columnHelper.accessor("rate", {
    cell: (i) => i.getValue(),
    header: "Курс",
  }),
  columnHelper.accessor("exchangerName", {
    cell: (i) => i.getValue(),
    header: "Обменник",
  }),
];

const exchangeRateData = [
  {
    rate: 1000,
    exchangerName: "Reby",
    exchangerTelegram: "https://t.me/RebyArg",
    id: 1,
  },
  {
    rate: 1001,
    exchangerName: "Reby",
    exchangerTelegram: "https://t.me/RebyArg",
    id: 2,
  },
  {
    rate: 1002,
    exchangerName: "Reby",
    exchangerTelegram: "https://t.me/RebyArg",
    id: 3,
  },
  {
    rate: 1004,
    exchangerName: "Reby",
    exchangerTelegram: "https://t.me/RebyArg",
    id: 4,
  },
];

export function ExchangeRates() {
  const [data, setData] = useState<ExchangeRates[]>(exchangeRateData);
  const [amountOfMoney, setAmountOfMoney] = useState<number>(0);
  const [currencyGive, setCurrencyGive] = useState<string>("");
  const [currencyReceive, setCurrencyReceive] = useState<string>("");

  const refreshPageData = () => {
    console.log("refresh");
  };
  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing={5}>
        <Select
          placeholder="Вы отдаете"
          onChange={(e) => setCurrencyGive(e.target.value)}
        >
          {currenciesGive.map((i) => (
            <option key={i.id} value={i.id}>
              {i.label}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Вы получаете"
          onChange={(e) => setCurrencyReceive(e.target.value)}
        >
          {currenciesReceive.map((i) => (
            <option key={i.id} value={i.id}>
              {i.label}
            </option>
          ))}
        </Select>
        <NumberInput
          onChange={(value) => setAmountOfMoney(Number(value))}
          value={amountOfMoney}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button onClick={refreshPageData}>Обновить</Button>
      </SimpleGrid>
      <Box>
        <ExchangeRatesTable data={data} columns={columns} />
      </Box>
    </>
  );
}
