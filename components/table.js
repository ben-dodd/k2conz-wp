import React, { useMemo, useState } from 'react'
import 'regenerator-runtime/runtime'

// Store

// Actions
import get from 'lodash/get'

// Material UI Components
import {
  useTable,
  usePagination,
  useResizeColumns,
  useBlockLayout,
  useSortBy,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'

import {
  MdSearch,
  MdFirstPage,
  MdNavigateBefore,
  MdNavigateNext,
  MdLastPage,
} from 'react-icons/md'

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [searchValue, setSearchValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 100)
  return (
    <div className="flex rounded-md border bg-gray-100 shadow-sm hover:shadow-md">
      <div className="m-2 self-center">
        <MdSearch />
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder="Search…"
        className="pl-2"
      />
    </div>
  )
}

export default function Table({ data, columns, hiddenColumns, pageSize }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: hiddenColumns || [],
        pageSize: pageSize || 10,
      },
    },
    useBlockLayout,
    useResizeColumns,
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  return (
    <div className="w-full">
      <div className="flex justify-end mt-4 mb-4">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      {page.length < 1 ? (
        <div>No methods found.</div>
      ) : (
        <div className="w-full">
          <table {...getTableProps()} className="w-full border-collapse">
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      key={i}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={`text-left pl-4 border ${get(
                        column,
                        'width'
                      )} bg-gray-200 hover:bg-gray-300`}
                    >
                      {column.render('Header')}
                      <span className="ml-2">
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' ↑'
                            : ' ↓'
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row)
                let rowProps = row.getRowProps()
                return (
                  <tr key={i} {...rowProps} className="even:bg-gray-100">
                    {row.cells.map((cell, i) => (
                      <td
                        key={i}
                        {...cell.getCellProps()}
                        className={`text-left pl-4 border ${get(
                          cell,
                          'column.width',
                          ''
                        )}`}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="flex justify-end items-center py-2">
            <span>
              Page{' '}
              <strong>
                {get(state, 'pageIndex', 0) + 1} of {pageOptions.length}
              </strong>
            </span>
            <button
              className="icon-button"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <MdFirstPage />
            </button>
            <button
              className="icon-button"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <MdNavigateBefore />
            </button>
            <button
              className="icon-button"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <MdNavigateNext />
            </button>
            <button
              className="icon-button"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <MdLastPage />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
