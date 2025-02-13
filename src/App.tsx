import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Issue from './pages/Issue';
import { client } from './api/apolloClients';

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:id" element={<Issue />} />
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
