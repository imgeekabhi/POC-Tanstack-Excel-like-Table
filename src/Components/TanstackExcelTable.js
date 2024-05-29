import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import "./TanstackExcelTable.css";
const TanstackExcelTable = () => {
  const data = useMemo(
    () => [
      {
        col1: "",
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
      {
        col1: "",
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
      {
        col1: "",
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
      {
        col1: "",
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Column 1",
        accessorKey: "col1",
      },
      {
        Header: "Column 2",
        accessorKey: "col2",
      },
      {
        Header: "Column 3",
        accessorKey: "col3",
      },
      {
        Header: "Column 4",
        accessorKey: "col4",
      },
      {
        Header: "Column 5",
        accessorKey: "col5",
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log("table", table.getHeaderGroups());
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.Header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} contentEditable>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TanstackExcelTable;
