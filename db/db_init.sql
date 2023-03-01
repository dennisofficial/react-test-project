CREATE DATABASE react_test_project;
use react_test_project;

CREATE TABLE accounts(
    `id`  int(11) NOT NULL AUTO_INCREMENT,
    `first_name` varchar(32) NOT NULL,
    `last_name` varchar(32) NOT NULL,
    `username` varchar(22) NOT NULL,
    `password` varchar(256) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE blogs(
    `id`  int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(64) NOT NULL,
    `content` text() NOT NULL,
    `author` int(11) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO accounts(first_name, last_name, username) VALUES
("Dennis", "Lysenko", "dennislysenko"),
("Dmitriy", "Lysenko", "frxxdom"),
("Elon", "Musk", "flyrockets")

INSERT INTO blogs(title, content, author) VALUES
("The first blog post!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.",1),
("Made with react!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.",2),
("Challenge accepted!","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.",3),
("Dont test me! :)","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.",1),
("Rockets in 2 months","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium urna, vel sagittis turpis. Quisque ut posuere diam. In tincidunt nunc gravida augue tincidunt sollicitudin. Aliquam eu dui mauris. Sed nisl est, malesuada ac tellus et, aliquam ultrices tellus. Cras dignissim nisl vel arcu posuere, et imperdiet ex posuere. Vestibulum quis erat a elit iaculis commodo. Phasellus at massa dignissim tortor vehicula ultrices. Proin tristique libero eget odio pellentesque, vel pretium est condimentum. Donec sagittis sit amet sapien vel pulvinar. In orci dui, blandit et sollicitudin et, faucibus nec metus. Mauris tristique augue pellentesque, ultrices felis nec, dapibus odio.",3);
