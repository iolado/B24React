import { useEffect, useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  useEffect(() => {
    if (show && show.episodes.length > 0) {
      setSelectedEpisode(show.episodes[0]);
    } else {
      setSelectedEpisode(null);
    }
  }, [show]);

  
  if (!show) {

  return (
      <div className="show-details">
        <p>Please select a show to view its episodes.</p>
      </div>
    );
  }

  return (
    <div className="show-details">

      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />

      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
