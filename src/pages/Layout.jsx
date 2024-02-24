import { Outlet } from "react-router-dom";
import Upload from '../components/admin/Upload'

const Layout = () => {
  return (
      <div>
        <Outlet />
      </div>
  );
};

export default Layout;
