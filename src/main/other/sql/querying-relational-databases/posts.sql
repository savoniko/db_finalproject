CREATE TABLE `db_design`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `post` VARCHAR(45) NULL,
  `created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `blog` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `posts_to_blog_idx` (`blog` ASC),
  CONSTRAINT `posts_to_blog`
    FOREIGN KEY (`blog`)
    REFERENCES `db_design`.`blogs` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
