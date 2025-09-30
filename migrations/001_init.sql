CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  skin_type VARCHAR(50),
  concerns TEXT[],
  preferences JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE skin_analyses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  analysis_date TIMESTAMP,
  results JSONB,
  image_url VARCHAR(255)
);
