import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/dist/client/link';

const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((post, idx) => {
      if (post.match(/(#[^\s#]+)/g)) {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Link href={`/hashtag/${post.slice(1)}`} key={idx}>
            <a>{post}</a>
          </Link>
        );
      }
      return post;
    })}
  </div>
);

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
