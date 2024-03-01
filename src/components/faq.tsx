import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export function Faq() {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <AccordionButton
          _hover={{
            background: "none",
          }}
        >
          <Text fontSize="lg" flex="1" textAlign="left">
            Чем полезна таблица
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <UnorderedList>
            <ListItem>
              Автообновляемый курс покупки Dollar Blue (5-15мин)
            </ListItem>
            <ListItem>Контакты обменников</ListItem>
            <ListItem>Какие валюты и сервисы принимают и меняют</ListItem>
            <ListItem>Отзывы</ListItem>
            <ListItem>
              Режим работы, наличие доставки и от какой суммы она бесплатная
            </ListItem>
            <ListItem>Адрес офиса или встречи, если нет доставки</ListItem>
            <ListItem>Ссылка на пункты WU в Аргентине</ListItem>
            <ListItem>Чёрный список</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem border="none">
        <AccordionButton
          _hover={{
            background: "none",
          }}
        >
          <Text fontSize="lg" flex="1" textAlign="left">
            Чем полезна карта
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <UnorderedList>
            <ListItem>
              Более 130 обменников: БА, Барилоче, Мар-Дель-Плата, Мендоса,
              Кордова, Пуэрто Мадрин и др.*
            </ListItem>
            <ListItem>Фильтр по валютам и типам платежных сервисов</ListItem>
            <ListItem>Черный список</ListItem>
          </UnorderedList>
          <Text>* Обменники с WU могут отправлять переводы по всей стране</Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem border="none">
        <AccordionButton
          _hover={{
            background: "none",
          }}
        >
          <Text fontSize="lg" flex="1" textAlign="left">
            Чем полезен бот
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <UnorderedList>
            <ListItem>
              В боте вы найдете курсы по разным валютным парам и платежным
              сервисам: ARS, USD, EUR, RUB, KZT, BRL, UAH, WesternUnion,
              Payoneer, Wise, Paypal, Zelle, Skrill, золото
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
