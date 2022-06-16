import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className="branding">Drum App</div>
      <div className="menu-buttons">
        <button>Start Game</button>
        <button>Record</button>
        <button>Playback</button>
        <button>Settings</button>
      </div>
    </nav>
  );
};

export default Header;
