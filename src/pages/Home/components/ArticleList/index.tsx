import useGetArticleList from "@/hooks/useGetArticleList"
import { List, Image, InfiniteScroll } from "antd-mobile"
import { useNavigate } from "react-router-dom"
export type Props = {
    channel_id: string
}
function ArticleList(props: Props) {
    const { channel_id } = props
    const { articleListRes, loadMore, hasMore } = useGetArticleList({ channel_id });
    const navigate = useNavigate();
    const goToDetail  = (art_id:string) => {
        navigate(`/detail?id=${art_id}`);
    }
    return (
        <>
            <List style={{ overflow: "auto", WebkitOverflowScrolling: 'touch' }}>
                {articleListRes.results.map(item => {
                    return (
                        <List.Item
                            onClick={() => goToDetail(item.art_id)}
                            key={item.art_id}
                            prefix={
                                item.cover.type !== '0' && <Image
                                    src={item.cover.images?.[0]}
                                    style={{ borderRadius: 20 }}
                                    fit="cover"
                                    width={40}
                                    height={40}
                                />
                            }
                            description={item.pubdate}
                        >
                            {item.title}
                        </List.Item>
                    )
                })}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10} />
        </>
    )
}
export default ArticleList;