import {getIpInfo} from "./get-ip-info";

export const isRussianIP = async () => {
    const {country, cc} = await getIpInfo();

    return country === 'Russia' || cc === 'RU'
}