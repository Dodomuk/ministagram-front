import { contentsList } from '@/utils/everything';
import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import SearchImg from '@assets/search-icon.png';
import { useRecoilState } from 'recoil';
import { selectedItem } from '@selector/sgis_selector';

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [searchItem, setSearchItem] = useRecoilState(selectedItem);

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const onChange = (item: string) => {
        setSearchItem(item);
    };

    const itemList = contentsList['센서스'].flatMap((item) => item.title.replace('통계', ''));

    const navList = (
        <ul className="mb-4 mt-2 lg:mb-0 lg:mt-0 flex flex-col lg:flex-row gap-2 items-center lg:gap-6">
            <div>
                <img src={SearchImg} className="about-korea-img object-scale-down w-10" alt="about korea"></img>
            </div>
            {itemList.map((item) => (
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" key={`통계_${item}`} onClick={() => onChange(item)}>
                    <a href="#" className="flex items-center">
                        {item}
                    </a>
                </Typography>
            ))}
        </ul>
    );

    function navClick() {
        setOpenNav(!openNav)
    }

    return (
        <Navbar className="fixed top-0 left-0 right-0 mx-auto max-w-max py-2 px-4 lg:px-8 lg:py-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => navClick()}
            >
                {openNav ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </IconButton>
            <MobileNav open={openNav}>
                <div className="container mx-auto" onClick={() => navClick()}>{navList}</div>
            </MobileNav>
        </Navbar>
    );
};

export default NavBar;
