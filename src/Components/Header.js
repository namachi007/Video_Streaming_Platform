import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { catchResults } from "../utils/searchSlice";
import fetchFromApi from "../utils/api";


export const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchCache = useSelector((state) => state.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSuggestions(searchCache[search]);
      } else {
        getSearch();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const getSearch = async () => {
    if (!search.trim()) return;
    const target_url = YOUTUBE_SEARCH_API + search;
   const proxyUrl = `https://thingproxy.freeboard.io/fetch/${target_url}`;
   try{
   const data = await fetch(proxyUrl);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(catchResults({ [search]: json[1] }));
  }
    catch (error) {
    console.error("Error fetching suggestions:", error);
  }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchRedirect = () => {
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    setSuggestions([]);
    setSearch("");
  };

  return (
    <div className="flex text-white justify-around w-full h-13 md:py-3 py-2">
      <div className="Youtube  lg:w-1/3 w-[25%]  flex space-x- lg:pl-9 mt-1 ">
        <div
          onClick={toggleMenuHandler}
          className="lg:mr-4  cursor-pointer hover:bg-gray-800 h-8 rounded-xl text-center lg:w-8 lg:p-2 w-1  "
        >
          <img
            src="/hamburger-menu.ico"
            alt="Bellicon"
            className="mr-2"
            width="18"
            height="20"
          />
        </div>
        <a href="/" className="flex space-x-1">
          <div className="youtubeLogo flex-shrink-0 mt-1  cursor-pointer">
            <img
              src="/ytLogo.ico"
              alt="Favicon"
              className="mr-"
              width="20"
              height="10"
            />
          </div>

          <div className="text-white lg:text-lg   font-semibold  cursor-pointer">
            {" "}
            YouTube
          </div>
        </a>
      </div>

      <div className="searchInput lg:w-1/3 lg:ml-0 ml-10 w-[89%]  ">
        <div className="flex">
          <form className="w-[75%] " role="search">
            <input
              type="search"
              className="form-control rounded-l-2xl p-1 px-3"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </form>
          <button
            className="w-45 bg-slate-800 rounded-r-2xl "
            onClick={handleSearchRedirect}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
        {suggestions.length === 0 ? null : (
          <div className="absolute searchResults rounded-2xl bg-gray-950   lg:py-3 py-1 text-white lg:w-[25%] w-[50%] ">
            <ul className="">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex items-center space-x-3 py-1.5 hover:bg-gray-600  cursor-pointer px-2"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="14"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                  <span>{suggestion}</span>
                </li>
              ))}
              ;
            </ul>
          </div>
        )}
      </div>

      <div className="userIcon lg:w-1/3 w-[13%]  flex justify-end ">
        <div className="flex lg:space-x-3">
          <div className="hidden lg:block">
            <button className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-2xl flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-lg"
                className="mr-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
              Create
            </button>
          </div>

          <div className="lg:w-32 w-16 mt-0.5 cursor-pointer ">
            <img
              src="/bell_icon.ico"
              alt="Bellicon"
              className="lg:mr-2  hidden lg:block "
              width="30"
              height="0"
            />
          </div>

          <div className="container flex ">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
              >
                <svg
                  class="bi me-2"
                  width="0"
                  height="0"
                  role="img"
                  aria-label="Bootstrap"
                >
                  {" "}
                </svg>
              </a>
              <div class="dropdown text-end  ">
                <button
                  className="d-block  link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/144411164?v=4"
                    alt="mdo"
                    width="34"
                    height="0"
                    className="rounded-circle"
                  />
                </button>
                <ul className="dropdown-menu text-sm lg:text-md bg-slate-800 text-white   ">
                  <li>
                    <a className="dropdown-item text-white hover:bg-slate-700 ">
                      Google Account
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white hover:bg-slate-700">
                      Switch Account
                    </a>
                  </li>

                  <li>
                    <hr class="dropdown-divider text-white bg-white"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item text-white hover:bg-slate-700">
                      Sign out
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider text-white bg-white"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item text-white hover:bg-slate-700">
                      YouTube Studio
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white hover:bg-slate-700">
                      Purchases and memberships
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white hover:bg-slate-700">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider text-white bg-white"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item text-white hover:bg-slate-700">
                      Help
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white hover:bg-slate-700">
                      Send feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
