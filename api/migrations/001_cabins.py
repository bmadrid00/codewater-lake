steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE cabins (
            id SERIAL PRIMARY KEY NOT NULL,
            cabin_name VARCHAR(100) NOT NULL,
            max_occupants SMALLINT NOT NULL,
            description VARCHAR(500) NOT NULL,
            on_lake BOOLEAN NOT NULL,
            rating SMALLINT,
            day_rate SMALLINT NOT NULL

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE cabins;
        """
    ],
]
