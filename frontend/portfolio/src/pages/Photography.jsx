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
    "pride3.JPG"
];

const Photography = () => {
    return (
        <div className="page-content">
            <h1>Corporate/Event Photography</h1>
            <div className="photo-grid">
                {photoFilenames.map((filename, idx) => (
                    <div key={idx} className="photo-item">
                        <img src={require(`./images/photography/${filename}`)} alt={`photo-${idx}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photography;
