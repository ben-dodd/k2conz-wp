import React, { useMemo, useState } from "react";
import "regenerator-runtime/runtime";

// Store

// Actions
import get from "lodash/get";

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
} from "react-table";

import {
  MdSearch,
  MdFirstPage,
  MdNavigateBefore,
  MdNavigateNext,
  MdLastPage,
} from "react-icons/md";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [searchValue, setSearchValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 100);
  return (
    <div className="flex rounded-md border bg-gray-100 shadow-sm hover:shadow-md">
      <div className="m-2 self-center">
        <MdSearch />
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search…"
        className="pl-2"
      />
    </div>
  );
}

export default function Table({ data, columns, hiddenColumns }) {
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
    { columns, data, initialState: { hiddenColumns } },
    useBlockLayout,
    useResizeColumns,
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div class="w-full">
      <div class="flex justify-end mt-4 mb-4">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      {page.length < 1 ? (
        <div>No methods found.</div>
      ) : (
        <div class="max-w-full">
          <table {...getTableProps()} class="border-collapse">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      class={`text-left pl-4 border ${get(
                        column,
                        "width"
                      )} bg-gray-200 hover:bg-gray-300`}
                    >
                      {column.render("Header")}
                      <span class="ml-2">
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ↑"
                            : " ↓"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                let rowProps = row.getRowProps();
                return (
                  <tr {...rowProps} class="even:bg-gray-100">
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        class={`text-left pl-4 border ${get(
                          cell,
                          "column.width",
                          ""
                        )}`}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div class="flex justify-end items-center pt-2">
            <span>
              Page{" "}
              <strong>
                {get(state, "pageIndex", 0) + 1} of {pageOptions.length}
              </strong>
            </span>
            <button
              class="icon-button"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <MdFirstPage />
            </button>
            <button
              class="icon-button"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <MdNavigateBefore />
            </button>
            <button
              class="icon-button"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <MdNavigateNext />
            </button>
            <button
              class="icon-button"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <MdLastPage />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
