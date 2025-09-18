import { useState } from "react";

const photoFilenames = [
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

const Photography = () => {
    const [category, setCategory] = useState("corporate");

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

            {category === "corporate" ?
                <div className="photo-grid">
                    {photoFilenames.map((filename, idx) => (
                        <div key={idx} className="photo-item">
                            <img src={require(`./images/photography/${filename}`)} alt={`photo-${idx}`} />
                        </div>
                    ))}
                </div>
                : <div className="instagram-widget">
                    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                    <iframe src="//lightwidget.com/widgets/1f6c17526a58553c98293b0df713c6c0.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style={{"width": "100%", "border": "0", "overflow": "hidden"}}></iframe>
                </div>
            }
        </div>
    );
};

export default Photography;
