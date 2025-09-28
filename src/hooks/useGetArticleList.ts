import { fetchlistAPI, type ListRes } from "@/apis/list";
import { useEffect, useState } from "react"
import type { Props } from "@/pages/Home/components/ArticleList";
const useGetArticleList = (params: Props) => {
    const [articleListRes, setArticleListRes] = useState<ListRes>({
        results: [],
        pre_timestamp: '' + Date.now(),
    });
    const { channel_id } = params
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const res = await fetchlistAPI({ channel_id, timestamp: '' + Date.now() });
            setArticleListRes(res.data.data);
        }
        fetchData();
    }, [channel_id])
    const loadMore = async () => {
        const res = await fetchlistAPI({ channel_id, timestamp: articleListRes.pre_timestamp });
        setArticleListRes(
            {
                results: [...articleListRes.results, ...res.data.data.results],
                pre_timestamp: res.data.data.pre_timestamp,
            }
        )
        if (res.data.data.results.length === 0) {
            setHasMore(false);
        }
    }
    return { articleListRes, loadMore, hasMore }
}
export default useGetArticleList;