import './assets/style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import ResidentalWashFlod from './pages/residentalWashAndFlod';
import Fold from './pages/fold';
import Load from './pages/load';
import InProgress from './pages/progress';
import AttendenceDriver from './pages/AttendenceDriver/index.jsx';
import Layout from './components/layout';
const App = () => {
  return (
    <Router>
      <Layout headerText="Testing">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/residental-wash-&-flod" element={<ResidentalWashFlod />} />
          <Route exact path="/fold" element={<Fold />} />
          <Route exact path="/load" element={<Load />} />
          <Route exact path="/in-progress" element={<InProgress />} />
          <Route exact path="/attendence" element={<AttendenceDriver />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
