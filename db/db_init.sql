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

INSERT INTO `accounts`(`id`, `first_name`, `last_name`, `username`, `password`)
VALUES(
    NULL,
    'Dennis',
    'Lysenko',
    'dennislysenko',
    ''
),(
    NULL,
    'Dmitry',
    'Lysenko',
    'frxxdom',
    ''
),(NULL, 'Elon', 'Musk', 'flyrockets', '');

INSERT INTO `blogs`(`id`, `title`, `content`, `author`)
VALUES(
    NULL,
    'The first blog post!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.',
    '1'
),(
    NULL,
    'Made with react!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.',
    '2'
),(
    NULL,
    'Challenge accepted!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.',
    '3'
),(
    NULL,
    'Dont test me! :)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.',
    '1'
),(
    NULL,
    'Rockets in 2 months',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.',
    '3'
);