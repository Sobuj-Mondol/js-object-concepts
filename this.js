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
student.treat(1000);
//
function add(){
    console.log(this);
}