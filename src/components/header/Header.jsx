import { useEffect, useState } from 'react';

import HeaderMobile from './headerMobile/HeaderMobile';
import HeaderDesktop from './headerDesktop/HeaderDesktop';

const Header = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [window.innerWidth]);

    const Header = innerWidth > 810 ? <HeaderDesktop /> : <HeaderMobile />;

    return Header;
}

export default Header;