const db = require('../utils/database');
const {io, server} = require('../init')


exports.postData = (req, res) => {
    const {username} = req.body;

    db.execute("INSERT INTO user(username) VALUES (?)", [username]).then(([rows, fieldData]) => {
        io.emit("new_user", {
            user: username
        })

        res.status(200).json({
            success: true,
            msg: "New user has been posted Successfully",
        })
    })
}



