function validateName(name) {
    if (name.length < 1) {
        throw TypeError("Name must not be blank")
    } else {
        return name;
    }
}

function create(name) {
    return {
        id: cuid(),
        name: name,
        checked: false
    }
}

export default {
    create,
    validateName
};