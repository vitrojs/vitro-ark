import {
  Accordion as ArkAccordion,
  type AccordionProps as ArkAccordionProps,
} from '@vitro/ark'
import { AccordionRecipe, accordion } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

const Accordion = withProvider(ArkAccordion.Root, 'root')
const AccordionItem = withContext(ArkAccordion.Item, 'item')
const AccordionItemContent = withContext(
  ArkAccordion.ItemContent,
  'itemContent',
)
const AccordionItemIndicator = withContext(
  ArkAccordion.ItemIndicator,
  'itemIndicator',
)
const AccordionItemTrigger = withContext(
  ArkAccordion.ItemTrigger,
  'itemTrigger',
)

const Root = Accordion
const Item = AccordionItem
const ItemContent = AccordionItemContent
const ItemIndicator = AccordionItemIndicator
const ItemTrigger = AccordionItemTrigger

export {
  // Accordion,
  // AccordionItem,
  // AccordionItemContent,
  // AccordionItemIndicator,
  // AccordionItemTrigger,
  Item,
  ItemContent,
  ItemIndicator,
  ItemTrigger,
  Root,
}

export type AccordionProps = Assign<ArkAccordionProps, AccordionRecipe>
