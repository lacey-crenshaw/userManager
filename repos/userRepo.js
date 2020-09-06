const User = require('../models/user');

class userRepository {
    constructor(model) {
        this.model = model;
    }

    create(first, last, age, email) {
        const newUser = { first, last, age, email };
        const User = new this.model(newUser);
        return User.save();
    }

    findAll() {
        return this.model.find();
    }
    sortAsc(field) {
        return this.model.find().sort(field);
    }
    sortDesc(field) {
        return this.model.find().sort([[field, -1]]);
    }
    delete(id) {
        this.model.findByIdAndRemove(id, (err, todo) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "user successfully deleted",
                id: id
            };
            return response
        });
    }

    findById(id) {
        return this.model.find({ _id: id })
    }

    update(id, first, last, age, email) {
        this.model.findById(id).then(doc => {
            doc.first = first;
            doc.last = last;
            doc.age = age;
            doc.email = email
            return doc.save();
        })
    }

    findByName(name) {

        if (name.first && name.last) {
            return this.model.find({ first: name.first, last: name.last });
        }
        else if (name.first) {
            return this.model.find({ first: name.first })
        }
        else if (name.last) {
            return this.model.find({ last: name.last })
        }
        else {
            return this.model.find({})
        }
    }
}

module.exports = new userRepository(User);