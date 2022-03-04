import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  best_match: "Best Match",
  rating: "Rating",
  review_count: "Review",
  distance: "Distance",
};
// Object.keys(sortByOptions) Object'in keylerini döndürür.
// sortByOptions['best_match'] = "asd"
// sortByOptions.best_match = "asd"

let sortByOptionValue = [];
// ['best_match', 'rating', 'review_count', 'distance']
// ['Best Match', 'Rating', 'Review', 'Distance']

export default function SearchBar() {
  const renderSortByOptions = (sortByOption) => {
    return sortByOption.map((element, index) => {
      sortByOptionValue.push(sortByOptions[element]);
      // sortByOptionValue.push(sortByOptions.best_match)

      return <li key={sortByOptionValue[index]}>{sortByOptionValue[index]}</li>;
    });
  };
  // renderSortByOptions();
  // Object.keys(sortByOption)
  // console.log(renderSortByOptions(sortByOptions));
  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
            {renderSortByOptions(Object.keys(sortByOptions))}

        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a href="www.#.com">Let's Go</a>
      </div>
    </div>
  );
}
