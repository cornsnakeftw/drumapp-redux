import "./score.css";

type ScoreContainerProps = {
  score: number;
};

const ScoreContainer = ({ score }: ScoreContainerProps) => {
  return (
    <div className="score container">
      <div className="card score-card">
        <div className="score-header">Score</div>
        <div id="score">{score}</div>
      </div>
    </div>
  );
};

export default ScoreContainer;
