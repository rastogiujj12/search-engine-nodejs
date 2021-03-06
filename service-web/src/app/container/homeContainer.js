import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {HomeScreen} from "../screens/homeScreen";

const mapStateToProps = ({ui}) => {
    return {
        ...ui
    };
};
export const HomeScreenContainer = withRouter(connect(mapStateToProps)(HomeScreen));
