import React from "react";

const URL = "https://restcountries.com/v3.1/name/"

export default function Flags(props) {
    const [flag, setFlag] = React.useState("Greece");
    
    React.useEffect(() => {
        fetch(URL + flag)
        .then((res) => res.json())
        .then((data) => setFlag(data[0].flag))
    }, []);

    if(!flag) return <div>Loading...</div>;
    return  (<div>
        <h2>What's the country?</h2>
        <div>
            {flag}
        </div>

        {/* <Answers /> */}
    </div>)
}