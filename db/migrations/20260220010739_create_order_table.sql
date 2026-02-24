-- migrate:up
CREATE TABLE "order" (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  total_price INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- migrate:down
