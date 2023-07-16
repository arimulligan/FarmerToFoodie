import NavBar from './NavBar';
import './style/farmersNearMe.css';

const FarmersNearMe = () =>{
  return (
        <div className="farmers-near">
            <NavBar/>
          <h1 className="text-wrapper">Farmers Near Me</h1>
          <div className="overlap">
            <div className="overlap-wrapper-1">
              <div className="image-cropper">
                <img
                  class="rounded"
                  alt="Mask group"
                  src="https://img.freepik.com/free-vector/people-traveling-collection_52683-2822.jpg?size=626&ext=jpg&uid=R109828374&semt=ais"
                />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="image-cropper">
                <img
                  class="rounded"
                  alt="Mask group"
                  src="https://img.freepik.com/free-vector/farmers-using-agricultural-technology-vector_53876-116043.jpg?size=626&ext=jpg&uid=R109828374&semt=ais"
                />
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="image-cropper">
                <img
                  class="rounded"
                  alt="Mask group"
                  src="https://img.freepik.com/free-vector/farmer-cartoon-character_1284-4599.jpg?size=626&ext=jpg&uid=R109828374&semt=ais"
                />
              </div>
            </div>
            <img
              className="star"
              alt="Star"
              src="https://generation-sessions.s3.amazonaws.com/9ed66c6ff23e98ab86c9c32a9916064f/img/star-1.svg"
            />
            <div className="text-wrapper-2">3.4</div>
            <img
              className="img"
              alt="Star"
              src="https://generation-sessions.s3.amazonaws.com/9ed66c6ff23e98ab86c9c32a9916064f/img/star-1.svg"
            />
            <div className="text-wrapper-3">3.4</div>
            <img
              className="star-2"
              alt="Star"
              src="https://generation-sessions.s3.amazonaws.com/9ed66c6ff23e98ab86c9c32a9916064f/img/star-1.svg"
            />
            <div className="text-wrapper-4">3.4</div>
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/9ed66c6ff23e98ab86c9c32a9916064f/img/rectangle-21.svg"
            />
          </div>
        </div>
  );
}

export default FarmersNearMe;