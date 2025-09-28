import { fetchChannelAPI } from "@/apis/list";
import { useEffect, useState } from "react"
import type { ChannelItem } from "@/apis/list";
const useGetChannelList = () => {
    const [channelList, setChannelList] = useState<ChannelItem[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetchChannelAPI();
            setChannelList(res.data.data.channels);
        }
        fetchData();
    }, [])
    return { channelList }
}
export default useGetChannelList;