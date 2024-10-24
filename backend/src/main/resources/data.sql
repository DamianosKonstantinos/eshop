INSERT INTO users (username, password, email, fname, lastname, role) VALUES
('john_doe', 'password123', 'john.doe@example.com', 'John', 'Doe', 'customer'),
('jane_smith', 'password456', 'jane.smith@example.com', 'Jane', 'Smith', 'admin'),
('alice_jones', 'password789', 'alice.jones@example.com', 'Alice', 'Jones', 'customer'),
('bob_brown', 'password101', 'bob.brown@example.com', 'Bob', 'Brown', 'customer'),
('charlie_black', 'password202', 'charlie.black@example.com', 'Charlie', 'Black', 'customer');

INSERT INTO products (prodName, description, category, price, sale, stock) VALUES
('Laptop', 'High performance laptop', 'Electronics', 999.99, 10, 50),
('Smartphone', 'Latest model smartphone', 'Electronics', 699.99, 15, 100),
('Headphones', 'Noise-cancelling headphones', 'Electronics', 199.99, 20, 200),
('Monitor', '4K Ultra HD monitor', 'Electronics', 399.99, 5, 75),
('Keyboard', 'Mechanical keyboard with RGB lighting', 'Electronics', 89.99, 25, 150);

INSERT INTO orders(user_id) VALUES
(1),
(2),
(3),
(4);

INSERT INTO user_products (user_id, product_id) VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 3),
(5, 5);

INSERT INTO product_reviews (product_id, review) VALUES
(1, 'Great product!'),
(1, 'Very satisfied'),
(2, 'Excellent phone!'),
(3, 'Amazing sound quality'),
(4, 'Crystal clear display'),
(5, 'Best keyboard ever');

INSERT INTO order_products (order_id, product_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 4);
