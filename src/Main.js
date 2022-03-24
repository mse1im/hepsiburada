import React, { useEffect, useState } from "react";
import { series } from "./series";

export default function Main() {
  const [show, setShow] = useState(false);
  const [listSeries, setListSeries] = useState([]);
  const [message, setMessage] = useState(false);
  const [seriesName, setSeriesName] = useState("");
  const [seriesFilter, setseriesFilter] = useState([]);
  const [,setCurrentData] = useState([]);

  const seriesData = JSON.parse(localStorage.getItem("seriesData"));

  const handle = (data) => {
    if (data.title) {
      setSeriesName(data);
      setShow(!show);
    }
  };

  const closeModal = () => {
    setShow(false);
  };

  const listChange = (e) => {
    if (e.target.value === "Most Voted") {
      setseriesFilter(
        seriesData.sort((prev, next) => next.point - prev.point)
      );
    } else {
      setseriesFilter(
        seriesData.sort((prev, next) => prev.point - next.point)
      );
    }
    e.target.firstChild.setAttribute("disabled", true);
  };

  const removeSeries = () => {
    setShow(!show);
    setMessage(!message);
    setTimeout(() => {
      setMessage(message);
    }, 2000);
    if (seriesData.length === 0) {
      const currentList = listSeries.filter(
        (item) => item.title !== seriesName.title
      );
      localStorage.setItem("series", JSON.stringify(currentList));
      setListSeries(JSON.parse(localStorage.getItem("series")));
    } else {
      const currentList = seriesData.filter(
        (item) => item.title !== seriesName.title
      );
      localStorage.setItem("seriesData", JSON.stringify(currentList));
      setCurrentData(JSON.parse(localStorage.getItem("seriesData")));
      localStorage.setItem("series", JSON.stringify(currentList));
      setListSeries(currentList);
    }
  };

  const voteUp = (data) => {
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

  const getData = () => {
    if (localStorage.getItem("series") === null) {
      setListSeries(series);
    } else {
      setListSeries(JSON.parse(localStorage.getItem("series")));
    }
  };

  const activePage = () => {
    let seriesData, activePage;
    if (
      localStorage.getItem("activePage") === null ||
      window.location.pathname === "/" ||
      window.location.pathname === "/1"
    ) {
      localStorage.setItem("activePage", 1);
      activePage = Number(localStorage.getItem("activePage"));
      if (localStorage.getItem("series") !== null) {
        seriesData = JSON.parse(localStorage.getItem("series"));
        seriesData = seriesData.filter(
          (value, index) => index < activePage * 5
        );
        localStorage.setItem(
          "seriesData",
          JSON.stringify(seriesData)
        );
      }
    } else {
      seriesData = JSON.parse(localStorage.getItem("series"));
      activePage = Number(localStorage.getItem("activePage"));
      seriesData = seriesData.filter(
        (value, index) =>
          index < activePage * 5 && index > activePage * activePage
      );
      localStorage.setItem("seriesData", JSON.stringify(seriesData));
    }
  };

  const getNumber = (pageNumber) => {
    window.location.replace(`/${pageNumber}`);
    localStorage.setItem("activePage", pageNumber);
  };

  useEffect(() => {
    getData();
    activePage();
  }, []);

  return (
    <main className="gr">
      <div className="gr-md">
        <div className="submit">
          <a href="/submit">
            <div className="plus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-plus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
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
          <select name="" id="" onChange={(e) => listChange(e)}>
            <option>Order By</option>
            <option>Most Voted</option>
            <option>Less Voted</option>
          </select>
        </div>

        {seriesFilter.length === 0 && seriesData !== null
          ? seriesData.map((series, index) => (
              <div className="wrap-links" key={series.title}>
                <div className="point">
                  <span className="score">{series.point}</span>
                  <span>points</span>
                </div>
                <div className="info">
                  <div className="title">
                    <h3>{series.title}</h3>
                    <a href={series.url} rel="noreferrer" target="_blank">
                      {series.url}
                    </a>
                  </div>
                  <div className="vote">
                    <div className="up">
                      <span className="vote">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-up"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
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
                          className="icon icon-tabler icon-tabler-arrow-down"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
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
            ))
          : seriesFilter.map((series, index) => (
              <div className="wrap-links" key={series.title}>
                <div className="point">
                  <span className="score">{series.point}</span>
                  <span>points</span>
                </div>
                <div className="info">
                  <div className="title">
                    <h3>{series.title}</h3>
                    <a href={series.url} rel="noreferrer" target="_blank">
                      {series.url}
                    </a>
                  </div>
                  <div className="vote">
                    <div className="up">
                      <span className="vote">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-up"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
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
                          className="icon icon-tabler icon-tabler-arrow-down"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
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
              {listSeries.length > 5 && (
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                  </svg>
                </li>
              )}

              {listSeries.map(
                (item, index) =>
                  (index + 1) % 5 === 1 && (
                    <li
                      className="active"
                      onClick={(e) => getNumber(Number(e.target.innerText))}
                      key={index}
                    >
                      {index / 5 + 1}
                    </li>
                  )
              )}
              {listSeries.length > 5 && (
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                  </svg>
                </li>
              )}
            </ul>
          </div>
        )}

        {message && (
          <div className="msg">
            <span>
              {seriesName.title} <span className="txt">removed.</span>
            </span>
          </div>
        )}
        {show && (
          <div className="overlay">
            <div className="alert">
              <div className="title">
                <h4>Remove Link</h4>
                <div className="remove" onClick={closeModal}>
                  X
                </div>
              </div>
              <div className="box">
                <span>Do you want to remove:</span>
                <h3>{seriesName.title}</h3>
                <div className="btn">
                  <button onClick={removeSeries}>OK</button>
                  <button onClick={closeModal}>CANCEL</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
