import React, { useState, useCallback, useRef } from "react";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import "../../App.scss";
import { Link, useParams } from "react-router-dom";
import Bloodhound from "corejs-typeahead";
import { STATE_CODES } from "../../constants";
import {
  STATE_CODES_ARRAY,
  DISTRICTS_ARRAY,
  STATE_CODES_REVERSE,
} from "../../constants";
// const { stateCode } = useParams();

var val = 0;
const engine = new Bloodhound({
  initialize: true,
  local: STATE_CODES_ARRAY,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
});

const districtEngine = new Bloodhound({
  initialize: true,
  local: DISTRICTS_ARRAY,
  limit: 5,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace("district"),
});

//   function Search(props) {

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [expand, setExpand] = useState(false);
  const [results, setResults] = useState([]);
  //   const [stateName] = useState(STATE_CODES[stateCode]);

  //   const [values, setValues] = React.useState({
  //     searchInput: "",
  //     password: "",
  //     weight: "",
  //     weightRange: "",
  //     showPassword: false,
  //   });
  const [value, setValue] = React.useState();

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //     console.log("$$$$", event.target.value);
  //   };

  const searchInput = useRef(null);
  const handleChange = useCallback((event) => {
    const results = [];
    console.log("$$$$", event.target.value);
    const searchInput = event.target.value;

    const sync = (datums) => {
      console.log("8888", val);
      datums.map((result, index) => {
        const stateObj = {
          name: result.name,
          type: "state",
          route: result.code,
        };
        results.push(stateObj);
        return null;
      });
    };

    const districtSync = (datums) => {
      datums.slice(0, 5).map((result, index) => {
        const districtObj = {
          name: result.district + ", " + result.state,
          type: "state",
          route: STATE_CODES_REVERSE[result.state],
        };
        results.push(districtObj);
        return null;
      });
    };

    engine.search(searchInput, sync);
    districtEngine.search(searchInput, districtSync);
    console.log("results", results);
    setResults(results);
  }, []);

  return (
    <div className="search-comp">
      <div className="search-title">
        <h4>Search your city, state</h4>
      </div>
      <div className="search-box">
        <FormControl fullWidth className="" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            Search your city
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount search"
            labelWidth={120}
            value={value}
            onChange={handleChange}
            autoComplete="off"
          />
        </FormControl>
        <div className="result-search">
          {results.length > 0 && (
            <div className="results">
              {results.map((result, index) => {
                if (result.type === "state") {
                  return (
                    <Link key={index} to={`state/${result.route}`}>
                      <div className="result">
                        <div className="result-name">{result.name}</div>
                        <div className="result-type">
                          Visit {result?.type?.toLowerCase()} page
                        </div>
                      </div>
                    </Link>
                  );
                } else {
                  return <h5>data not availbale</h5>;
                }
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
