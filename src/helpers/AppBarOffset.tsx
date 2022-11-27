import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    offset: {
        ...theme.mixins.toolbar,
        flexGrow: 1
    }
}));

export default function AppBarOffset() {
    const classes = useStyles();
    return <div className={classes.offset} />;
}

if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
}