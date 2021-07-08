import React from 'react';
import { List, Card, Button } from 'antd';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { REMOVE_FOLLOWERS_REQUEST, UNFOLLOW_REQUEST } from '../actions/user';

const FollowList = ({ header, data }) => {
  const dispatch = useDispatch();
  const unfollow = (id) => () => {
    if (header === '팔로잉') {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
    } else {
      dispatch(({
        type: REMOVE_FOLLOWERS_REQUEST,
        data: id,
      }));
    }
  };

  return (
    <List
      loadMore={(
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>더 보기</Button>
        </div>
      )}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]} onClick={unfollow(item.id)}>
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
FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.shape().isRequired,
};

export default FollowList;
