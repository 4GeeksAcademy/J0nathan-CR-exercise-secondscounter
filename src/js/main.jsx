import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import SecondsCounter from './components/SecondsCounter'


const root = ReactDOM.createRoot(document.getElementById('root'));
let seconds = 0;

setInterval(() => {
  const three = Math.floor(seconds / 100) % 10;
  const two = Math.floor(seconds / 10) % 10;
  const one = seconds % 10;

  root.render(
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary text-black">
      <div className="text-center border border-5 border-warning p-5 rounded-pill shadow-lg bg-dark">
        <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} />
        <button className="btn btn-warning mt-3 fw-bold" onClick={() => window.location.reload()}>
          RESET
        </button>
      </div>
    </div>
  );

  seconds++;
}, 1000);


