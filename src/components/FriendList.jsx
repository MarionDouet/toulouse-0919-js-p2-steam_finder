import React from 'react';
import './FriendList.css';
import FriendInfo from './FriendInfo';

const FriendList = ({ Friends }) =>
  Friends.map(friend => (
    <div key={friend.steamid} className="One-Friend">
      <FriendInfo friendId={friend.steamid} />
    </div>
  ));

export default FriendList;
