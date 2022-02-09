import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './CreateBlog';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';


// Templates
function App() {
    return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/create'>
                <CreateBlog></CreateBlog>
            </Route>
            <Route path='/blogs'>
                <BlogDetails></BlogDetails>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
