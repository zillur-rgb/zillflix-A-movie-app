import "./App.css";
import { BookmarkProvider } from "./Components/BookmarkContext/BookmarkContext";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import Pages from "./Pages/Pages/Pages";

function App() {
  return (
    <div className=" bg-gray-900 w-full">
      <BookmarkProvider>
        <div className="container mx-auto pt-4 flex flex-col">
          <Nav />
          <Search />
          <Pages />
          <Footer />
        </div>
      </BookmarkProvider>
    </div>
  );
}

export default App;
