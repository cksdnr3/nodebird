import { List, Card, Button } from 'antd';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
    return (
        <List
            loadMore={
                <div style={{ textAlign: 'center', margin: '10px 0' }}>
                    <Button>더 보기</Button>
                </div>
            }
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item style={{ marginTop: 20 }}>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
            size="small"
            style={{ marginBottom: 20 }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            header={<div>{header}</div>}
        />
    );
};

FollowList.propType = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default FollowList;
