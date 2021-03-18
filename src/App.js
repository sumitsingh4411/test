import "./App.css";
const COMMA_ENTRIES = [
  // First name, City, Birth date
  "Mckayla, Atlanta, 5/29/1986",
  "Elliot, New York City, 4/3/1947",
];
const DOLLAR_ENTRIES = [
  // City, Birth date, Last name, First name
  "LA $ 10-4-1974 $ Nolan $ Rhiannon",
  "NYC $ 12-1-1962 $ Bruen $ Rigoberto",
];
function App() {
  // defining comma_seperator function
  const comma_seprator = (e) => {
    let p = e.replaceAll(", ", " ");
    return p;
  };
  // defining dollar_seprator function
  const dollar_seprator = (e) => {
    var splitString = e.split("$");
    var reverseArray = splitString.reverse();
    var p = "";
    let city = "";
    reverseArray[3] === "LA "
      ? (city = "Los Angeles")
      : (city = "New York City");
    p += reverseArray[0] + " " + city + " " + reverseArray[2];
    return p;
  };
  return (
    <div className="App">
      <div>
        {
          //looping over Dollar sign entries
          COMMA_ENTRIES.map((e) => (
            // calling function comma_seprator for find data in specific manner
            <p>{comma_seprator(e)}</p>
          ))
        }
      </div>
      <div>
        {
          //looping over Dollar sign entries
          DOLLAR_ENTRIES.map((e) => (
            // calling function dollar_seprator for find data in specific manner
            <p>{dollar_seprator(e)}</p>
          ))
        }
      </div>
    </div>
  );
}

export default App;
