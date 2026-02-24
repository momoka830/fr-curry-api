-- migrate:up
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER,
  item_id INTEGER,
  item_name VARCHAR(255),
  price INTEGER,
  count INTEGER,
  topping_list VARCHAR(255),
  imagepath VARCHAR(255),
  TotalPrice INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- migrate:down
