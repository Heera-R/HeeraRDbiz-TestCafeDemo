import { fixture, test } from 'testcafe';
import creds from '../data/credentials.json';  // import JSON
import loginPage from '../pages/loginPage';    // import page model

fixture('Getting started');

test('First test', async t => {
    await loginPage.navigateToLogin(t);
    await loginPage.login(t, creds.login.username, creds.login.password);
});