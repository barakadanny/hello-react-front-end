import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
        <Greetings/>
      </Provider>,
      </header>
    </div>
  );
}

export default App;
