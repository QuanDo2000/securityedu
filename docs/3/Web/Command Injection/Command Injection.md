### 1. What is command injection?
Command injection is the misuse of an application's behavior to execute commands on the operating system.

#### 2. Type of command injection
- Blind command injection: While testing payloads, there is no direct output from the application using this sort of command injection. 
- Verbose: With this form of injection, you test a payload and receive immediate result from the application. One simple to test RCE is using the whoami command to will reveal the user that the application is now running as. The username will be output on the page by the web application.

### 3. Detecting Blind Command Injection

Blind command injection occurs when there is no apparent output, making it difficult to detect right away. For instance, if a command is issued, but no message is output by the web application.

We must utilize payloads that introduce some time lag for this kind of command injection. For instance, the ping and sleep commands are important test payloads. When you provide a certain number of pings, for instance, the application will hang for x seconds.

We can identify blind command injection by forcing output. You can accomplish this by utilizing redirection operators like >. We can instruct the web application to run commands like whoami and redirect the results to a file. The contents of this freshly formed file can then be read using a command like cat.

A great technique to check for command injection is to use the curl command. This is due to the fact that you can use curl to send and receive data from an application in your payload. Consider the following code example as proof that command injection is achievable with a straightforward curl payload to an application.
```bash
curl http://uc.edu/test.php%3Fsearch%3DThe%20test%3B%20whoami
```

### 4. Detecting Verbose Command Injection

This is the simplest method for detecting command injection. When the program provides you with feedback or output regarding what is occurring or being run, this is known as verbose command injection.

For instance, the web application displays the results of commands like ping or whoami.

### 5. Payloads
- whoami: see what user the application is running under.
- ls: List the contents of the current directory. Configuration files, environment files (tokens and application keys), and many other important files might be present with this command.
- ping:	This command will make the application hangs because if the system pings, it will take time to return the result.
- sleep: This is another useful payload to make the system hangs as well.

### 6. Practical examples (OWASP Juice Shop)
The first part to detect command injection vulnerability is to find where we can inject command. OWASP Juice Shop has a backend API to review products with endpoint at /rest/products/{id}/reviews. Try to go to http://localhost:3000/rest/products/1/reviews to see the product review with ID 1.

![image](https://user-images.githubusercontent.com/112114250/220806215-f3151063-02d7-4a55-83ca-a802d08d5179.png)

Guessing the ID parameter is injectable, we can try using the sleep command to see if it works. The page hangs because we ask the server to sleep for 2000ms, which is 20 seconds.
PAYLOAD URL: http://localhost:3000/rest/products/sleep(2000)/reviews
![image](https://user-images.githubusercontent.com/112114250/220806431-5c5eb45c-f5e4-4d13-a5a4-d078c1c305dd.png)

We have exploited command injection on OWASP Juice Shop successfully!



### 7. Remediation
Input sanitisation: A great technique to avoid command injection is to sanitize any user input that a program utilizes. This procedure establishes the types or formats of data that a user may input. For instance, a field that only allows numbers or that filters out special characters like >, &, and /. Some examples of effective validation include:
- Validating against a whitelist of permitted values.
- Validating that the input is a number.
- Validating that the input contains only alphanumeric characters, no other syntax or whitespace.


### References
- Command Injection Remediation: https://portswigger.net/web-security/os-command-injection
