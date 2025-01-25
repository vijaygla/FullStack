use("ag0")

db.users.insertOne({
    _id: 2,
    name: "User 2",
    status: "active",
});


db.users.find({})

db.users.updateOne(
    {
        _id: 2,
    },
    {
        $set: {
            status: "inactive",
        },
    }
);


db.users.find({ _id: 2 }, { _id: 1, name: 1})


db.users.insertOne({
    _id: 2,
    name: "User 2",
    status: "active",
});


