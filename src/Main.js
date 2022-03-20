import React from "react";

export default function Main() {
  return (
    <main className="gr">
      <div className="gr-md">
        <div className="submit">
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
        </div>
        <div className="filter">
          <div className="orderby">
            Order by
            <ul>
              <li>Most Voted (Z A)</li>
              <li>Less Voted (A Z)</li>
            </ul>
          </div>
        </div>
        <div className="wrap-links">
          <div className="point">
            <span className="score">6</span>
            <span>points</span>
          </div>
          <div className="info">
            <div className="title">
              <h3>Hacker News</h3>
              <a
                href="https://www.news.ycominbator.com"
                rel="noreferrer"
                target="_blank"
              >
                (https://www.news.ycominbator.com)/
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
                <span>Up Vote</span>
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
                <span>Down Vote</span>
              </div>
            </div>
            <div className="delete">
              <span>-</span>
            </div>
          </div>
        </div>
        <div className="wrap-links">
          <div className="point">
            <span className="score">6</span>
            <span>points</span>
          </div>
          <div className="info">
            <div className="title">
              <h3>Hacker News</h3>
              <a
                href="https://www.news.ycominbator.com"
                rel="noreferrer"
                target="_blank"
              >
                (https://www.news.ycominbator.com)/
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
                <span>Up Vote</span>
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
                <span>Down Vote</span>
              </div>
            </div>
            <div className="delete">
              <span>-</span>
            </div>
          </div>
        </div>
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
            <li>1</li>
            <li>2</li>
            <li className="active">3</li>
            <li>4</li>
            <li>5</li>
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
        <div className="add-new-link">
          <div className="return">
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
            />
          </div>
          <div className="form-block">
            <label htmlFor="url">Link URL:</label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="e.g. http://abc.xyz"
            />
          </div>
          <button>ADD</button>
        </div>
        <div className="confirm">
          <span>REDDIT <span className="txt">added.</span></span>
        </div>
        <div className="overlay">
          <div className="alert">
            <div className="title">
              <h4>Remove Link</h4>
              <div className="remove">X</div>
            </div>
            <div className="box">
              <span>Do you want to remove:</span>
              <h3>REDDIT</h3>
              <div className="btn">
                <button>OK</button>
                <button>CANCEL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
