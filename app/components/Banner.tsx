

function Banner() {
    return (
     <div className="vid">
        <video autoPlay loop muted plays-inline="true" className="back-video">
          <source src="./video-1.mp4" type="video/mp4" />
        </video>
    </div>
    )
}

export default Banner