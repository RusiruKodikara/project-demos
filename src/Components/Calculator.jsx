import React, { useState } from "react";

function Calculator() {
  const [input, etInput] = useState("");

  return (
    <div>
      <form name="calc">
        <input type="text" value={input}/>
      </form>
    </div>
  );
}

export default Calculator;
