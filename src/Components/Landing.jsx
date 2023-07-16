const Landing = () => {
    return (
        <div className="overlap">
        <div className="overlap-group">
            <h1 className="text-wrapper">Farmer to Foodie</h1>
            <img
            className="rectangle"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/68eb6af8c3c87c795c724916e6e050ee/img/rectangle-1.png"
            />
            <p className="p">Discover the roots of your food: empowering farmers and enriching communities!</p>
        </div>
        <a href="./FarmerLogin">
            <span className="p-wrapper">
                <p className="text-wrapper-2">I want to locally sell my farmed produce</p>
            </span>
        </a>
        <a href="./CustomerLogin">
            <span className="span">
                <p className="text-wrapper-3">I want to buy fresh, local produce</p>
            </span>
        </a>
        </div>
    );
}

export default Landing;