import './App.css';
import { Provider } from 'react-redux';
import Greetings from './components/Greetings';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Greetings />
        </Provider>
        ,
      </header>
    </div>
  );
}

export default App;
