use react_test_server;

CREATE TABLE `accounts`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(32) NOT NULL,
    `last_name` VARCHAR(32) NOT NULL,
    `username` VARCHAR(30) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB;

CREATE TABLE `blogs`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(64) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `author` INT(11) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB;