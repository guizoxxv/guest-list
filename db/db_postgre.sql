CREATE TABLE events (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    data JSONB,
    guests JSONB,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

INSERT INTO events (name, data, guests, created_at, updated_at) VALUES (
    'Paranoid Android',
    NULL,
    '{"guests":[{"id":"c035a449-2edb-4516-87ba-a773fbb7c9cd","name":"Huguinho","formatted_name":"huguinho","present":true},{"id":"fceb2d97-7795-4f0c-8c6a-f9e1fcb0cd35","name":"Zézinho","formatted_name":"zezinho","present":false},{"id":"eed8e2d7-a31d-4f77-a208-9d2af47981ba","name":"Luizinho","formatted_name":"luizinho","present":true}]}',
    NOW(),
    NULL
);