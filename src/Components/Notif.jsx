import React from "react";

export default function Notif({showNotification}) {
    return(
        <div className="notification-div">
            <div className={`notification-container ${showNotification ? 'show' : ''}`}>
                <p>You already entered this letter</p>
            </div> 
        </div>
    )
}