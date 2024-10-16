INSERT INTO users (username, password, email, fname, lastname, role) VALUES
('john_doe', 'password123', 'john.doe@example.com', 'John', 'Doe', 'customer'),
('jane_smith', 'password456', 'jane.smith@example.com', 'Jane', 'Smith', 'admin'),
('alice_jones', 'password789', 'alice.jones@example.com', 'Alice', 'Jones', 'customer'),
('bob_brown', 'password101', 'bob.brown@example.com', 'Bob', 'Brown', 'customer'),
('charlie_black', 'password202', 'charlie.black@example.com', 'Charlie', 'Black', 'customer');

INSERT INTO user_orders (user_id, order_item) VALUES
(1, 'Order1'),
(1, 'Order2'),
(2, 'Order3'),
(3, 'Order4'),
(4, 'Order5');

INSERT INTO user_favorites (user_id, favorite_item) VALUES
(1, 'Favorite1'),
(2, 'Favorite2'),
(3, 'Favorite3'),
(4, 'Favorite4'),
(5, 'Favorite5');

INSERT INTO products (prodName, description, category, price, sale, stock) VALUES
('Laptop', 'High performance laptop', 'Electronics', 999.99, 10, 50),
('Smartphone', 'Latest model smartphone', 'Electronics', 699.99, 15, 100),
('Headphones', 'Noise-cancelling headphones', 'Electronics', 199.99, 20, 200),
('Monitor', '4K Ultra HD monitor', 'Electronics', 399.99, 5, 75),
('Keyboard', 'Mechanical keyboard with RGB lighting', 'Electronics', 89.99, 25, 150);

INSERT INTO product_reviews (product_id, review) VALUES
(1, 'Great product!'),
(1, 'Very satisfied'),
(2, 'Excellent phone!'),
(3, 'Amazing sound quality'),
(4, 'Crystal clear display'),
(5, 'Best keyboard ever');
