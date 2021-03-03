function BobJonesFactory() {
    const bob = {
        name: 'Bob Jones',
        bornAt: '2015-07-20',
        gender: 'male'
    };
    
    bob.hair = {
        color: 'gold',
        style: 'short'
    };
    
    bob.height = 132;
    bob.id = Math.random();

    return bob;
}

const bob = BobJonesFactory();