
DROP TABLE IF EXISTS user_orders;
DROP TABLE IF EXISTS user_favorites;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    fname VARCHAR(255),
    lastname VARCHAR(255),
    role VARCHAR(255)
);

CREATE TABLE user_orders (
    user_id BIGINT,
    order_item VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_favorites (
    user_id BIGINT,
    favorite_item VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
