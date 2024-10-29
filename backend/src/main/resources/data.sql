INSERT INTO users (username, password, email, fname, lastname, role) VALUES
('john_doe', 'password123', 'john.doe@example.com', 'John', 'Doe', 'customer'),
('jane_smith', 'password456', 'jane.smith@example.com', 'Jane', 'Smith', 'admin'),
('alice_jones', 'password789', 'alice.jones@example.com', 'Alice', 'Jones', 'customer'),
('bob_brown', 'password101', 'bob.brown@example.com', 'Bob', 'Brown', 'customer'),
('charlie_black', 'password202', 'charlie.black@example.com', 'Charlie', 'Black', 'customer');

INSERT INTO products (prodName, description, category, price, sale, stock, imgURL) VALUES
('Running Shoes', 'Comfortable and lightweight running shoes', 'sport', 79.99, 10, 100, 'https://picsum.photos/id/237/200/300'),
('Basketball Shoes', 'High-top shoes for better ankle support', 'sport', 129.99, 15, 50, 'https://picsum.photos/id/238/200/300'),
('Casual Sneakers', 'Stylish sneakers for everyday wear', 'men', 59.99, 20, 200, 'https://picsum.photos/id/239/200/300'),
('Hiking Boots', 'Durable boots for outdoor adventures', 'men', 149.99, 5, 75, 'https://picsum.photos/id/240/200/300'),
('Sandals', 'Comfortable sandals for summer', 'women', 39.99, 25, 150, 'https://picsum.photos/id/241/200/300'),
('Dress Shoes', 'Elegant shoes for formal occasions', 'classic', 99.99, 10, 80, 'https://picsum.photos/id/242/200/300'),
('Kids Sneakers', 'Colorful and fun sneakers for kids', 'kids', 49.99, 20, 120, 'https://picsum.photos/id/243/200/300'),
('Womens Running Shoes', 'Lightweight running shoes for women', 'women', 89.99, 15, 90, 'https://picsum.photos/id/244/200/300'),
('Mens Dress Shoes', 'Classic dress shoes for men', 'classic', 119.99, 10, 60, 'https://picsum.photos/id/45/200/300'),
('Kids Sandals', 'Comfortable sandals for kids', 'kids', 29.99, 25, 130, 'https://picsum.photos/id/345/200/300');



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
