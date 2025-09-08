import React from "react";
import { useNavigate } from "react-router-dom";

function Events({ events }) {
  const nav = useNavigate();

  const handleClick = (path) => {
    nav(path);
  };

  return (
    <div
      onClick={() => handleClick(events.path)}
      className="card"
      style={{ position: "relative" }}
    >
      <img src={events.imgURL} alt={events.name} width={380} />
      <h2>{events.name}</h2>
      <h6># {events.type}</h6>

      {/* Event Timig */}
      {/* <h6><i className="bx bx-time" style={{ padding: 1 }}></i> {events.time}</h6> */}
    </div>
  );
}

export default Events;
