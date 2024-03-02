import { BankCardOffer } from "@/components/BankCardOffer";
import { Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { BaseSection } from "@/components/baseSection";
export default function OrderBankCard() {
  return (
    <BaseSection title="Дебетовые карты">
      <Flex gap={10} direction="column">
        <BankCardOffer
          title="Freedom Finance"
          subtitle="Виртуальная долларовая карта"
          price={220}
          imageSrc="content/freedom.jpeg"
        >
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Бесплатное обслуживание
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Валюты: доллар, евро, рубли, тенге
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Привязка к ApplePay
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Пополнение рублями, евро, долларами и тенге из РФ от 0%
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              SWIFT: 0,5% от суммы, min 50 000 тг, max 450 000 тг
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              SWIFT: 0,5% от суммы, min 50 000 тг, max 450 000 тг
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Возможность открыть брокерский счет с доходом 3-4% на остаток в
              евро и 5-6% – на доллары
            </ListItem>
          </List>
        </BankCardOffer>

        <BankCardOffer
          title="Pyypl"
          subtitle="Виртуальная долларовая карта"
          imageSrc="content/pyypl.jpeg"
        >
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Бесплатное обслуживание виртуальной карты
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Открытие по загран. паспорту
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Visa в USD
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Пополнение через Binance/криптокошелек (usdt) или Qiwi (руб)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Комиссия при оплате картой – 2%
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Лимит по карте до $10 000
            </ListItem>
          </List>
        </BankCardOffer>

        <BankCardOffer
          title="ЮраОткрывает (виртуальная)"
          subtitle="Виртуальная долларовая карта"
          price={25}
          imageSrc="content/yura.jpeg"
        >
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Бесплатное годовое обслуживание
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Снятие наличных в банкоматах за границей
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Виртуальная карта – выпускается мгновенно
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Физическая карта – доставляется в запечатанном виде от 1 до 7
              дней, в зависимости от загруженности, активируете Вы сами
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Пополнение: напрямую криптовалютой или обычным выводом с Binance
              (p2p) без блокировок и комиссий
            </ListItem>
          </List>
        </BankCardOffer>

        <BankCardOffer
          title="ЮраОткрывает (физическая)"
          subtitle="Физическая долларовая карта"
          price={100}
          imageSrc="content/yura.jpeg"
        >
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Бесплатное годовое обслуживание
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Снятие наличных в банкоматах за границей
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Виртуальная карта – выпускается мгновенно
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Физическая карта – доставляется в запечатанном виде от 1 до 7
              дней, в зависимости от загруженности, активируете Вы сами
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Пополнение: напрямую криптовалютой или обычным выводом с Binance
              (p2p) без блокировок и комиссий
            </ListItem>
          </List>
        </BankCardOffer>

        <BankCardOffer
          title="MateCard"
          subtitle="Виртуальная долларовая карта"
          price={55}
          imageSrc="content/mate.jpeg"
        >
          <>
            <Text fontSize="sm" mb={2}>
              <b>
                Цена с промокодом CASHAR20 – $55, причем $25 сразу попадут на
                счет карты.
              </b>
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Бесплатное обслуживание
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Без документов и проверки KYC
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Выпускается сервисом Mate Exchange
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Пополнение карты разными валютами через Mate Exchange. Комиссия
                за пополнения составляет 4%
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={WarningIcon} color="yellow.500" />
                Не привязывается к GooglePay и ApplePay
              </ListItem>
            </List>
          </>
        </BankCardOffer>
      </Flex>
    </BaseSection>
  );
}
