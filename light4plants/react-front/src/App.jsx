import { useState, useEffect } from 'react'
import './App.css'
import Plantcard from './plantcard'
import Plantform from './Plantform';
function App() {

  const [allPlants, setAllPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]); // filtered plant list
  const[loading, setLoading] = useState(true);
  

  useEffect(() => { //this is the promise!
    fetch('http://localhost:3000/api/plants')//fetch from this api
      .then((response) => response.json()) //resolve in json once incoming stream has been parsed
      .then((data) => {
        setAllPlants(data)//set states to match data
        setFilteredPlants(data); // Show everything by default
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching plants:", error));//this runs if there's an error with the api
  }, []);//designed to sync components with external system, such as data fetching
  //useeffect runs after the component renders
  
  // This is the function we pass to the form
  function handleFilter(criteria) {
      const results = allPlants.filter((plant) => { //for eeach plant, check the following
      // 1. Check Light (String match)
      const lightMatch = plant.light_level.includes(criteria.light);

      // 2. Check Experience (String match)
      const expMatch = plant.difficulty.includes(criteria.experience);

      // 3. Check Type (Array check!)
      // Since your JSON uses arrays like ["leafy", "spiky"], we use .includes()
      const typeMatch = plant.plant_type.includes(criteria.type);

      // Only keep the plant if ALL THREE match
      return lightMatch && expMatch && typeMatch;
    });

    setFilteredPlants(results);
  }

  if (loading) return <p>Loading plants...</p>;

  return (
    <>

    <h1 className="pagetitle">Find your plant match!</h1>
    <div className="plantform">
      <Plantform filterPlants={handleFilter}/>
    </div>

<div className="plantgrid">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <Plantcard key={plant.id} plant={plant} />
          ))
        ) : (
          <div className="no-results">
            <p>No plants match those specific criteria!</p>
            <button className="noplantsbutton" onClick={() => setFilteredPlants(allPlants)}>Show all plants</button>
          </div>
        )}
      </div>
    </>
  )
}

export default App


