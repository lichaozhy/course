function BobJones() {
    this.name = 'Bob Jones';
    this.bornAt = '2015-07-20';
    this.gender = 'male';
    
    this.hair = {
        color: 'gold',
        style: 'short'
    };
    
    this.height = 132;
    this.id = Math.random();
}

const bob = new BobJones();