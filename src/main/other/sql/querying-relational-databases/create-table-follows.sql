CREATE TABLE `db_design`.`follows` (
  `followed` INT NOT NULL,
  `follower` INT NOT NULL,
  `created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`followed`, `follower`),
  INDEX `follower_2_user_idx` (`follower` ASC),
  CONSTRAINT `follower_2_user`
    FOREIGN KEY (`follower`)
    REFERENCES `db_design`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `followed_2_user`
    FOREIGN KEY (`followed`)
    REFERENCES `db_design`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
