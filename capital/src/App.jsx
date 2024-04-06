import { useEffect, useState } from "react";
function App() {
  const [countries, setCountries] = useState("");
  const [capital, setCapital] = useState("");
  // Runs everytime whenever the capital state
  useEffect(() => {
    async function fetchData() {
      /*Since this is javascript area we can simply use capital without any template string or curly braces, but in the false condition we definetly need template string literal*/
      const url =
        capital === "" || capital === "none"
          ? "https://restcountries.com/v3.1/all"
          : `https://restcountries.com/v3.1/capital/${capital}`;
      const data = await fetch(url);
      const jsonData = await data.json();
      setCountries(jsonData);
    }
    fetchData();
    console.log(capital);
  }, [capital]);
  return (
    /*used flex on the parent so every children takesup full width of the parent */
    <div className="bg-gray-800 h-screen w-screen flex flex-col text-white spaece-y-20 items-center">
      <select
        name=""
        id="select"
        className="text-black w-[12vw] text-3xl"
        defaultValue="none"
        onChange={(e) => setCapital(e.target.value)}
      >
        <option value="New Delhi">New Delhi</option>
        <option value="Moscow">Moscow</option>
        <option value="D.C">Washington</option>
        <option value="Berlin">Berlin</option>
        <option value="none">None</option>
      </select>
      {countries.length > 0 &&
        /* () returns implicitly you dont have to return explicitly, so the li jsx element is returned*/
        /* when using {} you explicitly use the return keyword to return the jsx element*/
        countries.map((country, index) => (
          <li key={index} className="text-3xl">
            {country.name.common},{country.capital}
          </li>
        ))}
    </div>
  );
}

export default App;
