fixture('Getting started')
    .page('https://dbizs-ub22-1912-101.zimbraeng.com:9071');
test('First test', async t =>{

    await t
        .typeText('#ZLoginUserName', 'admin')
        .typeText('#ZLoginPassword', 'dbizs@123')
        .click('#ZLoginButton')
});