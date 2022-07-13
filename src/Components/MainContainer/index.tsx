import React from "react";
import { playSound } from "../../Helpers/sounds";
import ScoreContainer from "../ScoreContainer";
import SequenceContainer from "../SequenceContainer";
import TargetContainer from "../TargetContainer";
import "./main-container.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores";

type RecordItem = {
  key: string;
  time: number;
};

const MainContainer = () => {
  const { app_store, main_store } = useStores();

  React.useEffect(() => {
    main_store.generateTestBeat();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    main_store.setCurrentIndex(0);
    main_store.setScore(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app_store.has_game_started]);

  React.useEffect(() => {
    if (app_store.is_recording) {
      main_store.setRecordArray([]);
      main_store.setStartTime(Date.now());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app_store.is_recording]);

  React.useEffect(() => {
    if (app_store.is_playing_back) {
      const promises: Promise<void>[] = [];

      for (let i = 0; i < main_store.recordArray.length; i++) {
        const item = main_store.recordArray[i];
        promises.push(main_store.playRecordedItem(item));
      }

      Promise.all(promises).then(() => app_store.setIsPlayingBack(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app_store.is_playing_back, main_store.recordArray]);

  return (
    <div className="main-container">
      <ScoreContainer />
      <SequenceContainer />
      <TargetContainer onKeyPress={main_store.onKeyPress} />
    </div>
  );
};

export default observer(MainContainer);
