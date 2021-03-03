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

bob.sayhi = function sayhi() {
    console.log('hello, world! I am ' + this.name);
}

bob.sayhi();

const fn = bob.sayhi;

fn();