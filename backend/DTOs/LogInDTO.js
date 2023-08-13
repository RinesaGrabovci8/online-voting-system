class LoginDto {
    constructor(id, password) {
        this.id = id;
        this.password = password;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }
}

module.exports = LoginDto;
