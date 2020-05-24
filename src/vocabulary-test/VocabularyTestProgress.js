import React from "react";

export default function VocabularyTestProgress(props) {
  const { taken, available } = props;
  const allCount = taken.length + available.length;

  const percentage = taken.length * 100 / allCount;
  const style = {
    width: percentage + "%"
  }

  return <div className="progress">
    <div
      className="progress-bar"
      role="progressbar"
      style={style}
      aria-valuenow={percentage}>
    </div>
  </div>
}