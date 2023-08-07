import React from "react";
import '../CSS/zgjedhjetqendrore.css';
import voteimg1 from '../img/ak.jpg';
import voteimg2 from '../img/hth.jpg';
import voteimg3 from '../img/rh.jpg';

function VotoPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //submisiion logic
  };

  
  return (
    <div className="votoketu">
      <h1>Voto Zgjedhjet Qendrore!</h1>
      <div className="main-images-container">
        <div className="main-image">
          <div className="form-wrapper">
            <img src={voteimg1} alt="Vote 1" />
            <h3 className="image-title">Albin Kurti</h3>
            <p>Kandidat i Vetevendosjes per Kryeminister <br></br>te Republikes se Kosoves</p>
            <form onSubmit={handleSubmit}>
              <button type="submit">Voto</button>
            </form>
          </div>
        </div>
        <div className="main-image">
          <div className="form-wrapper">
            <img src={voteimg2} alt="Vote 2" />
            <h3 className="image-title">Hashim Thaci</h3>
            <p>Kandidat i Partise Demokratike te Kosoves per Kryeminister <br></br>te Republikes se Kosoves</p>
            <form onSubmit={handleSubmit}>
              <button type="submit">Voto</button>
            </form>
          </div>
        </div>
        <div className="main-image">
          <div className="form-wrapper">
            <img src={voteimg3} alt="Vote 3" />
            <h3 className="image-title">Ramush Haradinaj</h3>
            <p>Kandidat i Aleances per ardhmerine e Kosoves per Kryeminister <br></br> te Republikes se Kosoves</p>
            <form onSubmit={handleSubmit}>
              <button type="submit">Voto</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotoPage;
