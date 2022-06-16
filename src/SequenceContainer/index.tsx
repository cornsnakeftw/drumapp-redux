import "./sequence-container.css";

type SequenceContainerProps = {
  current_index: number;
  target_keys: string[];
};

const SequenceContainer = ({
  current_index,
  target_keys,
}: SequenceContainerProps) => {
  const previous_target_keys = target_keys.slice(
    Math.max(current_index - 3, 0),
    current_index
  );

  const current_target_key = target_keys[current_index];
  const next_target_keys = target_keys.slice(
    current_index + 1,
    Math.min(current_index + 4, target_keys.length)
  );

  while (previous_target_keys.length < 3) {
    previous_target_keys.unshift("");
  }

  while (next_target_keys.length < 3) {
    next_target_keys.push("");
  }

  const filtered_target_keys = [
    ...previous_target_keys,
    current_target_key,
    ...next_target_keys,
  ];

  return (
    <div id="targets" className="sequence container">
      {filtered_target_keys.map((key, index) => (
        <div
          key={index}
          className={`card sequence-card  ${index === 3 ? "active" : ""} `}
        >
          {key}
        </div>
      ))}
    </div>
  );
};

export default SequenceContainer;
