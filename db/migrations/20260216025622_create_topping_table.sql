-- migrate:up
CREATE TABLE topping (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  price INTEGER
);

INSERT INTO topping (id, name, price) VALUES
(1, 'オニオン', 100),
(2, 'チーズ', 200),
(3, 'ピーマン', 100),
(4, 'ロースハム', 200),
(5, 'ほうれん草', 100),
(6, 'ナス', 100),
(7, 'ソーセージ', 200),
(8, '納豆', 100),
(9, 'Lサイズ', 300);

-- migrate:down
