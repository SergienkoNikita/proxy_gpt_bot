import {getIpInfo} from "./get-ip-info";
import {logger} from "@/utils/logger";

export const isRussianIP = async () => {
    const {ip, country, cc} = await getIpInfo();
    logger.info(`connected IP: ${ip}; country: ${country}; country code: ${cc}`)

    return country === 'Russia' || cc === 'RU'
}