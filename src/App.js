import "./App.css";
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import Pages from "./Pages/Pages/Pages";

function App() {
  return (
    <div className=" bg-gray-900 h-screen w-full">
      <div className="container mx-auto pt-4 flex flex-col">
        <Nav />
        {/* <Search /> */}
        <Pages />
      </div>
    </div>
  );
}

export default App;
