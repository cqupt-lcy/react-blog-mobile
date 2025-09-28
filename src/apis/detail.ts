import { httpInstance } from "@/utils"
import type { ResType } from "./shared"
export type DetailDataType = {
    art_id: string,
    title: string,
    pubdate: string,
    aut_id: string,
    content: string,
    aut_name: string,
    aut_photo: string,
    is_followed: boolean,
    is_collected: boolean,
    attitude: number,
    comm_count: number,
    read_count: number,
    like_count: number,
}

export function fetchDetailAPI(id: string) {
    return httpInstance.request<ResType<DetailDataType>>({
        url: `/articles/${id}`,

    })
}