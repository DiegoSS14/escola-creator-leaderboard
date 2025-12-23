
import { fakeUsers } from "../api/api.fake";
import api from "../api/client";
import PaginationProps from "./interfaces/PaginationProps";
import UserProps from "./interfaces/User";

export function getWeeklyRanking(params?: PaginationProps) {
    // return api<UserProps>("/weekly", {
    //     method: 'GET',
    //     ...params,
    // })

    return fakeUsers
}

export function getMounthRanking(params?: PaginationProps) {
    return fakeUsers
}

export function getAllTimeRanking(params?: PaginationProps) {
    return fakeUsers
}