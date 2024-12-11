import Navigation from '../components/User/Sidenav/Navigation';
import Transaksi from '../components/User/Transaksi/Datatransaksi';

const Userpage = () => {
  return (
    <div>
      <Navigation />
      <div className="hide-navbar">
        <Transaksi />
      </div>
    </div>
  )
}

export default Userpage