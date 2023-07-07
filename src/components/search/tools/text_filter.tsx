import { motion, Variants } from 'framer-motion';
import { contentsList } from '@/utils/everything';
import { useState } from 'react';

import { search } from '@selector/sgis_selector';
import { useRecoilState } from 'recoil';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import '@scss/search.scss';

//text 검색창
function TextFilter() {
    const [clicked, setClicked] = useState(false);
    const [searchText, setSearchText] = useRecoilState(search);
    const [searchStat, setSearchStat] = useState('');
    const navigate = useNavigate();

    let list = [{ id: 'none', title: '' }]; // 검색 조건p과 일치하는 리스트
    let isVisible = false;

    const divVariants: Variants = {
        open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
            }
        },
        closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3
            }
        }
    };

    // const buttonVariants = {
    //     hover: (clicked: boolean) => ({
    //         scale: clicked ? 1 : 1.5
    //     }),
    //     pressed: { scale: 0.5 },
    //     init: { scale: 1 }
    // };

    // if (searchText) {
    //     list = [];
    //     contentsList.map((data) => {
    //         list.push(
    //             ...data.content.filter((text) => {
    //                 return text.title.replace(' ', '').toLocaleLowerCase().includes(searchText.trim().toLocaleLowerCase());
    //             })
    //         );
    //     });

    //     if (list.length > 0) {
    //         isVisible = true;
    //     }
    // }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const onChangeStat = (stat: string) => {
        setClicked(true);
        setSearchStat(stat);
    };

    return (
        <div className="box-wrapper">
            {/* 임시 */}
            대문
            {/* <div>
                <p className="text-2xl">어떤 통계를 찾고 계신가요?</p>
            </div>
            <div className="mt-4 flex flex-col">
                <input type="text" value={searchText} onChange={onChange}></input>
                <motion.nav className="searchFilter" initial={false} animate={isVisible ? 'open' : 'closed'}>
                    <motion.div className="border-solid border-2 border-gray-700 rounded-lg pt-2 pb-2 mt-4" variants={divVariants} style={{ pointerEvents: isVisible ? 'auto' : 'none' }}>
                        {list.map((x) => (
                            <motion.button
                                className="block border-gray-300 text-center"
                                initial="init"
                                whileHover="hover"
                                whileTap="pressed"
                                variants={buttonVariants}
                                custom={clicked}
                                onClick={() => onChangeStat(x.id)}
                                key={x.id}
                            >
                                {x.title}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.nav>
                <Button color="white" variant="filled" className="block text-center mt-4 font-bold text-gray-800 rounded-md" onClick={goNext}>
                    검색
                </Button>
            </div> */}
        </div>
    );
}

export default TextFilter;
