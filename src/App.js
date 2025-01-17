import { Body } from "./Components/Body";
import { Header } from "./Components/Header";


function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      {/**
       * Project Structure Plan
       *
       *
       * Header of our project
       * Body
       *   Side bar(Menu Items)
       *   Main Container
       *      BUTTON LIST
       *      Video container
       *        Video cards
       *
       *
       **/}

      <Header />
      {/* <Body /> */}
    </div>
  );
}

export default App;
