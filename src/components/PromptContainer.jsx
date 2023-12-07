import React, { useState, useEffect } from "react";

export default function PromptContainer({ news }) {
  const [copy, setCopy] = useState(false);

  /*   const text = news.prompts; */

  function copyToClipboard() {
    /* text aus div, textfield anwählen und in Variable speichern */
    /* const promptText = document.getElementByClassName("read_more_container").innerHtml */
    navigator.clipboard.writeText(news.fields.prompts);
    /* alert("Copied"); */
    setCopy(!copy);
  }

  useEffect(() => {
    /*   setCopy(!copy); */
  }, []);

  return (
    <div className="read_more_container">
      <div>
        <button type="button" onClick={copyToClipboard}>
          {copy ? "Copied" : "Copy"}
        </button>
      </div>
      <div>
        <p>{news.fields.prompts}</p>
      </div>
    </div>
  );
}
