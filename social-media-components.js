import React, { useState, useEffect, useRef } from 'react';

const styles = {
  page: {
    fontFamily: 'Inter, Roboto, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif',
    background: '#f4f6fb',
    color: '#111827',
    minHeight: '100vh',
    padding: '28px',
    boxSizing: 'border-box'
  },
  container: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '360px 1fr 320px',
    gap: 20
  },
  card: {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 6px 18px rgba(16,24,40,0.06)',
    padding: 16
  },
  largeCard: {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 6px 18px rgba(16,24,40,0.06)',
    padding: 20
  },
  avatar: (size = 48) => ({
    height: size,
    width: size,
    borderRadius: '50%',
    objectFit: 'cover',
    display: 'inline-block'
  }),
  smallText: {
    fontSize: 12,
    color: '#6b7280'
  },
  boldText: {
    fontWeight: 600
  }
};

const Icon = ({ name, size = 18, color = '#374151' }) => {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' };
  switch (name) {
    case 'like':
      return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-7-4.35-9.33-7.17C-1.08 8.64 4 4 7 4c1.86 0 3 1 5 3 2-2 3.14-3 5-3 3 0 8.08 4.64 4.33 9.83C19 16.65 12 21 12 21z" fill={color} />
        </svg>
      );
    case 'comment':
      return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill={color} />
        </svg>
      );
    case 'share':
      return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12v7a1 1 0 0 0 1 1h14v-2H6v-6H4zM20 7h-5l1.5-4H9.5L11 7H6l6-8 6 8z" fill={color} />
        </svg>
      );
    case 'more':
      return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="12" r="2" fill={color} />
          <circle cx="12" cy="12" r="2" fill={color} />
          <circle cx="19" cy="12" r="2" fill={color} />
        </svg>
      );
    default:
      return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" x="2" y="2" rx="4" fill={color} />
        </svg>
      );
  }
};

const Avatar = ({ src, alt = 'avatar', size = 48 }) => (
  <img src={src} alt={alt} style={styles.avatar(size)} />
);

function formatTimeAgo(date) {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000);
  const intervals = [
    { label: 'y', seconds: 31536000 },
    { label: 'mo', seconds: 2592000 },
    { label: 'd', seconds: 86400 },
    { label: 'h', seconds: 3600 },
    { label: 'm', seconds: 60 },
    { label: 's', seconds: 1 }
  ];
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) return `${count}${interval.label}`;
  }
  return '0s';
}

const defaultReactions = [
  { type: 'like', label: 'Like' },
  { type: 'love', label: 'Love' },
  { type: 'laugh', label: 'Haha' },
  { type: 'wow', label: 'Wow' },
  { type: 'sad', label: 'Sad' },
  { type: 'angry', label: 'Angry' }
];

