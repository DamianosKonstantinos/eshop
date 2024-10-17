
INSERT INTO users (username, password, email, fname, lastname, role) VALUES
('john_doe', 'password123', 'john.doe@example.com', 'John', 'Doe', 'customer'),
('jane_smith', 'password456', 'jane.smith@example.com', 'Jane', 'Smith', 'admin'),
('alice_jones', 'password789', 'alice.jones@example.com', 'Alice', 'Jones', 'customer');

INSERT INTO user_orders (user_id, order_item) VALUES
(1, 'Order1'),
(1, 'Order2'),
(2, 'Order3'),
(3, 'Order4');

INSERT INTO user_favorites (user_id, favorite_item) VALUES
(1, 'Favorite1'),
(2, 'Favorite2'),
(3, 'Favorite3'),
(3, 'Favorite4');
