const student = {
    id: 101,
    name: 'Abul',
    major: 'mathematics',
    balance: 1000,
    isRich: false,
    subjects: ['english', 'economics', 'math 101',],
    bestFriend: {
        name: 'Akbor',
        major: 'mathematics',
    },
    takeExam: function(){
        console.log(this.bestFriend.name, 'taking exam');
    },
    treat: function(expense, boksis){
        this.balance = this.balance - expense - boksis;
        return this.balance;
    }

}
student.takeExam();
const result1 = student.treat(600, 50);
const result2 = student.treat(200, 50);
console.log(result2);