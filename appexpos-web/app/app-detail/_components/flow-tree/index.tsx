"use client";

import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import clsx from "clsx";

const treeData: TreeDataNode[] = [
  {
    title: "用户操作",
    key: "0-0-0",
    children: [
      { title: "Onboarding", key: "0-0-0-0" },
      { title: "Home", key: "0-0-0-1" },
      { title: "Logging in", key: "0-0-0-2" },
      { title: "Logging out", key: "0-0-0-3" },
      { title: "Resetting password", key: "0-0-0-4" },
      { title: "Notifications", key: "0-0-0-5" },
      { title: "Profile", key: "0-0-0-6" },
      { title: "Messages", key: "0-0-0-7" },
      { title: "Giving feedback", key: "0-0-0-8" },
      { title: "Help center", key: "0-0-0-9" },
      { title: "Airbnb support", key: "0-0-0-10" },
      { title: "How Airbnb works", key: "0-0-0-11" },
    ],
  },
  {
    title: "住宿相关",
    key: "0-0-1",
    children: [
      {
        title: "住宿浏览与详情",
        key: "0-0-1-0",
        children: [
          { title: "Displaying total price", key: "0-0-1-0-0" },
          { title: "Listing detail", key: "0-0-1-0-1" },
          { title: "Photo gallery", key: "0-0-1-0-2" },
          { title: "View bedrooms", key: "0-0-1-0-3" },
          { title: "About listing space", key: "0-0-1-0-4" },
          { title: "Amenities", key: "0-0-1-0-5" },
          { title: "View listing location", key: "0-0-1-0-6" },
          { title: "Reviews", key: "0-0-1-0-7" },
          { title: "Searching reviews", key: "0-0-1-0-8" },
          { title: "Sorting reviews", key: "0-0-1-0-9" },
          { title: "Host profile", key: "0-0-1-0-10" },
        ],
      },
      {
        title: "住宿搜索与过滤",
        key: "0-0-1-1",
        children: [
          { title: "Searching stays", key: "0-0-1-1-0" },
          { title: "Filtering search results (stays)", key: "0-0-1-1-1" },
          { title: "View similar listings", key: "0-0-1-1-2" },
        ],
      },
      {
        title: "住宿预订",
        key: "0-0-1-2",
        children: [
          { title: "Booking a stay", key: "0-0-1-2-0" },
          { title: "Reservation details (stays)", key: "0-0-1-2-1" },
          { title: "Add more guests", key: "0-0-1-2-2" },
          { title: "Cancellation policy", key: "0-0-1-2-3" },
          { title: "House rules", key: "0-0-1-2-4" },
        ],
      },
    ],
  },
  {
    title: "体验活动相关",
    key: "0-0-2",
    children: [
      {
        title: "体验活动浏览与详情",
        key: "0-0-2-0",
        children: [
          { title: "Experience detail", key: "0-0-2-0-0" },
          { title: "Host passport", key: "0-0-2-0-1" },
        ],
      },
      {
        title: "体验活动搜索与过滤",
        key: "0-0-2-1",
        children: [
          { title: "Searching experiences", key: "0-0-2-1-0" },
          {
            title: "Filtering search results (experiences)",
            key: "0-0-2-1-1",
          },
        ],
      },
      {
        title: "体验活动预订",
        key: "0-0-2-2",
        children: [
          { title: "Booking an experience", key: "0-0-2-2-0" },
          { title: "Reservation details (experience)", key: "0-0-2-2-1" },
        ],
      },
    ],
  },
  {
    title: "愿望清单",
    key: "0-0-3",
    children: [
      { title: "Wishlist", key: "0-0-3-0" },
      { title: "Saving a listing to wishlist", key: "0-0-3-1" },
      { title: "Filtering wishlist", key: "0-0-3-2" },
      { title: "Share a wishlist", key: "0-0-3-3" },
      { title: "Deleting a wishlist", key: "0-0-3-4" },
    ],
  },
  {
    title: "行程与预订",
    key: "0-0-4",
    children: [
      { title: "Trips", key: "0-0-4-0" },
      { title: "Send trip details", key: "0-0-4-1" },
      { title: "Share itinerary", key: "0-0-4-2" },
      { title: "Reporting a listing", key: "0-0-4-3" },
      { title: "Add coupons", key: "0-0-4-4" },
    ],
  },
  {
    title: "用户账户",
    key: "0-0-5",
    children: [
      {
        title: "基本设置",
        key: "0-0-5-0",
        children: [
          { title: "Creating a profile", key: "0-0-5-0-0" },
          { title: "Verifying identity", key: "0-0-5-0-1" },
          { title: "Adding a phone number", key: "0-0-5-0-2" },
          { title: "Adding profile photo", key: "0-0-5-0-3" },
        ],
      },
      {
        title: "消息与沟通",
        key: "0-0-5-1",
        children: [
          { title: "Messaging host", key: "0-0-5-1-0" },
          { title: "Adding message to host", key: "0-0-5-1-1" },
        ],
      },
      {
        title: "登录与安全",
        key: "0-0-5-2",
        children: [{ title: "Login & security", key: "0-0-5-2-0" }],
      },
    ],
  },
];

interface FollowTreeProps {
  className?: string;
}

export const FollowTree = (props: FollowTreeProps) => {
  const { className } = props;
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <Tree
      className="w-[300px]"
      showLine
      defaultExpandAll={true}
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={["0-0-0"]}
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};
