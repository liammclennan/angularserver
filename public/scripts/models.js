'use strict';

function Person(data) {
    this.name = data.name;
    this.age = data.age;
    dbc.check(this, Person.spec);
}

// the endpoint for this resource
Person.url = '//localhost:3001/people/';

// this spec is run by the constructor,
// since resouceclient uses the constructor
// all data returned from the server is 
// guaranteed to match the spec.
Person.spec = {
    name: [{validator:'type', args:['string']}],
    age: [{validator:'type', args:['number']}],
};
