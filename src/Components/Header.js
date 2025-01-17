import React from 'react'

export const Header = () => {
  return (
    <div>
        <div className='Youtube logo'>

        </div>
        <div className='searchInput'>

        </div>
        <div className='userIcon'>

        </div>
        <h1 className='text-4xl'>
            <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">   </svg>
        </a>

        
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
          </input>
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
          </a>
          <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" >New project...</a></li>
            <li><a class="dropdown-item" >Settings</a></li>
            <li><a class="dropdown-item" >Profile</a></li>
            <li><hr class="dropdown-divider" ></hr></li>
            <li><a class="dropdown-item" >Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
        </h1>
    </div>
  )
}
