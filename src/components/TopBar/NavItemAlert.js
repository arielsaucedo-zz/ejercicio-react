import React from 'react';

function NavItemAlert() {
    return(
        <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">3+</span>
            </a>
        </li>
    )
    
}

export default NavItemAlert;