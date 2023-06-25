import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import 'swiper/swiper.min.css';
import { publicRoutes } from './config/routes';
import DefaultLayout from './components/layout/defaultlayout/DefaultLayout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        {publicRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = DefaultLayout;

                  if (route.layout) {
                      Layout = route.layout;
                  } else if (route.layout === null) {
                      Layout = Fragment;
                  }

                  return (
                      <Route
                          key={index}
                          path={route.path}
                          element={
                              <Layout>
                                  <Page />
                              </Layout>
                          }
                      />
                  );
              })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
