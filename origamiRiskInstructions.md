# SDET Take-Home Assessment

## Overview

Thank you for your interest in the SDET position. As part of our interview process, we'd like to evaluate your test automation skills through a practical take-home assessment. This exercise will help us understand your approach to test automation, code quality, and problem-solving abilities.

## Objective

Create a small test automation project that validates the login functionality of a web application. You will implement both positive and negative test scenarios to demonstrate your understanding of test case design and automation best practices.

## Requirements

### 1. Test Automation Framework

- **Playwright is strongly preferred**, but **Cypress or Selenium is also acceptable** 
PLEASE NOTE: if you use Selenium, please also use Javascript or C#

### 2. Application Under Test

- **URL**: https://the-internet.herokuapp.com/login
- **Valid Credentials**:
  - Username: `tomsmith`
  - Password: `SuperSecretPassword!`

### 3. Test Cases

You are required to implement at least the following test cases:

#### Positive Test Case

- **Test Case 1**: Successful login
  - Navigate to the login page
  - Enter valid credentials (username: `tomsmith`, password: `SuperSecretPassword!`)
  - Verify successful login (e.g., redirect to secure area, presence of success message, etc.)

#### Negative Test Cases

- **Test Case 2**: Login with invalid username

  - Navigate to the login page
  - Enter invalid username with valid password
  - Verify appropriate error message is displayed
  - Verify user remains on login page (not redirected)

- **Test Case 3**: Login with invalid password
  - Navigate to the login page
  - Enter valid username with invalid password
  - Verify appropriate error message is displayed
  - Verify user remains on login page (not redirected)

## Guidelines

### Code Quality

- Write clean, maintainable, and well-structured code
- Follow the coding standards and best practices for your chosen framework

### Project Structure

- Organize your project with a clear directory structure
- Separate test files, page objects and configuration
- Include a README.md file with:
  - Project setup instructions
  - How to run the tests
  - Any dependencies or prerequisites
  - Brief explanation of your project

### Test Execution

- Ensure all tests can be executed successfully
- Tests should be independent and able to run in any order

## Submission Instructions

1. **Create a GitHub Repository**

   - Create a new public or private repository on GitHub
   - If private, ensure you grant access to the interviewers

2. **Push Your Code**

   - Commit all your code, configuration files, and documentation
   - Include a comprehensive README.md file
   - Ensure the repository is complete and ready for review

3. **Share the Repository**

   - Send the GitHub repository URL to your recruiter
   - Include any additional notes or explanations you'd like us to consider

4. **Timeline**
   - Please complete and submit the assessment at least 1 full business day before your interview is scheduled. 
   - If you need additional time, please reach out to coordinate

## Review and Discussion

Your submission will be reviewed by our team, and we will discuss it during your technical interview. Be prepared to:

- Walk through your code and explain your design decisions
- Discuss alternative approaches you considered
- Explain how you would extend the framework for larger projects
- Answer questions about your implementation choices
- Discuss improvements or enhancements you would make

## Evaluation Criteria

We will evaluate your submission based on:

- **Functionality**: All test cases execute successfully
- **Code Quality**: Clean, readable, and maintainable code
- **Best Practices**: Proper use of design patterns, error handling, and framework features
- **Documentation**: Clear README and code comments
- **Problem-Solving**: How you approach and solve the given problem
- **Attention to Detail**: Thoroughness in test case implementation and verification

## Questions?

If you have any questions about the assessment, please don't hesitate to reach out to your recruiter or interview coordinator. We're here to help!

---

**Good luck! We look forward to reviewing your submission.**
