import React, { useRef, useState } from "react";

export default function Submit() {
  const [showMsg, showAlert] = useState(false);
  const [message, setMessage] = useState("");
  const seriesName = useRef();
  const seriesURL = useRef();
  let data = localStorage.getItem("series") != null ? JSON.parse(localStorage.getItem("series")) : [];
  const validURL = "https://";
  const regex = new RegExp(validURL);

  const returnBack = () => {
    window.location.href = "/";
  };

  const showInfo = (message, success) => {
    showAlert(!showMsg);
    setMessage(message);
    setTimeout(() => {
      if (success === true) {
        showAlert(showMsg);
        returnBack();
      } else {
        showAlert(showMsg);
      }
    }, 2000);
  };

  const newSubmit = () => {
    if (
      seriesName.current.value.length === 0 &&
      seriesURL.current.value.length === 0
    ) {
      showInfo("Fill in the blanks");
    } else if(seriesName.current.value.length < 5 &&
      seriesURL.current.value.length < 15){
        showInfo("Series field should be at least 5 characters, Series url should be at least 15 characters");
    }else {
      if (regex.test(seriesURL.current.value)) {
        let newData = {
          point: 1,
          title: seriesName.current.value,
          url: seriesURL.current.value,
        };
        if(localStorage.getItem("series") !== null && data.length === 0){
          localStorage.setItem("series", JSON.stringify([newData]));
          showInfo(`${seriesName.current.value} successfully added!`,true);
        }else {
          data.unshift(newData);
          localStorage.setItem("series",JSON.stringify(data));
          showInfo(`${seriesName.current.value} successfully added!`,true);
        }
      } else {
        showInfo("Not a valid URL");
      }
    }
  }

  return (
    <main className="gr">
      <div className="gr-md">
        <div className="add-new-link">
          <div className="return" onClick={returnBack}>
            <span className="arrow"></span>
            <span>Return to List</span>
          </div>
          <h2>Add New Link</h2>
          <div className="form-block">
            <label htmlFor="name">Link Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Alphabet"
              ref={seriesName}
            />
          </div>
          <div className="form-block">
            <label htmlFor="url">Link URL:</label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="e.g. http://abc.xyz"
              ref={seriesURL}
            />
          </div>
          <button onClick={newSubmit}>ADD</button>
        </div>
        {showMsg && (
          <div className="msg">
            <span>{message}</span>
          </div>
        )}
      </div>
    </main>
  );
}