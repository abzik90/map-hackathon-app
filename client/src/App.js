
import './App.css';
import AppRoutes from "./components/AppRoutes";
import {BrowserRouter} from "react-router-dom";
import { YMaps } from 'react-yandex-maps';
function App() {
    let api_key = 'e0db320b-6e57-4e1d-b4f3-1270dd4675d7'
  return (
      <BrowserRouter>
          <YMaps query={{ lang: 'en_RU', load:"package.full", apikey:api_key}}>
            <div className="App">
                <AppRoutes />
            </div>
          </YMaps>
      </BrowserRouter>
  );
}

export default App;
