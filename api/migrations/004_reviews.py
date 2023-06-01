steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE reviews (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            cabin_id INTEGER REFERENCES cabins(id),
            reservation_id INTEGER REFERENCES reservations(id),
            rating INTEGER NOT NULL,
            comment TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            anonymous BOOLEAN
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE reviews;
        """
    ],
]
