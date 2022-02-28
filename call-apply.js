const student = {
    id: 101,
    name: 'Abul',
    major: 'mathematics',
    balance: 1000,
    isRich: false,
    treat: function (expense, boksis){
        this.balance = this.balance - expense - boksis;
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
// call
student.treat.call(abdul, 500, 50);
student.treat.call(abdul, 300, 50);
student.treat.call(abdul, 200, 50);
// Apply
student.treat.apply(abdul, [500, 50]);
student.treat.apply(abdul, [300, 50]);