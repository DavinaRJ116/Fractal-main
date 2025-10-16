import "./App.css";
import Header from "./core/components/layout/Header";
import Landing from "./core/components/layout/Landing";
import Footer from "./core/components/layout/Footer";
import RootRouter from "./RootRouter";
import AuthRouter from "./auth/router/AuthRouter";

function App() {
  return (
    <>
      <Header></Header>
      <RootRouter />
      <Footer />{" "}
    </>
  );
}

export default App;
