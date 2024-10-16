import { NetflixSeries } from "./Component/NetflixSeries";
import "./Component/NetflixSeries.css"


function App() {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  )
}

export default App
