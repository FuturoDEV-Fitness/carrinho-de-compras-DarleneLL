CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id), 
    total DECIMAL(10, 2),
    address TEXT,
    observations TEXT
);

CREATE TABLE orders_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),  
    amount INTEGER,
    price DECIMAL(10, 2)
);