steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE cabins (
            id SERIAL PRIMARY KEY NOT NULL,
            cabin_name VARCHAR(100) NOT NULL,
            max_occupants SMALLINT NOT NULL,
            description VARCHAR(5000) NOT NULL,
            on_lake BOOLEAN NOT NULL,
            rating DECIMAL,
            day_rate INT NOT NULL,
            cabin_images TEXT[] NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE cabins;
        """
    ],
]
