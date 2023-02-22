### What is File Inclusion?
In some cases, web applications are developed to use parameters to request access to specific files on a system, such as photos, static text, and so on. The query parameter strings known as parameters are added to the URL and can be used to retrieve data or carry out activities based on user input. 

For instance, while using Google search, parameters are utilized to convey user input to the search engine through GET requests. https://www.google.com/search?q=UcEdu. 

Imagine a situation where a user asks to access files on a web server. The user first sends a file to show via an HTTP request to the website. For instance, the request might be as follows: http://uc.edu/getfile.php?file=Ucstudent.pdf, where the file is the argument and Ucstudent.pdf is the necessary file to access. Because of that, hackers can try to access different in the system using different paths to read sensitive data.

### Why File Inclusion vulnerabilities occur
In many different programming languages for web applications, such as PHP, that are poorly written and implemented, file inclusion vulnerabilities are frequently discovered and exploited. Input validation is the problem, where user inputs are not sanitized or checked and are instead controlled by the user, which lead to hacker being able to put malicious file path in the URL.

### Impact of File Inclusion
- Remote Code Execution
- Information Disclosure
- Denial of Service

### Directory Traversal basics
Imagine we have a school app that shows pictures of school rooms. Pictures can be loaded using HTML in the following ways:
```HTML
<img src="/loadRoom?filename=room200.png">
```
The contents of the provided file are returned by the loadRoom URL, which accepts a filename parameter. The actual image files are kept on disk at the address /var/www/roomimages/. The application adds the requested filename to this base directory in order to return a picture, and then utilizes a filesystem API to read the file's contents. The application reads from the following file location in the aforementioned scenario:
```
/var/www/roomimages/room200.png
```
In order to access any file from the server's filesystem, an attacker can request the following URL because the program doesn't protect against directory traversal attacks:
```URL
https://uc.edu/loadRoom?filename=../../../etc/passwd
```
The file path that get searched in the server is:
```
/var/www/roomimages/../../../etc/passwd
```
Within a file path, the sequence../ is acceptable and denotes a level-up in the directory hierarchy. The file that is really read is: The three successive../ sequences step up from /var/www/images/ to the filesystem root, which is
```bash
/etc/passwd
```
Both ../ and ..\ are acceptable directory traversal sequences on Windows, and the following would be a comparable approach to retrieve a typical operating system file:
https://uc.edu/loadRoom?filename=..\..\..\windows\win.ini

### How to exploit LFI


### Steps for testing for LFI

- Find an entry point that could be via GET, POST, COOKIE, or HTTP header values.
- Enter a valid input to see how the web server behaves.
- Enter invalid inputs, including special characters and common file names.
- Don't always trust what you supply in input forms is what you intended! Use either a browser address bar or a tool such as Burpsuite.
- Look for errors while entering invalid input to disclose the current path of the web application; if there are no errors, then trial and error might be the best option.
- Understand the input validation and if there are any filters.
- Try the inject a valid entry to read sensitive files

#### Bypass Technique

- Sometimes POST is working better than GET. Server might process POST request different than GET, and vice versa. Changing the request method may get a different result.
- Null-byte. Adding a null-byte at the end of our payload to terminate what may come after from the server-side and get the payload executed. This only works with PHP version before 5.3.4
- Using dot-dot-slash. This traverse the directory up to the root of the file system to read sensitive files.
- Use the dot to still stay in current directory and bypass filter /etc/passwd keyword
Example: /etc/passwd/.
- If the directory is forced -> include it in the payload too
Example: if the web application asks to supply input that has to include a directory such as: http://webapp.uc.edu/index.php?lang=languages/EN.php then, to exploit this, we need to include the directory in the payload like so: ?lang=languages/../../../../../etc/passwd.

### RFI (PHP)
- Condition: allow_furl_open set to on 
- After trigger RFI, see what we can do, see php_info() or execute rev shell via RFI, and so on.

### Remediation
As a developer, it's important to be aware of web application vulnerabilities, how to find them, and prevention methods. To prevent the file inclusion vulnerabilities, some common suggestions include:
- Keep system and services, including web application frameworks, updated with the latest version.
- Turn off PHP errors to avoid leaking the path of the application and other potentially revealing information.
- A Web Application Firewall (WAF) is a good option to help mitigate web application attacks.
- Disable some PHP features that cause file inclusion vulnerabilities if your web app doesn't need them, such as allow_url_fopen on and allow_url_include.
- Carefully analyze the web application and allow only protocols and PHP wrappers that are in need.
- Never trust user input, and make sure to implement proper input validation against file inclusion.
- Implement whitelisting for file names and locations as well as blacklisting.

### References

- Impact of LFI: https://www.cobalt.io/blog/a-pentesters-guide-to-file-inclusion

- LFI Cheatsheet: https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/File%20Inclusion

- Null-byte injection EOL: https://security.stackexchange.com/questions/48187/null-byte-injection-on-php
