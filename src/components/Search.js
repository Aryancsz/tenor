import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = "MQOACP3M67SP";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  const [but, setBut] = useState(false);

  let tog = but ? "Dark Mode" : "Light Mode";

  const count = 0;
  const [plus, setPlus] = useState(10);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const response = await axios.get("https://g.tenor.com/v1/search", {
        params: {
          key: KEY,
          limit: 50,
          offset: 0,
          q: debouncedTerm,
          ar_range: "standard",
        },
      });
      setResults(response.data.results);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.slice(count, plus).map((result) => {
    return (
      <div key={result.id} style={{ marginBottom: "30px" }}>
        <div
          className="col-1"
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px",
          }}
        >
          <img
            alt={result.id}
            style={{ width: "auto", borderRadius: "10px" }}
            src={result.media[0].mediumgif.url}
          />
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        backgroundColor: "rgb(74,174,254) ",
        height: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            width: "80%",
            borderRadius: "5px",
            marginTop: "2.2vh",
            padding: "9px 5vh",
            border: "1px solid black",
          }}
          className="p-search-box__input "
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for GIFs and Stickers"
        />
      </div>
      <div style={{ marginTop: "75px" }}>
        <div>{renderedResults}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="#top"
          style={{
            borderRadius: "50%",
            marginLeft: "20px",
            fontWeight: "bold",
          }}
          className="p-button--brand"
        >
          ^
        </a>
        <button
          className="p-button--neutral is-inline "
          onClick={() => setPlus(plus + 10)}
        >
          More
        </button>
      </div>
      <div>
        <div
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            marginRight: "25px",
          }}
        >
          <button
            className="p-button--neutral "
            onClick={() => {
              let element = document.body;
              element?.classList.toggle("dark-mode");
              setBut(!but);
            }}
          >
            {tog}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
