import { $, For } from 'vitro'
import { Pagination } from '.'
import './pagination.css'

export const Basic = () => (
  <Pagination.Root count={5000} pageSize={10} siblingCount={2}>
    {(api) => (
      <>
        <Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
        <For values={() => api().pages}>
          {(page, index) =>
            page.type === 'page' ? (
              <Pagination.Item {...page}>{page.value}</Pagination.Item>
            ) : (
              <Pagination.Ellipsis index={index}>&#8230;</Pagination.Ellipsis>
            )
          }
        </For>
        <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
      </>
    )}
  </Pagination.Root>
)

export const Controlled = () => {
  const currentPage = $(1)

  return (
    <Pagination.Root
      count={5000}
      pageSize={10}
      siblingCount={2}
      page={currentPage}
      onPageChange={(details) => currentPage(details.page)}
    >
      {(api) => (
        <>
          <Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
          <For values={() => api().pages}>
            {(page, index) =>
              page.type === 'page' ? (
                <Pagination.Item {...page}>{page.value}</Pagination.Item>
              ) : (
                <Pagination.Ellipsis index={index}>&#8230;</Pagination.Ellipsis>
              )
            }
          </For>
          <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
        </>
      )}
    </Pagination.Root>
  )
}

export const Customized = () => {
  return (
    <Pagination.Root
      count={5000}
      pageSize={20}
      siblingCount={3}
      dir='ltr'
      translations={{
        nextTriggerLabel: 'Next',
        prevTriggerLabel: 'Prev',
        itemLabel: (details) => `Page ${details.page}`,
      }}
    >
      {(api) => (
        <>
          <Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
          <For values={() => api().pages}>
            {(page, index) =>
              page.type === 'page' ? (
                <Pagination.Item {...page}>{page.value}</Pagination.Item>
              ) : (
                <Pagination.Ellipsis index={index}>&#8230;</Pagination.Ellipsis>
              )
            }
          </For>
          <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
        </>
      )}
    </Pagination.Root>
  )
}
