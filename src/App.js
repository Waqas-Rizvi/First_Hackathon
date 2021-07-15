import './App.css';
import { AppRouter } from "./Config/Router";
import { Provider } from 'react-redux'
import store from './Store/Index'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
