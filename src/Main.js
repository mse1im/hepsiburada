import React, { useEffect, useState } from "react";
import { series } from "./series";

export default function Main() {
  const dNone = {
    display: "none",
  };

  const [show, setShow] = useState(false);
  const [listSeries, setListSeries] = useState([]);
  const [listMost, setMostList] = useState([]);
  const [listLess, setLessList] = useState([]);
  const [message, setMessage] = useState(false);
  const [seriesName, setSeriesName] = useState("");

  const handle = (data) => {
    if (data.title) {
      setSeriesName(data);
    }
    setShow(!show);
  };

  const listChange = (e) => {
    if (e.target.value === "Most Voted") {
      setListSeries(listSeries.sort((prev, next) => next.point - prev.point));
      setLessList([]);
    } else {
      setListSeries(listSeries.sort((prev, next) => prev.point - next.point));
      setMostList([]);
    }
    e.target.firstChild.setAttribute("disabled", true);
  };

  const removeSeries = () => {
    setShow(!show);
    setMessage(!message);
    setTimeout(() => {
      setMessage(message);
    }, 2000);
    const currentList = listSeries.filter((item) => item !== seriesName);
    localStorage.setItem("series", JSON.stringify(currentList));
    setListSeries(JSON.parse(localStorage.getItem("series")));
  };

  const voteUp = (data) => {
    console.log(data);
    if (data.point !== 10) {
      let findIndex = listSeries.indexOf(data);
      let currentList = listSeries.filter((item) => item.title !== data.title);
      let newPoint = { ...data, point: data.point + 1 };
      currentList.splice(findIndex, 0, newPoint);
      let sort = currentList.sort((prev, next) => next.point - prev.point);
      localStorage.setItem("series", JSON.stringify(sort));
      setListSeries(JSON.parse(localStorage.getItem("series")));
    }
  };

  const voteDown = (data) => {
    if (data.point !== 1) {
      let findIndex = listSeries.indexOf(data);
      let currentList = listSeries.filter((item) => item.title !== data.title);
      let newPoint = { ...data, point: data.point - 1 };
      currentList.splice(findIndex, 0, newPoint);
      let sort = currentList.sort((prev, next) => prev.point - next.point);
      localStorage.setItem("series", JSON.stringify(sort));
      setListSeries(JSON.parse(localStorage.getItem("series")));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("series") === null) {
      localStorage.setItem("series", JSON.stringify(series));
      setListSeries(series);
    } else {
      setListSeries(JSON.parse(localStorage.getItem("series")));
    }
  }, []);

  return (
    <main className="gr">
      <div className="gr-md">
        <div className="submit">
          <a href="/submit">
            <div className="plus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-plus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <span>SUBMIT A LINK</span>
          </a>
        </div>
        <div className="filter">
          <div className="orderby">
            Order by
            <ul>
              <li>
                Most Voted (Z
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-narrow-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <line x1="15" y1="16" x2="19" y2="12"></line>
                  <line x1="15" y1="8" x2="19" y2="12"></line>
                </svg>
                A)
              </li>
              <li>
                Less Voted (A
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-narrow-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <line x1="5" y1="12" x2="9" y2="16"></line>
                  <line x1="5" y1="12" x2="9" y2="8"></line>
                </svg>
                Z)
              </li>
            </ul>
          </div>
          <select name="" id="" onChange={(e) => listChange(e)}>
            <option>Order By</option>
            <option>Most Voted</option>
            <option>Less Voted</option>
          </select>
        </div>
        {listSeries.map((series) => (
          <div className="wrap-links" key={series.title}>
            <div className="point">
              <span className="score">{series.point}</span>
              <span>points</span>
            </div>
            <div className="info">
              <div className="title">
                <h3>{series.title}</h3>
                <a href="{series.url}" rel="noreferrer" target="_blank">
                  {series.url}
                </a>
              </div>
              <div className="vote">
                <div className="up">
                  <span className="vote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-arrow-up"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="18" y1="11" x2="12" y2="5"></line>
                      <line x1="6" y1="11" x2="12" y2="5"></line>
                    </svg>
                  </span>
                  <span onClick={() => voteUp(series)}>Up Vote</span>
                </div>
                <div className="down">
                  <span className="vote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-arrow-down"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="18" y1="13" x2="12" y2="19"></line>
                      <line x1="6" y1="13" x2="12" y2="19"></line>
                    </svg>
                  </span>
                  <span onClick={() => voteDown(series)}>Down Vote</span>
                </div>
              </div>
              <div className="delete" onClick={() => handle(series)}>
                <span>-</span>
              </div>
            </div>
          </div>
        ))}
        {listSeries.length >= 5 && (
          <div className="pagination">
            <ul>
              <li className="left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="15 6 9 12 15 18"></polyline>
                </svg>
              </li>
              {listSeries.map(
                (item, index) =>
                  (index + 1) % 5 === 0 && (
                    <li key={(index + 1) / 5}>{(index + 1) / 5}</li>
                  )
              )}
              <li className="right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
              </li>
            </ul>
          </div>
        )}
        {message && (
          <div className="msg">
            <span>
              {seriesName.title} <span className="txt">added.</span>
            </span>
          </div>
        )}
        <div className="overlay" style={dNone}>
          <div className="alert">
            <div className="title">
              <h4>Remove Link</h4>
              <div className="remove">X</div>
            </div>
            <div className="box">
              <span>Do you want to remove:</span>
              <h3>{seriesName.title}</h3>
              <div className="btn">
                <button onClick={removeSeries}>OK</button>
                <button onClick={handle}>CANCEL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
