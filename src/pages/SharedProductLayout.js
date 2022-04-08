import { Outlet } from 'react-router-dom';

import StyledNavBar from '../components/StyledNavBar';

const Home = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
};
export default Home;