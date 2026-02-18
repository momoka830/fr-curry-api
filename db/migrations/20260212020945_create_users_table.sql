-- migrate:up
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  zipcode VARCHAR(255),
  address VARCHAR(255),
  tel VARCHAR(255),
  password  VARCHAR(255)
);


INSERT INTO users (id, name, email, zipcode, address, tel, password) VALUES
(1, '服部 天樹', 'aa@gmail.com', '104-0054', '東京都中央区勝どき', '070-3527-4395', '11111111');


-- migrate:down
