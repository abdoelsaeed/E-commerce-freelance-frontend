function CircleColors({ availableColors, selectedColor, onSelectColor }) {
  return (
    <div className="flex gap-2 mb-3 items-center">
      <span className="font-semibold text-gray-700 text-sm">Colors:</span>
      {availableColors.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => onSelectColor(color)}
          className={`flex items-center gap-1 focus:outline-none`}
          style={{ background: "none", border: "none", padding: 0, margin: 0 }}
        >
          <span
            className={`inline-block w-6 h-6 rounded-full border transition-all duration-200 ${selectedColor === color ? "border-2 border-[#1672D4] shadow-lg scale-110" : "border-gray-300"}`}
            style={{
              backgroundColor: color.toLowerCase(),
              boxShadow: selectedColor === color ? "0 0 0 2px #1672D4" : "none",
            }}
            title={color}
          ></span>
          <span
            className={`text-xs ${selectedColor === color ? "font-bold text-[#1672D4]" : "text-gray-600"}`}
          >
            {color}
          </span>
        </button>
      ))}
    </div>
  );
}

export default CircleColors;
