CREATE TABLE `db_design`.`blogs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `topic` VARCHAR(45) NULL,
  `user` INT NULL,
  `created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)),
  INDEX `blogs_to_user_idx` (`user` ASC),
  CONSTRAINT `blogs_to_user`
    FOREIGN KEY (`user`)
    REFERENCES `db_design`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
