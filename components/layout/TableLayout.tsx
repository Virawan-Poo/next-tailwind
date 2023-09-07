import React, { useMemo } from "react";

interface TableLayoutProps {
  columns: string[];
  data: Record<string, any>[];
}

interface TableRowProps {
  columns: string[];
  row: Record<string, any>;
}

const TableRow: React.FC<TableRowProps> = React.memo(({ columns, row }) => (
  <tr>
    {columns.map((column, columnIndex) => (
      <td
        className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
        key={columnIndex}
      >
        {row[column]}
      </td>
    ))}
  </tr>
));

const TableLayout: React.FC<TableLayoutProps> = ({ columns, data }) => {
  const memoizedData = useMemo(() => data, [data]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
              key={index}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {memoizedData.map((row, rowIndex) => (
          <TableRow key={rowIndex} columns={columns} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default TableLayout;

// export default function TableLayout({ columns, data }: TableLayoutProps) {
//   return (
//     <table className="w-full bg-white overflow-hidden">
//       <thead>
//         <tr>
//           {columns.map((column, index) => (
//             <th
//               className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
//               key={index}
//             >
//               {column}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {columns.map((column, columnIndex) => (
//               <td
//                 className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
//                 key={columnIndex}
//               >
//                 {row[column]}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
