import './App.css';
import DrumPads from './components/DrumPads';
import DrumTools from './components/DrumTools';
function App() {
  return (
    <div className="App">
      <div className="container overflow-hidden text-center">
        <div className="row main-container" id='drum-machine'>
          <div className="col-12 border border-warning border-5  p-3">
            <div className='row'>
              <div className='col-md-6'>
                <DrumPads />
              </div>
              <div className='col-md-6'>
                <DrumTools />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
