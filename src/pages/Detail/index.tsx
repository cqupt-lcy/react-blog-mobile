import useGetArticleDetail from "@/hooks/useGetArticleDetail";
import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";

function Detail() {
    const { detail } = useGetArticleDetail();
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    if (!detail) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <NavBar onBack={back}>{detail.title}</NavBar>
            <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
        </div>
    )
}

export default Detail;