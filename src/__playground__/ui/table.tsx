import { table, type TableVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(table)
export type TableProps = Assign<
  JSX.IntrinsicElements['table'],
  TableVariantProps
>

const Table: JSX.Component<TableProps> = withProvider('table', 'root')
const TableBody = withContext('tbody', 'body')
const TableCaption = withContext('caption', 'caption')
const TableCell = withContext('td', 'cell')
const TableFooter = withContext('tfoot', 'footer')
const TableHead = withContext('thead', 'head')
const TableHeader = withContext('th', 'header')
const TableRow = withContext('tr', 'row')

const Root = Table
const Body = TableBody
const Caption = TableCaption
const Cell = TableCell
const Footer = TableFooter
const Head = TableHead
const Header = TableHeader
const Row = TableRow

export {
  // Table,
  // TableBody,
  // TableCaption,
  // TableCell,
  // TableFooter,
  // TableHead,
  // TableHeader,
  // TableRow,

  Body,
  Caption,
  Cell,
  Footer,
  Head,
  Header,
  Root,
  Row,
}
