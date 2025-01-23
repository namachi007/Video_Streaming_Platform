import { Body } from "./Components/Body";
import { Header } from "./Components/Header";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./Components/MainContainer";
import { WatchPage } from "./Components/WatchPage";


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [{
    path: "/",
    element: <MainContainer />
  },{
    path: "/watch",
    element: <WatchPage />
  }
]
}])

function App() {
  return (
    <Provider store={appStore}>
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
        <RouterProvider router={appRouter} />
        
        
      </div>
    </Provider>
  );
}

export default App;
