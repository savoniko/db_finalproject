ALTER TABLE `db_design`.`blogs`
ADD INDEX `topic_2_topics_idx` (`topic` ASC);
ALTER TABLE `db_design`.`blogs`
ADD CONSTRAINT `topic_2_topics`
  FOREIGN KEY (`topic`)
  REFERENCES `db_design`.`topics` (`topic`)
  ON DELETE NO ACTION
  ON UPDATE CASCADE;
