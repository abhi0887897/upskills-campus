import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Full Stack File Upload App</h1>
      <FileUpload />
      <hr />
      <FileList />
    </div>
  );
}
