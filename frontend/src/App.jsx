import { useEffect, useState } from "react";

import { Table } from "./components";
import { getSharedFiles, uploadFiles } from "./api/files";

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

  const handleUpload = (e) => uploadFiles(Array.from(e.target.files)) 

  return (
    <div className="container text-center">
      <div className="row my-5">
        <h1 style={{ fontSize: "50px" }}>שיתוף ביתי</h1>
      </div>
      <div className="row">
        <div className="col">
          <label className="mb-5" htmlFor="file-upload">
            <span className="fs-2 bg-primary text-white p-3 rounded border border-none" role="button">
              העלאת קבצים
            </span>
          </label>
          <input id="file-upload" className="d-none" type="file" multiple onChange={handleUpload} />
          <div className="mx-auto" style={{ transform: "scale(1.2)", width: "40%" }}>
            <Table columns={columns} data={files} dataIdProp="name" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
