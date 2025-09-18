import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";

const Photography = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("/photos.json")
            .then((res) => res.json())
            .then(setPhotos);
    }, []);

    return (
        <div className="page-content">
            <h1>Corporate/Event Photography</h1>
            <Gallery photos={photos} />
        </div>
    );
};

export default Photography;
