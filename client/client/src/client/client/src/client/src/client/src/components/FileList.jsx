import { useEffect, useState } from "react";
import axios from "axios";

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/files").then(res => {
      setFiles(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      {files.map(file => (
        <p key={file._id}>
          <a href={`http://localhost:5000/files/${file.filename}`}>
            {file.filename}
          </a>
        </p>
      ))}
    </div>
  );
}
