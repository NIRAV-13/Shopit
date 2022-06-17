
import WishlistArray from './wishListArray';
import WishCard from './wishCard';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Wishlist = (props) => {
    console.log(props)

    return (
        <>
        <NavBar></NavBar>
        <h1>Your Wishlist</h1>
        <WishCard wishJson = {WishlistArray}></WishCard>
        <Footer></Footer>
        </>
    );
}

export default Wishlist;