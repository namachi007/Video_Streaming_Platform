import React from 'react'

export const Header = () => {


  return (
    <div className="flex justify-around w-full h-13 py-3">
      <div className="Youtube  w-1/3  flex space-x-1 pl-9 mt-1 ">
        <div className="mr-6">
          <img
            src="/hamburger-menu.ico"
            alt="Bellicon"
            className="mr-2"
            width="22"
            height="20"
          />
        </div>
        <div className="youtubeLogo flex-shrink-0 w-6 ">
          <img
            src="/ytLogo.ico"
            alt="Favicon"
            className="mr-"
            width=""
            height=""
          />
        </div>
        <div className="text-white text-lg  font-semibold"> YouTube</div>
      </div>

      <div className="searchInput w-1/3 ">
        <div className="flex">
          <form className="w-[75%]" role="search">
            <input
              type="search"
              className="form-control rounded-l-2xl"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </form>
          <button className="w-45 bg-slate-800 rounded-r-2xl ">
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
      </div>

      <div className="userIcon w-1/3 flex justify-end ">
        <div className="flex space-x-3">
          <div>
            <button className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-2xl flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-lg"
                className='mr-1'
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



          <div className="w-32 cursor-pointer ">
            <img
              src="/bell_icon.ico"
              alt="Bellicon"
              className="mr-2"
              width="34"
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
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
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
                <ul className="dropdown-menu text-small bg-slate-800 text-white   ">
                  <li>
                    <a className="dropdown-item text-white hover:bg-slate-700">
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
}
