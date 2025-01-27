import { Body } from "./Components/Body";
import { Header } from "./Components/Header";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./Components/MainContainer";
import { WatchPage } from "./Components/WatchPage";
import { SearchPage } from "./Components/SearchPage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

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
         *   /Home Page
         *    Side bar(Menu Items)
         *    Main Container
         *        Button list
         *        Video container
         *          -Video cards
         *
         *   /Watch Page
         *    Video Player
         *    Comments
         *    Live Chat
         *   
         * 
         *   /Search Page
         *    Search List
         *
         *
         *
         *
         **/}
        {/* <Header />
        <RouterProvider router={appRouter} /> */}

        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
