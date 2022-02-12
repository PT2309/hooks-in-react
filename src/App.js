import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './CreateBlog';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Footer from './Footer';


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
                <Footer/>
            </Route>
            <Route path='/create'>
                <CreateBlog></CreateBlog>
            </Route>
            {/* Route Parameter */}
            <Route path='/blogs/:id'>
                <BlogDetails></BlogDetails>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
