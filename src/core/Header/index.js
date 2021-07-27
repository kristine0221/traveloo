import { useState } from 'react';
import Banner from '../../components/Banner';
import Navbar from './Navbar';


function Header() {

    const [bannerDetails, setBannerDetails] = useState({
        title: "FROM HIGHLANDS TO ISLANDS - 12D & 11N",
        author: "Cheska Rivano",
        url: '../../../images/bannerbg.jpg'
    })

    return (
        <div>
            <Navbar />
            <Banner  
              details={bannerDetails}
            />
        </div>
    )

}

export default Header;