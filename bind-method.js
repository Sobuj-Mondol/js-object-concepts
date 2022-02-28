const student = {
    id: 101,
    name: 'Abul',
    major: 'mathematics',
    balance: 1000,
    isRich: false,
    treat: function (expense){
        this.balance = this.balance - expense;
        console.log(this);
        return this.balance;
    }
};
//
const abdul = {
    id: 102,
    balance:2000,
    name: 'Abdul'
}
student.treat(100);
//
const abdulTreat = student.treat.bind(abdul);
abdulTreat(500);