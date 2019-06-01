import React from "react";
import moment from "moment";
import { List, Avatar } from "antd";
import "./hotPost.css";

interface Props {
  hotPostDatas: object[];
  openModal: (pno: number, userId: number) => void;
}

interface Item {
  pno: number;
  userid: number;
  title: string;
  thumbnail: string;
  nickname: string;
  wrDate: string;
  likeCnt: number;
}

const HotPost = ({ hotPostDatas, openModal }: Props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={hotPostDatas}
      renderItem={(item: Item) => (
        <List.Item
          className="listWrap"
          onClick={() => {
            openModal(item.pno, item.userid);
          }}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.thumbnail} />}
            title={item.title}
            description={`${item.nickname} (${moment(item.wrDate).format(
              "YYYY-MM-DD"
            )})`}
          />
          <span>{item.likeCnt}</span>
          <span
            className="hotChart"
            style={{
              width: `${item.likeCnt}%`
            }}
          />
        </List.Item>
      )}
    />
  );
};

export default HotPost;