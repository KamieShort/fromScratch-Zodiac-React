import './App.css';

// import background from './background.jpg';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      {/* style={{ backgroundImage: `url(${background})` }}> */}

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
