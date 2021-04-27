CREATE TABLE `db_design`.`ratings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `likes` TINYINT(1) NULL,
  `score` INT NULL,
  `comment` VARCHAR(45) NULL,
  `user_id` INT NULL,
  `post_id` INT NULL,
  `created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `ratings_2_user_idx` (`user_id` ASC),
  INDEX `ratings_2_post_idx` (`post_id` ASC),
  CONSTRAINT `ratings_2_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_design`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `ratings_2_post`
    FOREIGN KEY (`post_id`)
    REFERENCES `db_design`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
