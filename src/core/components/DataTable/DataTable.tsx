import {
  HeaderGroup,
  useFilters,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable
} from "react-table";
import {
  Box,
  Checkbox,
  createStyles,
  Divider,
  Group,
  LoadingOverlay,
  Pagination,
  Select,
  Table,
  Text,
  useCss
} from "@mantine/core";


const useStyles = createStyles((t) => ({
  root: {height: "100%", display: "block"},
  tableContainer: {
    display: "block",
    overflow: "auto",
    "& > table": {
      "& > thead": {backgroundColor: t.colors.gray[0], zIndex: 1},
      "& > thead > tr > th": {padding: t.spacing.md},
      "& > tbody > tr > td": {padding: t.spacing.md}
    }
  },
  stickHeader: {top: 0, position: "sticky"},
  sortableHeader: {"&:hover": {backgroundColor: t.colors.gray[2]}},
  disableSortIcon: {color: t.colors.gray[5]},
  sortDirectionIcon: {transition: "transform 200ms ease"}
}));

interface DataTableProps {
  loading: boolean;
  debugging: boolean;
  getTableProps: () => {};
  stickyHeader: boolean;
  headerGroups: HeaderGroup<HeaderGroupTable>[]
}

interface HeaderGroupTable {
  canSort: boolean;
  cellMinWidth: number;
  cellWidth: number;
  getSortByToggleProps: () => {}
}

function DataTable<T>(props: DataTableProps) {
  const {classes, cx} = useStyles();
  const { css } = useCss();
  const tableOptions = useTable({});

  function renderHead():JSX.Element[]{
    return props.headerGroups.map(hg => (<tr {...hg.getHeaderGroupProps()}>
      {hg.headers.map(column => (
        <th className={cx({ [classes.sortableHeader]: column.canSort },
          { [css({ minWidth: column.cellMinWidth })]: column.cellMinWidth },
          { [css({ width: column.cellWidth })]: column.cellWidth })} {...column.getHeaderProps(
          column.getSortByToggleProps({ title: undefined })
        )}>
        </th>
      ))}
    </tr>))
  }

  return <div className={classes.root}>
    <LoadingOverlay visible={props.loading}/>
    <div className={classes.tableContainer} style={{height: pagination ? "calc(100% - 44px)" : "100%"}}>
      {props.debugging && <pre>
            <code>{JSON.stringify(filters, null, 2)}</code>
          </pre>}
      <Table  {...props.getTableProps()}>
        <thead className={cx({[classes.stickHeader]: props.stickyHeader})}>
        {renderHead()}
        </thead>
      </Table>
    </div>
  </div>
}

