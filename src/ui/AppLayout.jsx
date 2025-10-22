import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if(isLoading) return <Spinner/>
    return (
      <div className="w-[90%] mx-auto">
        
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    );
}

export default AppLayout
