import { CommonReq, HttpCommonStatus } from '@interface/common';

export type DemographicsReq = {
    year: number; //기준년도
    gender?: number; //성별(default: 0)
    low_search?: number; //하위 통계 정보 유무("영역검색유무"가 행정구역일 경우)
    age_type?: number; //연령타임
    edu_level?: number; //교육정도( * 2010년까지 제공, 2015년도는 제공하지 않음)
    mrg_state?: number; //혼인상태( * 2010년까지 제공, 2015년도는 제공하지 않음)
} & CommonReq;

export type DemographicsRes = {
    result: DemograhicInfo[];
} & HttpCommonStatus;

export type DemograhicInfo = {
    adm_cd: string; //설명
    adm_nm: string; //행정구역명
    population: string; //인구수
    avg_age: number; //검색인구 평균나이
};

export type HouseHoldReq = {
    year: number; //기준년도
    low_search?: number; //하위 통계 정보 유무  "영역검색유무"가 행정구역일 경우
    household_type?: string; //1세대가구	01  2세대가구	02  3세대가구	03  4세대가구	04  5세대이상가구	05  1인가구	A0  비혈연가구	B0
    ocptn_type?: string; //자기집	1  전세(월세없음)	2  보증금 있는 월세	3  보증금 없는 월세	4  사글세	5  무상(관사,사택,친척집 등) 6
} & CommonReq;

export type HouseHoldRes = {
    result: HouseHoldInfo[];
} & HttpCommonStatus;

export type HouseHoldInfo = {
    adm_cd: string; //설명
    adm_nm: string; //행정구역명
    household_cnt: string; // 가구수
    family_member_cnt: string; // 총 가구원 수
    avg_family_member_cnt: string; // 평균가구원수
};

export type HouseCountReq = {
    year: number; //기준년도
    low_search?: number; //행정구역코드에 해당하는 정보만 요청 : 0 1단계 하위 행정구역 정보 요청 : 1 2단계 하위 행정구역 정보 요청 : 2 (default : 1)
    house_type?: string; //단독주택	01    아파트	02    연립주택	03    다세대주택	04    비거주용 건물(상가,공장,여관 등)내 주택	05    주택이외의 거처	06
    const_year?: string; //건축연도 * 2010년까지 제공, 2015연도는 제공하지 않음
    house_area_cd?: string; //주택면적코드
    house_use_prid_cd?: string; // 노후연수코드   * 2015,2016,2017년만 제공    * 건축연도와 동시에 사용할 수 없음
} & CommonReq;

export type HouseCountRes = {
    result: HouseCountInfo[];
} & HttpCommonStatus;

export type HouseCountInfo = {
    adm_cd: string; //설명
    adm_nm: string; //행정구역명
    house_cnt: string; // 주택수(호)
};

export type CompanyReq = {
    year: number;
    low_search?: number; // 행정구역코드에 해당하는 정보만 요청 : 0 1단계 하위 행정구역 정보 요청 : 1 2단계 하위 행정구역 정보 요청 : 2 (default : 1)
    class_code?: number; // 산업분류
    theme_cd?: number; // 테마코드, 산업체코드는 같이 사용할 수 없음
} & CommonReq;

export type CompanyRes = {
    result: CompanyInfo[];
} & HttpCommonStatus;

export type CompanyInfo = {
    adm_cd: string; // 행정구역코드
    adm_nm: string; // 행정구역명
    corp_cnt: string; // 사업체수(개)
    tot_worker: string; // 종사자수(명)
};

export type FarmHouseHoldReq = {
    year: number;
    low_search?: number;
} & CommonReq;

export type FarmHouseHoldRes = {
    result: FarmHouseHoldInfo[];
} & HttpCommonStatus;

export type FarmHouseHoldInfo = {
    adm_cd: string; //행정구역코드
    adm_nm: string; //행정구역명
    farm_cnt: string; //농가 수
    population: string; // 농가인구 수
    avg_population: string; //농가 평균 인구 수
};

/** 임가 통계 */
export type ForestryHouseHoldReq = {
    year: number;
    low_search?: number;
} & CommonReq;

export type ForestryHouseHoldRes = {
    result: ForestryHouseHoldInfo[];
} & HttpCommonStatus;

export type ForestryHouseHoldInfo = {
    adm_cd: string; // 행정구역코드
    adm_nm: string; // 행정구역명
    forestry_cnt: string; //	임가수(가구)
    population: string; // 임가인구수(명)
    avg_population: string; // 임가평균인구수(명)
};

/* 어가 통계  */
export type FisheryHouseHoldReq = {
    year: number;
    oga_div: number; //전체 : 0  내수면어가 : 1  해수면어가: 2
    low_search?: number;
} & CommonReq;

export type FisheryHouseHoldRes = {
    result: FisheryHouseHoldInfo[];
} & HttpCommonStatus;

export type FisheryHouseHoldInfo = {
    adm_cd: string; // 행정구역코드
    adm_nm: string; // 행정구역명
    fishery_cnt: string; // 어가 수
    population: string; // 어가인구 수
    avg_population: string; // 어가 평균 인구 수
};

/* 가구원 통계 */
export type HouseholdmemberReq = {
    year: number; // 기준 연도
    data_type: number; // 농가 : 1  임가: 2  해수면어가: 3 내수면어가: 4
    low_search?: number;
    gender?: number; //총합0 남자1 여자2
    age_from?: number; // 나이 0~150 from
    age_to?: number; // 나이 0~150 to
} & CommonReq;

export type HouseholdmemberRes = {
    result: HouseholdmemberInfo[];
} & HttpCommonStatus;

export type HouseholdmemberInfo = {
    adm_cd: string; // 행정구역코드
    adm_nm: string; // 행정구역명
    population: string; // 가구원수(명)
};
