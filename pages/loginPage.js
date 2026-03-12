import { Selector } from 'testcafe';
import urls from '../Data/config.json';  // import config JSON

class LoginPage {
    constructor() {
        this.usernameInput = Selector('#ZLoginUserName');
        this.passwordInput = Selector('#ZLoginPassword');
        this.loginButton = Selector('#ZLoginButton');
    }
    async navigateToLogin(t){
      await t.navigateTo(urls.baseUrl);
    }

    async login(t, username, password) {
        await t
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
    }
}

export default new LoginPage();