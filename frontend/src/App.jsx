import { Table } from "./components";

const columns = [
  {
    id: "1",
    label: "שם הקובץ",
    path: "name"
  },
  {
    id: "2",
    label: "סוג",
    path: "type"
  }
]

const data = [
  {
    id: "ej12",
    name: "קובץ לדוגמא",
    type: "Microsoft Excel"
  },
  {
    id: "fh78",
    name: "קובץ שני",
    type: "Microsoft Word"
  }
]

function App() {
  return (
    <div className="container text-center">
      <div className="row my-5">
        <h1 style={{ fontSize: "50px" }}>שיתוף ביתי</h1>
      </div>
      <div className="row">
        <div className="col">
          <h2>
            <span>שיתוף קבצים</span>
          </h2>
          <div className="mx-auto w-50">
            <Table columns={columns} data={data} dataIdProp="id" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
