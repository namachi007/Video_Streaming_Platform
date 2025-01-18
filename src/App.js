import { Body } from "./Components/Body";
import { Header } from "./Components/Header";
import {Provider} from "react-redux";
import appStore from "./utils/appStore"


function App() {
  return (
    <Provider store={appStore }>
      <div className="bg-black min-h-screen w-full text-gray-200 font-sans">
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

        <Body />
      </div>
    </Provider>
  );
}

export default App;
