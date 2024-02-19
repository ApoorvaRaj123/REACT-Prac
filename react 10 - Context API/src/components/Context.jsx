import React from "react";

const Context = (pro) => {
    console.log(pro);
    return <UserContext.provider>{pro.children}</UserContext.provider>
}

export default Context;