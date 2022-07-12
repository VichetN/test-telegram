import './App.css';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'
import AnimationType from './components/AnimationType';
import nprogress from 'nprogress';
import UseAxiosCl from './components/UseAxiosCl';
import ScannerMathpix from './components/ScannerMathpix';
import Background from './components/Background';
import UseAHook from './components/UseAHook';
import EasyApp from './components/easypeasy/EasyApp';
import Voice from './components/voicespeech/Voice';
import AntTable from './components/AntTable';
import TelegramClientSend from './components/TelegramClient';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route
           
            path='/'
            element={<ExcelExport />}
          /> */}
          {/* <Route path='/' element={<UseAHook />} />
          <Route path='/useaxios' element={<UseAxiosCl />} /> */}
          {/* <Route path='/' element={<ScannerMathpix />} /> */}
          {/* <Route path='/' element={<Voice />} /> */}
          <Route path='/back' element={<Background />} />
          <Route path='/' element={<AntTable />} />
          {/* <Route path='/' element={<TelegramClientSend />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
