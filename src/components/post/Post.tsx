import { Col, Row, Avatar } from "antd";
import moment from "moment";

// components
import Tags from "../common/Tags";
import Likes from "../common/Likes";
import { Code } from "../common/CodeView/CodeView";

import "./post.css";

interface PostItem {
  postData: {
    title: string;
    writer: string;
    wrDate: string;
    upDate: string;
    contents: string;
    hashes?: string;
    likes: number;
  };
}

const PostItem = ({ postData }: PostItem) => {
  const hashArry = postData.hashes.split(",");
  return (
    <div className="postList">
      <div className="postListHeader">
        <p>{postData.title}</p>
        <div className="postInfo">
          <span>
            <Avatar style={{ backgroundColor: "#000", marginRight: 10 }}>
              {postData.writer.substring(1)}
            </Avatar>
            <span>BY. {postData.writer}</span>
          </span>
          <span className="postDate">
            {moment(postData.wrDate).format("ll")}
          </span>
        </div>
      </div>
      <div className="postListBody">
        <Code markdown={postData.contents} type="post" />
      </div>
      <div className="postListfooter">
        <Tags tagDatas={hashArry} />
        <Likes likeDatas={postData.likes} />
      </div>
    </div>
  );
};

const Post = ({ postDatas }) => {
  let postList = postDatas.map((postData, index) => {
    return (
      <Col xs={24} md={24} lg={24} xl={12} key={index}>
        <PostItem postData={postData} />
      </Col>
    );
  });

  return (
    <Row type="flex" justify="space-between" gutter={32} className="posthWrap">
      {/* {postList.length > 0 ? postList : <None dataTitle="포스트" />} */}
      {postList}
    </Row>
  );
};

export default Post;
