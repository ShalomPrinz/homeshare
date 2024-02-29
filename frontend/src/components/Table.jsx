import List from "./List"

function Table({ columns, data, dataIdProp }) {
  return (
    <table className="table rounded bg-white">
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} dataIdProp={dataIdProp} />
    </table>
  );
};

function TableHeader({ columns }) {
  const headerCallback = ({ label, path }) => <th className="fs-5 p-3">{label ?? path}</th>

  return (
    <thead>
      <tr>
        <List itemCallback={headerCallback} keyProp="path" list={columns} />
      </tr>
    </thead>
  );
};

function TableBody({ columns, data, dataIdProp }) {
  const columnCallback = (item, column) => (
    <td className="align-middle">
      {Object.hasOwn(item, column.path) ? item[column.path] : "שגיאה"}
    </td>
  );

  const rowCallback = (item) => (
    <tr key={item[dataIdProp]}>
      <List
        itemCallback={(column) => columnCallback(item, column)}
        keyProp="path"
        list={columns}
      />
    </tr>
  );

  return <tbody>{data.map(rowCallback)}</tbody>;
};

export default Table;
