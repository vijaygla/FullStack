import seriesData from "../api/data.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
    return (
        <ul className="grid grid-three--cols">
            {seriesData.map((curElem) => (
                <SeriesCard key={curElem.id} data={curElem} />
            ))}
        </ul>
    );
};
