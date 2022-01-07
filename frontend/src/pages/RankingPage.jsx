import React, { useEffect, useState } from "react";
import RankTable from "../components/ranking/RankTable";
import RankSearch from "../components/ranking/RankSearch";

export default function(){
    return(
        <>
            <h1>ranking page</h1>
            <RankSearch/>
            <RankTable/>
        </>
    )
}