import Header from "./Components/Header";
import Apropos from "./Components/Apropos";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";
import ServiceTraiteur from "./Components/ServiceTraiteur";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Apropos />
      <ServiceTraiteur />
      <Menu />
      <Reservation />
      <Contact />
    </div>
  );
}

export default App;
