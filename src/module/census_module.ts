import axios from 'axios';
import {
    CompanyInfo,
    CompanyReq,
    DemograhicInfo,
    DemographicsReq,
    FarmHouseHoldInfo,
    FarmHouseHoldReq,
    FisheryHouseHoldInfo,
    FisheryHouseHoldReq,
    ForestryHouseHoldInfo,
    ForestryHouseHoldReq,
    HouseCountInfo,
    HouseCountReq,
    HouseHoldInfo,
    HouseholdmemberInfo,
    HouseholdmemberReq,
    HouseHoldReq
} from '@/interface/census';

export async function getDemographicsInfo(param: DemographicsReq) {
    let result: DemograhicInfo[] = [];
    try {
        await axios
            .get(`/api/OpenAPI3/stats/searchpopulation.json`, {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('인구 조사 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}

export async function getHouseHoldInfo(param: HouseHoldReq) {
    let result: HouseHoldInfo[] = [];
    try {
        await axios
            .get('/api/OpenAPI3/stats/household.json', {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('가구 통계 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}

export async function getHouseCountInfo(param: HouseCountReq) {
    let result: HouseCountInfo[] = [];
    try {
        await axios
            .get('/api/OpenAPI3/stats/house.json', {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('주택 통계 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}

export async function getCompanyInfo(param: CompanyReq) {
    let result: CompanyInfo[] = [];
    try {
        await axios
            .get('/api/OpenAPI3/stats/company.json', {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('사업체 통계 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}

export async function getFarmHouseHoldInfo(param: FarmHouseHoldReq) {
    let result: FarmHouseHoldInfo[] = [];
    try {
        await axios
            .get('/api/OpenAPI3/stats/farmhousehold.json', {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('농가 통계 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}

export async function getForestryHouseHoldInfo(param: ForestryHouseHoldReq) {
    let result: ForestryHouseHoldInfo[] = [];
    try {
        await axios
            .get('/api/OpenAPI3/stats/forestryhousehold.json', {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('임가 통계 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}

export async function getFisheryHouseHoldInfo(param: FisheryHouseHoldReq) {
    let result: FisheryHouseHoldInfo[] = [];
    try {
        await axios
            .get('/api/OpenAPI3/stats/fisheryhousehold.json', {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('어가 통계 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}

export async function getHouseHoldMemberInfo(param: HouseholdmemberReq) {
    let result: HouseholdmemberInfo[] = [];
    try {
        await axios
            .get('/api/OpenAPI3/stats/householdmember.json', {
                params: param
            })
            .then((res) => {
                if (isSuccess(res.data.errMsg)) result = res.data.result;

                console.debug('가구원 통계 처리 >> ', result);
            });
    } catch (error) {
        throw error;
    }
    return result;
}
/**
 * @Param msg : axios 호출 응답 유형
 */
function isSuccess(msg: string) {
    return msg === 'Success';
}
