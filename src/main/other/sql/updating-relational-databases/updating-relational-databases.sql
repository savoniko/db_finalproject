INSERT INTO users (first_name, last_name, username, password)
VALUES ('Charlie', 'Brown', 'charlie', 'p@ssw0rd');

INSERT INTO users (first_name, last_name, username, password)
VALUES ('Daniel', 'Craig', 'dan', 'p@007rd');

SELECT * FROM users;

INSERT INTO blogs
VALUES (NULL, 'Tesla Daily', 'CARS', current_date(), current_date(), 6);

INSERT INTO blogs
VALUES (NULL, 'Hyper Change', 'CARS', current_date(), current_date(), 6);

SELECT * FROM blogs;

CREATE TABLE `db_design`.`unliked_posts` (
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  blog_id INT NOT NULL,
  username VARCHAR(45),
  post VARCHAR(140),
  blog_name VARCHAR(45),
  PRIMARY KEY(post_id, user_id, blog_id),
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (blog_id) REFERENCES blogs(id)
);

INSERT INTO unliked_posts
SELECT posts.id as post_id,
       users.id as user_id,
	   blogs.id as blog_id,
       users.username,
       posts.post,
       blogs.name as blog_name
FROM users, blogs, posts, ratings
WHERE users.id = ratings.user_id
AND blogs.id = posts.blog
AND posts.id = ratings.post_id
AND ratings.likes = 0;
