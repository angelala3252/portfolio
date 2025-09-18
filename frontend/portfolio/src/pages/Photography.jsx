import { useState } from "react";

const corporatePhotoFilenames = [
    "cny1.JPG",
    "cny2.JPG",
    "cny3.JPG",
    "cny4.JPG",
    "cny5.JPG",
    "cny6.JPG",
    "cny7.JPG",
    "cny8.JPG",
    "cny9.JPG",
    "cny10.JPG",
    "cny11.JPG",
    "cny12.JPG",
    "cny13.JPG",
    "pride1.JPG",
    "pride2.JPG",
    "pride3.JPG",
    "pride4.JPG",
];

const personalPhotoFilenames = [
    "newf1.png",
    "newf2.jpg",
    "newf3.jpg",
    "newf4.png",
    "newf5.jpg",
    "newf6.jpg",
    "newf7.jpg",
    "newf8.jpg",
    "newf9.jpg",
    "newf10.jpg",
    "newf11.jpg",
    "newf12.jpg",
    "newf13.jpg",
    "newf14.jpg",
    "newf15.jpg",
    "kev1.jpg",
    "kev2.jpg",
    "kev3.jpg",
    "kev4.jpg",
    "kev5.jpg",
    "kev6.jpg",
    "kev7.jpg",
    "kev8.jpg",
    "kev9.jpg",
    "kev10.jpg",
    "kev11.jpg",
    "centre1.JPG",
];

const Photography = () => {
    const [category, setCategory] = useState("corporate");
    const photoFilenames = category === "corporate" ? corporatePhotoFilenames : personalPhotoFilenames;

    return (
        <div className="page-content">
            <div className="photography-menu">
                <button
                    onClick={() => setCategory("corporate")}
                    className={category === "corporate" ? "active" : ""}
                >
                    Corporate/Events
                </button>
                <button
                    onClick={() => setCategory("street")}
                    className={category === "street" ? "active" : ""}
                >
                    Street/Portrait
                </button>
            </div>

            <div className="photo-grid">
                {
                photoFilenames.map((filename, idx) => (
                    <div key={idx} className="photo-item">
                        <img src={require(`./images/photography/${filename}`)} alt={`photo-${idx}`} />
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Photography;
