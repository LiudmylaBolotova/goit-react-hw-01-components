import PropTypes from 'prop-types';
import style from '../FriendList/FriendList.module.css';
import { FriendListItem } from '../FriendsListItem/FriendListItem';

export const FriendList = props => {
  const { friends } = props;

  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
