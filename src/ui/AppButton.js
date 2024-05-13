import React from "react";

const AppButton = (btn) => {
  const { color, data } = btn;

  const bgc = {
    backgroundColor: color,
  };

  return (
    <div>
      <button style={bgc} className="bg-green-500 text-white px-3 rounded-md">
        {data ? btn.data : "Click"}
      </button>
    </div>
  );
};

export default AppButton;
