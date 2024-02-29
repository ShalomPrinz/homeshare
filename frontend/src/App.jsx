import { useEffect, useState } from "react";

import { Table } from "./components";
import { getSharedFiles } from "./api/files";

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

function App() {
  const [files, setFiles] = useState([])
  
  useEffect(() => {
    getSharedFiles()
      .then((sharedFiles) => setFiles(sharedFiles.data))
      .catch(err => console.error("error getting files", err))
  }, [])

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
            <Table columns={columns} data={files} dataIdProp="name" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
