import './App.css';

function App({children}) {
  return (
    <div className="App">
      <div className='sector'>
            <div className='sector-center App-color range'>
              <div className=' block'>
                {children}
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
