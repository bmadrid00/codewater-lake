steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE reservations (
            id SERIAL PRIMARY KEY NOT NULL,
            cabin_id: TINYINT REFERENCES cabins(id) NOT NULL,
            start_date: DATE NOT NULL,
            end_date: DATE NOT NULL,
            user_id: TINYINT REFERENCES users(id) NOT NULL,
            number_of_people: SMALLINT NOT NULL

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE reservations;
        """
    ],
]
