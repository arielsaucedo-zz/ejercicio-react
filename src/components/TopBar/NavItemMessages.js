import React from 'react';

function NavItemMessages() {
    return(
        <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                <i class="fas fa-envelope fa-fw"></i>
                <span class="badge badge-danger badge-counter">7</span>
            </a>
        </li>
    )
    
}

export default NavItemMessages;