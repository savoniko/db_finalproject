
-- select all records from the users table
SELECT * FROM users;

SELECT * FROM blogs;

SELECT * FROM posts;

-- select by primary key from single table
SELECT * FROM users
WHERE users.id = 1;

-- select a blog record by its primary key
SELECT * FROM blogs
WHERE blogs.id = 2;

SELECT * FROM posts
WHERE posts.id = 1;

-- select a user by their username
SELECT * FROM users
WHERE users.username = 'elonmusk';

SELECT * FROM blogs
WHERE blogs.name = 'SpaceX';

-- explicit join
-- select usernames and their blog's name
SELECT users.username, blogs.name
FROM users JOIN blogs ON users.id = blogs.user;

SELECT blogs.name, posts.post
FROM blogs JOIN posts ON blogs.id = posts.blog;

-- implicit join
SELECT users.username, blogs.name
FROM users, blogs
WHERE users.id = blogs.user;

SELECT blogs.name, posts.post
FROM blogs, posts
WHERE blogs.id = posts.blog;

-- implicit join single record
SELECT users.username, blogs.name
FROM users, blogs
WHERE users.id = blogs.user
AND users.username = 'elonmusk';

SELECT blogs.name, posts.post
FROM blogs, posts
WHERE blogs.id = posts.blog
AND blogs.name = 'Everyday Astronaut';

-- join three tables
-- select username, blog's name, and the blog's posts for a particular username
SELECT users.username, blogs.name, posts.post
FROM users, blogs, posts
WHERE users.id = blogs.user
AND blogs.id = posts.blog
AND users.username = 'erdayastronaut';

SELECT blogs.name, posts.post, replies.reply
FROM blogs, posts, replies
WHERE blogs.id = posts.blog
AND posts.id = replies.post_id
AND blogs.name = 'Everyday Astronaut';

-- group sum
-- calculate total likes per post
SELECT post_id, sum(ratings.likes) as `likes`
FROM ratings
GROUP BY ratings.post_id;

-- group average
SELECT post_id, avg(ratings.score) as `score`
FROM ratings
GROUP BY ratings.post_id;

-- inline views
-- retrieve blog's name, posts, and total likes per post
SELECT blogs.name, posts.post, r.likes
FROM blogs, posts, (
	SELECT post_id, sum(ratings.likes) as `likes`
	FROM ratings
	GROUP BY ratings.post_id) as r
WHERE r.post_id = posts.id
AND posts.blog = blogs.id;

SELECT blogs.name, posts.post, r.score
FROM blogs, posts, (
	SELECT post_id, avg(ratings.score) as `score`
	FROM ratings
	GROUP BY ratings.post_id) as r
WHERE r.post_id = posts.id
AND posts.blog = blogs.id;

