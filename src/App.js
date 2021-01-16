import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="bingo-div">
        <Layout />
      </div>
    </div>
  );
}

export default App;
