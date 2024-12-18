const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className="options">
      <button type="button" onClick={() => updateFeedback("good")}>Good</button>
      <button type="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button type="button" onClick={() => updateFeedback("bad")}>Bad</button>
      {/* Умовний рендеринг кнопки Reset */}
      {totalFeedback > 0 && (
        <button type="button" onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;
