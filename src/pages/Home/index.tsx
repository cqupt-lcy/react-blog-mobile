import './index.css'
import { Tabs } from 'antd-mobile'
import useGetChannelList from '@/hooks/useGetChannelList'
import List from './components/ArticleList';
function Home() {
    const { channelList } = useGetChannelList();
    return (
        <div className='tabContainer'>
            <Tabs defaultActiveKey={'0'}>
                {channelList.map(item => {
                    return (
                        <Tabs.Tab title={item.name} key={item.id}>
                            <div className='listContainer'>
                                <List channel_id={item.id + ''}></List>
                            </div>
                        </Tabs.Tab>
                    )
                })}
            </Tabs>
        </div>
    )
}
export default Home