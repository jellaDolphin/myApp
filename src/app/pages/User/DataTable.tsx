// @ts-nocheck
import React, { useRef, useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useExpanded,
  usePagination,
  useRowSelect,
  useFilters,
  ColumnInstance,
  TableInstance,
  UseFiltersColumnProps,
  UseSortByColumnProps,
  Cell,
  Row,
} from 'react-table';
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TableContainer,
  Button,
} from '@mui/material';
import { iData } from '../../../utils/testData';
import getHeaders from './DataTableHeader';

type Data = object;
interface TableColumn<D extends object = {}>
  extends ColumnInstance<D>,
    UseSortByColumnProps<D>,
    UseFiltersColumnProps<D> {
  sortable: boolean;
  textAlign: string;
}

type Props = {
  data: iData;
};

export default function DataTable({ data }: Props) {
  const columns = useMemo(() => getHeaders(), []);
  const tableRef = useRef<HTMLDivElement>(null);
  const {
    getTableProps,
    headerGroups,
    // @ts-ignore:
    page,
    prepareRow,
    // @ts-ignore:
    getTableBodyProps,
    // @ts-ignore:
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable<Data>(
    {
      columns,
      data,
      // @ts-ignore:
      filterable: true,
      autoResetExpanded: false,
      autoResetSortBy: false,
      autoResetFilters: false,
      autoResetRowState: false,
      autoResetPage: false,
      initialState: {
        // @ts-ignore:
        pageIndex: 0,
        pageSize: 50,
        // @ts-ignore:
      },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
  ) as TableInstance<object>;

  return (
    <TableContainer ref={tableRef}>
      <h2>
        Table rendered at <i>{new Date().toString()}</i>
      </h2>
      <MUITable {...getTableProps()} stickyHeader style={{ maxWidth: 1500 }}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(c => {
                const column = c as unknown as TableColumn<Data>;
                return (
                  <TableCell
                    width={column.width}
                    {...(column.sortable
                      ? column.getHeaderProps(column.getSortByToggleProps())
                      : column.getHeaderProps())}
                    // @ts-ignore:
                    align={column.textAlign || 'left'}
                  >
                    {column.render('Header')}
                    {column.sortable && (
                      <TableSortLabel
                        active={column.isSorted}
                        direction={
                          column.sortable && column.isSortedDesc
                            ? 'desc'
                            : 'asc'
                        }
                      />
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row: Row, i: number) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.id}>
                <TableRow
                  {...row.getRowProps()}
                  hover
                  // @ts-ignore:
                  {...row.getToggleRowExpandedProps()}
                >
                  {row.cells.map((cell: Cell) => {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        // @ts-ignore:
                        width={cell.column.width}
                        // @ts-ignore:
                        align={cell.column?.textAlign || 'left'}
                        // @ts-ignore:
                        style={{
                          // @ts-ignore:
                          paddingTop: cell.column.paddingTop,
                          // @ts-ignore:
                        }}
                      >
                        {cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </TableRow>
                {row.isExpanded && (
                  <TableRow>
                    <TableCell colSpan={12}>
                      <div style={{ minHeight: 200 }}>
                        <strong>Show card here.</strong>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </MUITable>
      {(canNextPage || canPreviousPage) && (
        <div>
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </Button>{' '}
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </Button>{' '}
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </Button>{' '}
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </Button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
        </div>
      )}
    </TableContainer>
  );
}
