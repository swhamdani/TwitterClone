const dummyNotifications = {
  all: [
    {
      id: 1,
      name: 'John Doe',
      text: 'You have a new message from ',
      timestamp: '2 minutes ago',
      type: 'message',
    },
    {
      id: 2,
      name: 'Alice Smith',
      text: 'Your post received 5 new likes.',
      timestamp: '1 hour ago',
      type: 'like',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      text: 'New follower: Alice Smith.',
      timestamp: '4 hours ago',
      type: 'follow',
    },
    // Add more items here...
  ],
  verified: [
    {
      id: 4,
      name: 'Mary Johnson',
      text: 'Your account has been verified.',
      timestamp: '2 days ago',
      type: 'verifed',
    },
    {
      id: 5,
      name: 'David Brown',
      text: 'Your comment has been verified.',
      timestamp: '1 week ago',
      type: 'verified',
    },
    // Add more items here...
  ],
  mentioned: [
    {
      id: 6,
      name: 'Sarah Brown',
      text: 'You post was retweeted and you are mentioned in a post by Sarah Brown.',
      timestamp: '5 minutes ago',
      type: 'retweet',
    },
    {
      id: 7,
      name: 'David Johnson',
      text: 'You were mentioned in a comment by David Johnson.',
      timestamp: '3 hours ago',
      type: 'mention',
    },
    // Add more items here...
  ],
};

export default dummyNotifications;