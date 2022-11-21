import TableRow from "./tableRow";
import "./App.css";

function App() {
  return (
    <div className="mainDiv">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white">Quick portfolio - Chircă Vlad</h1>
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col-3">Nume</th>
              <th scope="col-1">Status</th>
              <th scope="col-8">Descriere</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              name="Eran"
              url="https://vicostar8.github.io/eran/"
              icon="bi-tools"
              description={[
                "Landing page (Home page) pentru Eran",
                "Proiectul este inca in lucru",
                "Realizat cu HTML / CSS / Javascript / ReactJS / Bootstrap",
              ]}
            />
            <TableRow
              name="School catalogue"
              url="https://vicostar8-school-inprogress.netlify.app/"
              icon="bi-tools"
              description={[
                "Pagina web pentru scoala si catalog online",
                "Partea functionala a proiectului este urmatoarea: adaugarea de noi discipline, adaugarea / editarea / stergerea unui profesor, adaugarea / editarea / stergerea unui elev, adaugarea unei note / absente in dreptul elevului, vizualizarea claselor si a cataloagelor. Urmeaza sa fie implementate partea de HomePage si partea de Contact.",
                "Proiectul este inca in lucru",
                "FrontEnd: HTML / CSS / Javascript / ReactJS",
                "BackEnd: NodeJS / Express",
                "Database: MongoDB",
              ]}
            />
            <TableRow
              name="Lights Out Game"
              url="https://vicostar8.github.io/lights-out-game/"
              icon="bi-check-circle"
              description={[
                "Joc inspirat dupa cel electronic cu acelasi nume",
                "Obiectivul jocului este de a inchide toate patratele. In momentul in care se apasa pe un patrat, acesta alaturi de vecinii sai (Nord-Est-Sud-Vest sau in forma de +) isi vor schimba starea (din stins in aprins sau invers).",
                "Realizat cu HTML / CSS / Javascript / ReactJS",
              ]}
            />
            <TableRow
              name="Tic-Tac-Toe Game"
              url="https://vicostar8.github.io/tic-tac-toe/"
              icon="bi-check-circle"
              description={[
                "Jocul clasic de X si 0",
                "Inainte sa inceapa duelul cei 2 jucatori dau cu zarul. Jucatorul cu valoarea zarului mai mare alege piesa (X sau 0), apoi incepe confruntarea",
              ]}
            />
            <TableRow
              name="Dad Jokes App"
              url="https://vicostar8.github.io/dad-jokes/"
              icon="bi-check-circle"
              description={[
                'Aplicatia consta in generarea de noi glume "zise de tata" in limba engleza. Modul de afisare al acestora este sub forma de conversatii pe un dispozitiv. Glumele pot fi adaugate la favorite (se apasa pe stea), se pot da "upvote" sau "downvote" si in functie de numarul de voturi se va schimba starea emoji-ului.',
                "Realizat cu HTML / CSS / ReactJS",
              ]}
            />
          </tbody>
        </table>
        <div className="text-white text-center">
          <div>
            <i className="bi bi-tools"></i> - In progress
          </div>
          <div>
            <i className="bi bi-check-circle"></i> - Done
          </div>
          <p>Pentru a putea accesa fiecare proiect apasa pe nume.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
