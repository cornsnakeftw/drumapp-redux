import React from "react";
import { observer } from "mobx-react-lite";
import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import { useStores } from "./stores";

function App() {
  const { app_store } = useStores();
  console.log(app_store);

  return (
    <div className="App">
      <Header
        is_recording={app_store.is_recording}
        is_playing_back={app_store.is_playing_back}
        has_game_started={app_store.has_game_started}
        record={app_store.setIsRecording}
        playback={app_store.setIsPlayingBack}
        startGame={app_store.setStarted}
      />
      <MainContainer
        is_recording={app_store.is_recording}
        is_playing_back={app_store.is_playing_back}
        has_game_started={app_store.has_game_started}
        stopPlayback={() => app_store.setIsPlayingBack(false)}
      />
    </div>
  );
}

export default observer(App);
