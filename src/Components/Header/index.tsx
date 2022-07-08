import "./header.css";

type HeaderProps = {
  is_recording: boolean;
  is_playing_back: boolean;
  has_game_started: boolean;
  record: (is_recording: boolean) => void;
  playback: (is_playing_back: boolean) => void;
  startGame: (has_game_started: boolean) => void;
};

const Header = ({
  is_recording,
  is_playing_back,
  has_game_started,
  record,
  playback,
  startGame,
}: HeaderProps) => {
  return (
    <nav>
      <div className="branding">Drum App</div>
      <div className="menu-buttons">
        <button onClick={() => startGame(!has_game_started)}>
          {has_game_started ? "Stop" : "Start"} Game
        </button>
        <button onClick={() => record(!is_recording)}>
          {is_recording ? "Stop" : "Record"}
        </button>
        <button
          disabled={is_playing_back}
          onClick={() => !is_playing_back && playback(true)}
        >
          Playback
        </button>
      </div>
    </nav>
  );
};

export default Header;
