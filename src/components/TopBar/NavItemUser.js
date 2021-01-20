import React from 'react';

function NavItemUser() {
    return(
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="/" id="userDropdown">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                <img class="img-profile rounded-circle" src="images/dummy-avatar.jpg" width="60"/>
            </a>
        </li>
    )
    
}

export default NavItemUser;