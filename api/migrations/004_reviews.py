steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE reviews (
            id SERIAL PRIMARY KEY,
            user_id SMALLINT REFERENCES users(id) ON DELETE CASCADE,
            cabin_id SMALLINT REFERENCES cabins(id),
            reservation_id SMALLINT REFERENCES reservations(id),
            rating SMALLINT NOT NULL,
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
