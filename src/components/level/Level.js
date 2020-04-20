import React from "react";
// import { fetchData } from "../../actions/HomeActions";
// import { connect } from "react-redux";
export class Level extends React.Component {
  render() {
    const { dataStatus } = this.props;
    console.log("$$$$", dataStatus);

    return (
      <div className="level">
        {dataStatus != undefined ? (
          <React.Fragment>
            <div className="level-item is-cherry">
              <h5>Confirmed</h5>
              <h4>[+{dataStatus.deltaconfirmed}]</h4>
              <h1>{dataStatus.confirmed}</h1>
            </div>
            <div className="level-item is-blue">
              <h5>Active</h5>
              <h4>&nbsp;</h4>
              <h1>{dataStatus.active}</h1>
            </div>
            <div className="level-item is-green">
              <h5>Recovered</h5>
              <h4>[+{dataStatus.deltarecovered}]</h4>
              <h1>{dataStatus.recovered}</h1>
            </div>
            <div className="level-item is-grey">
              <h5>Deceased</h5>
              <h4>[+{dataStatus.deltadeaths}]</h4>
              <h1>{dataStatus.deaths}</h1>
            </div>
          </React.Fragment>
        ) : (
          " "
        )}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   data: state.data,
// });

// export default connect(mapStateToProps, { fetchData })(Level);
export default Level;
