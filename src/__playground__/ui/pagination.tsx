import {
  Pagination as ArkPagination,
  type PaginationProps as ArkPaginationProps,
} from '@vitro/ark'

import { PaginationVariantProps, pagination } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pagination)
export type PaginationProps = Assign<ArkPaginationProps, PaginationVariantProps>

const Pagination = withProvider(ArkPagination.Root, 'root')
const PaginationEllipsis = withContext(ArkPagination.Ellipsis, 'ellipsis')
const PaginationItem = withContext(ArkPagination.Item, 'item')
const PaginationNextTrigger = withContext(
  ArkPagination.NextTrigger,
  'nextTrigger',
)
const PaginationPrevTrigger = withContext(
  ArkPagination.PrevTrigger,
  'prevTrigger',
)

const Root = Pagination
const Ellipsis = PaginationEllipsis
const Item = PaginationItem
const NextTrigger = PaginationNextTrigger
const PrevTrigger = PaginationPrevTrigger

export {
  // Pagination,
  // PaginationEllipsis,
  // PaginationItem,
  // PaginationNextTrigger,
  // PaginationPrevTrigger,

  Ellipsis,
  Item,
  NextTrigger,
  PrevTrigger,
  Root,
}
