async function displayUser(idUser) {
    try {
        const user = await _getUserData(idUser);
        console.log(user);
    }
    catch (error) {
        console.log(error);
    }
}
async function _getUserData(id) {
    const user = await new Promise(resolve => setTimeout(() => resolve({ id, name: 'superToto' }), 1000));
    return displayUser;
}
displayUser(1);
class UserAccount {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
console.log(user);
