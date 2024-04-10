import React from 'react';
import "../style/Common.css";
import "../style/Color.css";

export default function WatchingList() {
    return (
        <div className="watching-list">
            <span className="watching-icon">👀</span>
            <span className="watching-count clr-white">22k</span>
            <span className="watching-text clr-white">people watching</span> &nbsp;<div class="live-text">LIVE</div>
        </div>
    );
}
