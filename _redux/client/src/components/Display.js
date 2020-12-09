import React from "react";

// Redux
import { connect } from "react-redux";

const Display = ({ counter }) => <div>{counter}</div>;

const mapStateToProps = ({ counter }) => ({ counter });

export default connect(mapStateToProps)(Display);
