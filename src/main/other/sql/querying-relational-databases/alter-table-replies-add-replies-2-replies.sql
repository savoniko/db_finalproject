ALTER TABLE `db_design`.`replies`
ADD COLUMN `replies_id` INT NULL AFTER `post_id`,
ADD INDEX `replies_2_replies_idx` (`replies_id` ASC);
ALTER TABLE `db_design`.`replies`
ADD CONSTRAINT `replies_2_replies`
  FOREIGN KEY (`replies_id`)
  REFERENCES `db_design`.`replies` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
