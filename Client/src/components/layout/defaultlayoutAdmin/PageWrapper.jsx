import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppState } from "../../../redux/slice/appStateSlice";

const PageWrapper = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.state) {
        dispatch(setAppState(props.state));
        }
    }, [dispatch, props]);
    return (
        <>{props.children}</>
    )
}

export default PageWrapper;