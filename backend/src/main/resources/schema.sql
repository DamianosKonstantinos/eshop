DROP TABLE IF EXISTS products, orders, product_reviews, users, user_products, order_products;


CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    fname VARCHAR(255),
    lastname VARCHAR(255),
    role VARCHAR(255)
);

CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    prodName VARCHAR(255),
    description VARCHAR(255),
    category VARCHAR(255),
    price DECIMAL(10,2),
    sale INT,
    stock INT,
    imgURL VARCHAR(255),
    order_id BIGINT,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE user_products (
    user_id BIGINT,
    product_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE product_reviews (
    product_id BIGINT,
    review VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE order_products (
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
