import React, { useState } from "react";

const Player = ({ name, symbol, isActive, handlePlayersNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playername, setPlayername] = useState(name);

  const handleEditClick = () => {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing); // react SCHEDULES a state update
    setIsEditing((editing) => !editing); // always gets the updated value of editing

    if (isEditing) {
      handlePlayersNameChange(symbol, playername);
    }
  };
  const handleChange = (event) => {
    setPlayername(event.target.value);
  };

  let playerName = <span className="player-name">{playername}</span>;
  if (isEditing)
    playerName = (
      <input type="text" required value={playername} onChange={handleChange} />
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        {/* <span className="player-name">{name}</span> */}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
