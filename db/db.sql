use guest-list;

db.createCollection('guests');

db.guests.insert([
    {
        name: "Huguinho",
        formatted_name: "huguinho",
        present: true,
    },
    {
        name: "Zézinho",
        formatted_name: "zezinho",
        present: false,
    },
    {
        name: "Luizinho",
        formatted_name: "luizinho",
        present: true,
    },
]);