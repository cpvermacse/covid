import React, { Component } from "react";
import Level from "../level/Level";
import Minigraph from "../minigraph/Minigraph";
import Table from "../table/Table";
import Search from "../search/Search";
import { connect } from "react-redux";
import { fetchData } from "../../actions/HomeActions";
import TitleDisplay from "../titledisplay/TitleDisplay";
export class HomeLeft extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    // console.log(update_data.split(" "));
    const { data } = this.props;
    console.log("3456", data.data[0]);
    return (
      <React.Fragment>
        <Search />

        <TitleDisplay />
        <Level dataStatus={data.data[0]} />
        {/* <Minigraph /> */}
        <Table />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { fetchData })(HomeLeft);
// const mapStateToProps = (state) => ({
//     movies: state.movies.movies,
//   });
//   export default connect(mapStateToProps)(MoviesContainer);