const ReactionsBar = ({ reactions = defaultReactions, counts = {}, onReact }) => {
  const [localCounts, setLocalCounts] = useState(() => ({ ...counts }));
  useEffect(() => setLocalCounts({ ...counts }), [counts]);
  const handleReact = (type) => {
    setLocalCounts((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }));
    if (onReact) onReact(type);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {reactions.map((r) => (
        <button key={r.type} onClick={() => handleReact(r.type)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name={r.type === 'like' ? 'like' : 'more'} size={18} color={'#374151'} />
          <span style={{ fontSize: 13, color: '#374151' }}>{localCounts[r.type] || 0}</span>
        </button>
      ))}
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, color: '#6b7280', fontSize: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="comment" size={16} color="#6b7280" />
          <span>Comments</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="share" size={16} color="#6b7280" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

const ProfileStats = ({ stats = {} }) => (
  <div style={{ ...styles.card }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar src={stats.avatar || 'https://picsum.photos/seed/profile/96'} size={72} />
      <div>
        <div style={{ fontWeight: 700, fontSize: 16 }}>{stats.name || 'Unknown User'}</div>
        <div style={{ fontSize: 13, color: '#6b7280' }}>{stats.handle || '@unknown'}</div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{stats.posts || 0}</div>
        <div style={styles.smallText}>Posts</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{stats.followers || 0}</div>
        <div style={styles.smallText}>Followers</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{stats.following || 0}</div>
        <div style={styles.smallText}>Following</div>
      </div>
    </div>
  </div>
);

const FollowersWidget = ({ followers = [] }) => {
  const visible = followers.slice(0, 6);
  return (
    <div style={{ ...styles.card }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 700 }}>Followers</div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>{followers.length}</div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
        {visible.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 160 }}>
            <Avatar src={f.avatar || `https://picsum.photos/seed/follower${i}/48`} size={40} />
            <div>
              <div style={{ fontWeight: 600 }}>{f.name}</div>
              <div style={styles.smallText}>{f.handle}</div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <button style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', cursor: 'pointer' }}>Follow</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, textAlign: 'center' }}>
        <button style={{ padding: '8px 12px', borderRadius: 8, border: 'none', background: '#111827', color: '#fff', cursor: 'pointer' }}>View All</button>
      </div>
    </div>
  );
};

const StoryCard = ({ story, onOpen }) => (
  <div style={{ width: 96, borderRadius: 12, overflow: 'hidden', background: '#fff', boxShadow: '0 4px 12px rgba(16,24,40,0.06)' }}>
    <div style={{ height: 120, backgroundImage: `url(${story.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => onOpen(story)} />
    <div style={{ padding: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Avatar src={story.avatar} size={36} />
        <div>
          <div style={{ fontWeight: 600, fontSize: 13 }}>{story.name}</div>
          <div style={{ fontSize: 11, color: '#6b7280' }}>{formatTimeAgo(story.date)}</div>
        </div>
      </div>
    </div>
  </div>
);

const StoryCarousel = ({ stories = [], onOpenStory }) => (
  <div style={{ ...styles.card }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 700 }}>Stories</div>
      <div style={{ fontSize: 12, color: '#6b7280' }}>{stories.length}</div>
    </div>
    <div style={{ display: 'flex', gap: 12, marginTop: 12, overflowX: 'auto', paddingBottom: 8 }}>
      {stories.map((s, i) => (
        <StoryCard key={i} story={s} onOpen={onOpenStory} />
      ))}
    </div>
  </div>
);

const CommentCard = ({ comment }) => (
  <div style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
    <Avatar src={comment.avatar} size={40} />
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontWeight: 700 }}>{comment.name}</div>
          <div style={{ fontSize: 12, color: '#6b7280' }}>{formatTimeAgo(comment.date)}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <Icon name="more" size={18} color="#9ca3af" />
          </button>
        </div>
      </div>
      <div style={{ marginTop: 8, color: '#374151' }}>{comment.text}</div>
      <div style={{ marginTop: 8, display: 'flex', gap: 12, alignItems: 'center' }}>
        <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>Like</button>
        <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>Reply</button>
      </div>
    </div>
  </div>
);

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);
  const [showComments, setShowComments] = useState(false);
  useEffect(() => setLikes(post.likes || 0), [post.likes]);
  const handleLike = () => {
    setLiked((v) => {
      const nv = !v;
      setLikes((l) => (nv ? l + 1 : l - 1));
      return nv;
    });
  };
  return (
    <div style={{ ...styles.largeCard, marginBottom: 12 }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <Avatar src={post.avatar} size={56} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{post.name}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>{post.handle} · {formatTimeAgo(post.date)}</div>
            </div>
            <div>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <Icon name="more" size={18} color="#6b7280" />
              </button>
            </div>
          </div>
          <div style={{ marginTop: 12, color: '#111827' }}>{post.text}</div>
          {post.image && (
            <div style={{ marginTop: 12 }}>
              <img src={post.image} alt="post-media" style={{ width: '100%', borderRadius: 12, maxHeight: 420, objectFit: 'cover' }} />
            </div>
          )}
          <div style={{ marginTop: 12 }}>
            <ReactionsBar counts={{ like: likes }} onReact={() => {}} />
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
            <button onClick={handleLike} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="like" size={18} color={liked ? '#ef4444' : '#6b7280'} />
              <span style={{ color: liked ? '#ef4444' : '#6b7280' }}>{likes}</span>
            </button>
            <button onClick={() => setShowComments((s) => !s)} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="comment" size={18} color="#6b7280" />
              <span style={{ color: '#6b7280' }}>{post.comments?.length || 0}</span>
            </button>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="share" size={18} color="#6b7280" />
              <span style={{ color: '#6b7280' }}>Share</span>
            </button>
          </div>
          {showComments && (
            <div style={{ marginTop: 12 }}>
              <div style={{ marginBottom: 8, fontWeight: 700 }}>Comments</div>
              <div>
                {post.comments?.map((c, i) => (
                  <CommentCard key={i} comment={c} />
                ))}
              </div>
              <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                <input placeholder="Write a comment..." style={{ flex: 1, padding: 10, borderRadius: 10, border: '1px solid #e5e7eb' }} />
                <button style={{ padding: '8px 12px', borderRadius: 10, border: 'none', background: '#111827', color: '#fff' }}>Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const sampleStories = Array.from({ length: 10 }).map((_, i) => ({
  id: `s-${i}`,
  name: `Story ${i + 1}`,
  avatar: `https://picsum.photos/seed/story${i}/48`,
  image: `https://picsum.photos/seed/story-img${i}/400/600`,
  date: new Date(Date.now() - i * 3600 * 1000).toISOString()
}));

const sampleFollowers = Array.from({ length: 12 }).map((_, i) => ({
  name: `Follower ${i + 1}`,
  handle: `@follower${i + 1}`,
  avatar: `https://picsum.photos/seed/foll${i}/48`
}));

const samplePosts = Array.from({ length: 8 }).map((_, i) => ({
  id: `p-${i}`,
  name: `User ${i + 1}`,
  handle: `@user${i + 1}`,
  avatar: `https://picsum.photos/seed/user${i}/96`,
  date: new Date(Date.now() - i * 1000 * 60 * 60 * 5).toISOString(),
  text: `This is a sample post number ${i + 1}. Sharing a small thought to populate the feed and demonstrate the layout.`,
  image: i % 3 === 0 ? `https://picsum.photos/seed/post${i}/800/400` : null,
  likes: Math.floor(Math.random() * 120),
  comments: Array.from({ length: (i % 4) + 1 }).map((__, ci) => ({
    name: `Commenter ${ci + 1}`,
    avatar: `https://picsum.photos/seed/comment${i}-${ci}/48`,
    date: new Date(Date.now() - (ci + 1) * 1000 * 60 * 60).toISOString(),
    text: `Nice post! This is comment ${ci + 1} on post ${i + 1}.`
  }))
}));

const SocialMediaComponentsPage = () => {
  const [posts, setPosts] = useState(samplePosts);
  const [stories, setStories] = useState(sampleStories);
  const [followers, setFollowers] = useState(sampleFollowers);
  const openStory = (s) => alert(`Open story: ${s.name}`);
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div>
          <ProfileStats stats={{ name: 'Jane Doe', handle: '@janedoe', avatar: 'https://picsum.photos/seed/jane/96', posts: 124, followers: 4523, following: 312 }} />
          <div style={{ height: 20 }} />
          <FollowersWidget followers={followers} />
        </div>
        <div>
          <div style={{ marginBottom: 14 }}>
            <div style={{ ...styles.largeCard }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <Avatar src={'https://picsum.photos/seed/self/64'} size={56} />
                <div style={{ flex: 1 }}>
                  <input placeholder="What's happening?" style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb' }} />
                  <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Photo</button>
                      <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Poll</button>
                      <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Location</button>
                    </div>
                    <button style={{ padding: '8px 12px', borderRadius: 10, border: 'none', background: '#111827', color: '#fff' }}>Post</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <StoryCarousel stories={stories} onOpenStory={openStory} />
          </div>
          <div>
            {posts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </div>
        <div>
          <div style={{ ...styles.card, marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 700 }}>Trends</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>For you</div>
            </div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>#React</div>
                  <div style={styles.smallText}>125k posts</div>
                </div>
                <div style={styles.smallText}>Trending</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>#Design</div>
                  <div style={styles.smallText}>64k posts</div>
                </div>
                <div style={styles.smallText}>Growing</div>
              </div>
            </div>
          </div>
          <div style={{ ...styles.card }}>
            <div style={{ fontWeight: 700 }}>Who to follow</div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {followers.slice(0, 3).map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Avatar src={f.avatar} size={44} />
                    <div>
                      <div style={{ fontWeight: 700 }}>{f.name}</div>
                      <div style={styles.smallText}>{f.handle}</div>
                    </div>
                  </div>
                  <div>
                    <button style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff' }}>Follow</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaComponentsPage;
