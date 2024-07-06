import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Arrival from "./Pages/Arrival";
import BestSell from "./Pages/BestSell";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Shop></Shop>
      <BestSell></BestSell>
      <Arrival></Arrival>
      <Footer></Footer>
    </div>
  );
}

export default App;
