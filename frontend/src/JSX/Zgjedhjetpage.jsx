import React from "react";
import '../CSS/zgjedhjet.css';
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import ak from "../img/ak.jpg"

const candidates = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    imageSrc: "../img/ak.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    imageSrc: "../img/ak.jpg",
    description: "Pellentesque euismod mi nec fermentum.",
  },
  {
    id: 3,
    name: "Alex",
    surname: "Johnson",
    imageSrc: "../img/ak.jpg",
    description: "Vivamus sit amet ante eget leo euismod facilisis.",
  },
];

function ZgjedhjetQendrore() {
  return (
    <>
        <Header/>
        <Sidebar/>
        <div className="zgjedhjet-qendrore">
            <h1>Kandidatët për Zgjedhjet Qendrore</h1>
            <div className="candidate-cards">
                {candidates.map((candidate) => (
                <div className="candidate-card" key={candidate.id}>
                    <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                    <div className="candidate-info">
                    <h2>{candidate.name} {candidate.surname}</h2>
                    <p>{candidate.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className="zgjedhjet-lokale">
            <h1>Kandidatët për Zgjedhjet Lokale</h1>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Prishtines!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Prizrenit!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Pejes!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Mitrovies!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Gjakoves!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Skenderajit!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Ferizajit!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Gjilanit!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="candidate-prishtine">
                <h3>Kandidatet per Komunen e Podujeves!</h3>
                <div className="candidate-cards">
                    {candidates.map((candidate) => (
                    <div className="candidate-card" key={candidate.id}>
                        <img src={candidate.imageSrc} alt={`${candidate.name} ${candidate.surname}`} />
                        <div className="candidate-info">
                        <h2>{candidate.name} {candidate.surname}</h2>
                        <p>{candidate.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default ZgjedhjetQendrore;
