import assert from 'assert';
import login from '../utils/login.mjs';

it("Login API should return a valid login token",async ()=>{


    const loginToken= await login({userName:"ytccbusiness@gmail.com", password: "Systems!!123"});

    assert.equal(loginToken.length,36);

})