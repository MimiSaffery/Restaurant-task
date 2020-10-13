CREATE TABLE restaurants(
    id INTEGER PRIMARY KEY,
     name TEXT
     );

CREATE TABLE menus(
    id INTEGER PRIMARY KEY,
    name TEXT,
    restaurant_id INTEGER
    );

CREATE TABLE ratings(
id INTEGER PRIMARY KEY,
rating INTEGER,
restaurant_id INTEGER
);

CREATE TABLE items(
    id INTEGER PRIMARY KEY, 
    name TEXT,
    menu_id INTEGER
    );

INSERT INTO restaurants
        (name) 
VALUES
        ("Bayroot"),
        ("The Berkley"),
        ("Balthazar");

INSERT INTO menus
        (name, restaurant_id)
VALUES
        ("Breakfast",1),
        ("Lunch",2),
        ("WINE",3);
SELECT restaurants.name, menus.name 
FROM restaurants 
JOIN menus 
ON restaurants.id = menus.restaurant_id;

 CREATE TABLE items(
         id INTEGER PRIMARY KEY,
          name TEXT,
           menu_id INTEGER)
           ;