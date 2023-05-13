 
import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';

const Main = () => {
        return (
                <div className='w-[85%] mx-auto'>
                        <Header></Header>
                        <Outlet></Outlet>
                        <Footer></Footer>
                </div>
        );
};

export default Main;