import React from "react";

const Countries = (props) => {
    if (!props.networks || props.networks.length === 0) return null;
    // west of 50
    const westOf50 = props.networks.filter(lat => parseFloat(lat.location.longitude) <= 50.00)
        .filter(uk => uk.location.country !== 'UK'); // No UK flag at countryflags.io. prevent 404.
    // distinct countries
    const distinctCountries = [...new Set(westOf50.map(c => c.location.country))];
    distinctCountries.sort();
    return (
        <React.Fragment>
            {distinctCountries.map((country, index) =>
                <div tabIndex={index} key={country + "-" + index}
                     className={`pointer${props.selected.toUpperCase() === country ? " selectedFlag" : ""}`}>
                    <img title={country} src={"https://www.countryflags.io/" + country.toLowerCase() + "/shiny/64.png"}
                         alt={"Country Flag " + country} className="img pointer flag"
                         onClick={() => props.mapClick(country.toLowerCase())}/>
                </div>
            )}
        </React.Fragment>
    )
};

export default Countries;
