import { Catalog, Home, Services } from 'pages';
import { Footer, Header } from 'components';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/servises" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
