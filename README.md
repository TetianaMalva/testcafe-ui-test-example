## Description
This project contains one UI test of **Zoover.nl** web application.

### Scope
This demo has a one UI test that should successfully pass in 2 different browsers when ran.

### Tools
* Language: JavaScript
* Test framework: TestCafe
* IDE: Visual Studio Code

### Test framework selection reasoning
##### TestCafe Pros:
1. Possible to run in 2 different browsers
2. Easy to start (good documentation)
3. Open source
4. Quick test execution
5. Covers required functionality

## Installation and execution
### Install prerequisites
1. Install **git** https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
2. Install **Node.js** and **npm**
3. Install **TestCafe** 
```sh 
npm install -g testcafe
```
Run tests
1. Clone this git repository:
```sh
mkdir ~/gitrepo
cd ~/gitrepo
git clone https://github.com/TetianaMalva/testcafe-ui-test-example.git
```
2. Run test:
```sh
testcafe chrome zoover_test.js
testcafe firefox zoover_test.js
```

Example of test result in Chrome:
![alt text](https://raw.githubusercontent.com/TetianaMalva/testcafe-ui-test-example/master/wiki/chrome.gif)
Example of test result in Firefox:
![alt text](https://raw.githubusercontent.com/TetianaMalva/testcafe-ui-test-example/master/wiki/firefox.gif)