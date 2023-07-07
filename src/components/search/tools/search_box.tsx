import { useState } from 'react';

import '@scss/search.scss';

import { accessKey } from '@/selector/sgis_selector';

import { Button, Typography } from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { SearchTool } from '@/interface/common';

import YearBox from '@components/search/tools/boxs/year_box';
import GenderBox from '@components/search/tools/boxs/gender_box';
import AgePoolBox from '@components/search/tools/boxs/age_pool_box';
import HouseHoldTypeBox from '@components/search/tools/boxs/household_type_box';
import OceanSurfaceTypeBox from './boxs/ocean_type_box';
import IndustryTypeBox from './boxs/industry_type_box';
import HouseTypeBox from './boxs/house_type_box';
import HouseAreaTypeBox from './boxs/house_area_type';

const SearchBox = (props: {
    callFunc(params: any): void;
    tools: {
        essentials: SearchTool[];
        options?: SearchTool[] | undefined;
    };
}) => {
    const key = useRecoilValue(accessKey);
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedGender, setSelectedGender] = useState(0);
    const [selectedAgePool, setSelectedAgePool] = useState('');
    const [selectedHouseType, setSelectedHouseType] = useState('');
    const [selectedHouseHoldType, setSelectedHouseHoldType] = useState('');
    const [selectedHouseAreaType, setSelectedHouseAreaType] = useState('');
    const [selectedOceanSurfaceType, setSelectedOceanSurfaceType] = useState(0);
    const [selectedIndustryType, setSelectedIndustryType] = useState(0);

    const optionMap = new Map();

    function yearSelect(year: number) {
        setSelectedYear(year);
    }

    function genderSelect(gender: number) {
        setSelectedGender(gender);
    }

    function agePoolSelect(agePool: string) {
        setSelectedAgePool(agePool);
    }

    function houseTypeSelect(houseType: string) {
        setSelectedHouseType(houseType);
    }

    function houseHoldTypeSelect(houseHoldType: string) {
        setSelectedHouseHoldType(houseHoldType);
    }

    function houseAreaTypeSelect(houseAreaType: string) {
        setSelectedHouseAreaType(houseAreaType);
    }

    function oceanSurfaceSelect(oceanSurfaceType: number) {
        setSelectedOceanSurfaceType(oceanSurfaceType);
    }

    function industryTypeSelect(industryType: number) {
        setSelectedIndustryType(industryType);
    }

    // 필수 입력 값
    function EssentialTools() {
        const essentials = props.tools.essentials || [];

        const jsxList: JSX.Element[] = [];

        const yearBoxContainer = <YearBox yearSelect={yearSelect} key="year" />;
        const oceanSerfaceTypeContainer = <OceanSurfaceTypeBox oceanSurfaceTypeSelect={oceanSurfaceSelect} key="oceanSurface" />;
        const industryTypeContainer = <IndustryTypeBox industryTypeSelect={industryTypeSelect} key="industry" />;

        essentials.forEach((essential) => {
            switch (essential) {
                case SearchTool.YEAR:
                    jsxList.push(yearBoxContainer);
                    break;
                case SearchTool.OCEAN_SURFACE_TYPE:
                    jsxList.push(oceanSerfaceTypeContainer);
                    break;
                case SearchTool.INDUSTRY_TYPE:
                    jsxList.push(industryTypeContainer);
                    break;
            }
        });

        return (
            <>
                {jsxList.map((x, index) => (
                    <div className="container-box mt-4" key={`container_${index}`}>
                        {x}
                    </div>
                ))}
            </>
        );
    }

    // 선택 입력 값
    function OptionalTools() {
        const options = props.tools.options || [];

        const jsxList: JSX.Element[] = [];

        const genderBoxContainer = <GenderBox genderSelect={genderSelect} key="gender" />;
        const agePoolBoxContainer = <AgePoolBox agePoolSelect={agePoolSelect} key="agePool" />;
        const houseHoldTypeBoxContainer = <HouseHoldTypeBox houseHoldTypeSelect={houseHoldTypeSelect} key="houseHoldType" />;
        const houseTypeBoxContainer = <HouseTypeBox houseTypeSelect={houseTypeSelect} key="houseType" />;
        const houseAreaTypeBoxContainer = <HouseAreaTypeBox houseAreaTypeSelect={houseAreaTypeSelect} key="houseAreaType" />;

        options.forEach((option) => {
            let jsxContainer;
            switch (option) {
                case SearchTool.GENDER: {
                    jsxList.push(genderBoxContainer);
                    break;
                }
                case SearchTool.AGE_TYPE: {
                    jsxList.push(agePoolBoxContainer);
                    break;
                }
                case SearchTool.HOUSEHOLD_TYPE: {
                    jsxList.push(houseHoldTypeBoxContainer);
                    break;
                }
                case SearchTool.HOUSE_TYPE: {
                    jsxList.push(houseTypeBoxContainer);
                    break;
                }
                case SearchTool.HOUSE_AREA_TYPE: {
                    jsxList.push(houseAreaTypeBoxContainer);
                    break;
                }
            }
        });

        return (
            <>
                {jsxList.map((x, index) => (
                    <div className="container-box mt-4" key={`container_${index}`}>
                        {x}
                    </div>
                ))}
            </>
        );
    }

    // 로직 개선 필요함
    function optionMapSetting() {
        // 기본 access key 세팅
        optionMap.set('accessToken', key);

        // 요구사항에 맞는 param 세팅
        const essentials = props.tools.essentials;
        const options = props.tools.options || [];
        essentials.forEach((essential) => {
            switch (essential) {
                case SearchTool.YEAR:
                    optionMap.set('year', selectedYear);
                    break;
                case SearchTool.OCEAN_SURFACE_TYPE:
                    optionMap.set('oga_div', selectedOceanSurfaceType);
                    break;
                case SearchTool.INDUSTRY_TYPE:
                    optionMap.set('data_type', selectedIndustryType);
                    break;
            }
        });
        options.forEach((option) => {
            switch (option) {
                case SearchTool.GENDER: {
                    optionMap.set('gender', selectedGender);
                    break;
                }
                case SearchTool.AGE_TYPE: {
                    optionMap.set('age_type', selectedAgePool);
                    break;
                }
                case SearchTool.HOUSEHOLD_TYPE: {
                    optionMap.set('household_type', selectedHouseHoldType);
                    break;
                }
                case SearchTool.HOUSE_TYPE: {
                    optionMap.set('house_type', selectedHouseType);
                    break;
                }
                case SearchTool.HOUSE_AREA_TYPE: {
                    optionMap.set('house_area_cd', selectedHouseAreaType);
                    break;
                }
            }
        });
    }

    async function getViewModel() {
        optionMapSetting();

        const param = Object.fromEntries(optionMap);

        props.callFunc(param);
    }

    return (
        <div className="box-wrapper">
            {/* 년도 select */}
            <Typography variant="h4" color="white">
                조건을 입력하세요
            </Typography>
            {/* <Typography color="gray" className="mt-1 font-normal">
                추후 검색된 값 넣음
            </Typography> */}
            <form className="box-form mt-8 mb-2 xl:w-96 max-w-screen-lg">
                <EssentialTools />
                <OptionalTools />
                <Button
                    color="white"
                    variant="filled"
                    className="block text-center mt-4 font-bold text-gray-800 rounded-md"
                    onClick={() => getViewModel()}
                >
                    검색
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SearchBox;
