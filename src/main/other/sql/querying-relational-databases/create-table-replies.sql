CREATE TABLE `db_design`.`replies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `reply` VARCHAR(45) NULL,
  `user_id` INT NULL,
  `post_id` INT NULL,
  `created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `replies_2_users_idx` (`user_id` ASC),
  INDEX `replies_2_posts_idx` (`post_id` ASC),
  CONSTRAINT `replies_2_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_design`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `replies_2_posts`
    FOREIGN KEY (`post_id`)
    REFERENCES `db_design`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
