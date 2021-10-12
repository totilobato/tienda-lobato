import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";

const CartWidget = ({count}) => {
    return (
    <div style={{ display: "block", padding: 30 }}>
    <div>
        <Badge color="secondary">
        <ShoppingCartIcon />{" "}
        </Badge>
        <AddIcon fontSize="small" />
    </div>
    </div>
);
}

export default CartWidget