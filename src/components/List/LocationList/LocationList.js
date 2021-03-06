import React from "react";

import PropTypes from "prop-types";
import { LocationCard } from "../../../components";
import "./LocationList.scss";

const LocationList = props => {
  console.log("LocationList");
  const _renderLocationTiles = () => {
    let locationList = [];
    if (props.data.length === 0) {
      locationList.push(<div className="no-items-wrapper" key={0}>No Locations to Display!</div>);
    } else {
      props.data.forEach((item, index) => {
        locationList.push(
          <div className="cards" key={index}>
            <LocationCard data={item} />
          </div>
        );
      });
    }
    return locationList;
  };

  return (
    <div className={`location-list-wrapper ${props.column}`}>
      {_renderLocationTiles()}
    </div>
  );
};

LocationList.defaultProps = {
  data: [],
  column: "five"
};

LocationList.propTypes = {
  data: PropTypes.array.isRequired,
  column: PropTypes.string
};

export default React.memo(LocationList);
