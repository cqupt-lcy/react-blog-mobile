import { fetchDetailAPI, type DetailDataType } from "@/apis/detail";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function useGetArticleDetail() {
    const [detail, setDetail] = useState<DetailDataType | null>(null);
    const [params] = useSearchParams();
    const id = params.get('id');
    useEffect(() => {
        async function fetchData(id: string) {
            const res = await fetchDetailAPI(id);
            setDetail(res.data.data);
        }
        fetchData(id!);
    }, [id])
    return { detail }
}
export default useGetArticleDetail;