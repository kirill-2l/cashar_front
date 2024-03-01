import {
  Flex,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export function ExchangeRates() {
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

  const exchangeRateData = [
    {
      rate: 1000,
      exchangerName: "Reby",
      exchangerTelegram: "https://t.me/RebyArg",
      id: 1,
    },
    {
      rate: 1000,
      exchangerName: "Reby",
      exchangerTelegram: "https://t.me/RebyArg",
      id: 2,
    },
    {
      rate: 1000,
      exchangerName: "Reby",
      exchangerTelegram: "https://t.me/RebyArg",
      id: 3,
    },
    {
      rate: 1000,
      exchangerName: "Reby",
      exchangerTelegram: "https://t.me/RebyArg",
      id: 4,
    },
  ];
  return (
    <>
      <TableContainer>
        <Flex>
          <Select placeholder="Вы отдаете">
            {currenciesGive.map((i) => (
              <option key={i.id} value={i.id}>
                {i.label}
              </option>
            ))}
          </Select>
          <Select placeholder="Вы получаете">
            {currenciesReceive.map((i) => (
              <option key={i.id} value={i.id}>
                {i.label}
              </option>
            ))}
          </Select>
        </Flex>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Курс</Th>
              <Th>Обменник</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {exchangeRateData.map((i) => (
              <Tr key={i.id}>
                <Td>{i.rate}</Td>
                <Td>{i.exchangerName}</Td>
                <Td isNumeric>{i.exchangerTelegram}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Курс</Th>
              <Th>Обменник</Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
