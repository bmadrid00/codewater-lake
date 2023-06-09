steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE reservations (
            id SERIAL PRIMARY KEY NOT NULL,
            cabin_id SMALLINT REFERENCES cabins(id) NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            user_id SMALLINT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
            number_of_people SMALLINT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE reservations;
        """
    ],
]
