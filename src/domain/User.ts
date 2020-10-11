export class User {
    private idNumber: string;
    private password: string;

    public getIdNumber(): string {
        return this.idNumber;
    }

    public setIdNumber(value: string) {
        this.idNumber = value;
    }

    public getPassword() {
        return this.password;
    }

    public setPassword(value: string) {
        this.password = value;
    }
}
