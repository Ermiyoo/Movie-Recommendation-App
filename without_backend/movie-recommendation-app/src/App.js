//+
import Login from './login';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginAdmin from './admin_login_page';

// default we redirect us to user homepage and /admin will redirect us to admin login page
function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Login></Login>} />
        <Route path='/admin' element={<LoginAdmin/>} />
    </Routes>
    </Router>
  );
}
export default App;
