### 1. What is File Inclusion?
In some cases, web applications are developed to use parameters to request access to specific files on a system, such as photos, static text, and so on. The query parameter strings known as parameters are added to the URL and can be used to retrieve data or carry out activities based on user input. 

For instance, while using Google search, parameters are utilized to convey user input to the search engine through GET requests. https://www.google.com/search?q=UcEdu. 

Imagine a situation where a user asks to access files on a web server. The user first sends a file to show via an HTTP request to the website. For instance, the request might be as follows: http://uc.edu/getfile.php?file=Ucstudent.pdf, where the file is the argument and Ucstudent.pdf is the necessary file to access. Because of that, hackers can try to access different in the system using different paths to read sensitive data.

### 2. Why File Inclusion vulnerabilities occur
In many different programming languages for web applications, such as PHP, that are poorly written and implemented, file inclusion vulnerabilities are frequently discovered and exploited. Input validation is the problem, where user inputs are not sanitized or checked and are instead controlled by the user, which lead to hacker being able to put malicious file path in the URL.

### 3. Impact of File Inclusion
- Remote Code Execution
- Information Disclosure
- Denial of Service

### 4. Directory Traversal basics
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


### 5. Steps for testing for LFI

- Find an entry point in the request could be used for LFI. Try changing request method such as GET, POST.
- Try a valid input to observe normal behavior.
- Try valid input combining with special characters
- Try to use invalid inputs and look for errors to see if the file path included.
- Try different possible input to guess the input validation on the server-side
- Use valid inputs to read sensitive files in the server.

#### 6. Bypass Technique

- Sometimes POST is working better than GET. Server might process POST request different than GET, and vice versa. Changing the request method may get a different result.
- Null-byte. Adding a null-byte at the end of our payload to terminate what may come after from the server-side and get the payload executed. This only works with PHP version before 5.3.4
- Using dot-dot-slash. This traverse the directory up to the root of the file system to read sensitive files.
- Use the dot to still stay in current directory and bypass filter /etc/passwd keyword
Example: /etc/passwd/.
- If the directory is forced -> include it in the payload too
Example: if the web application asks to supply input that has to include a directory such as: http://webapp.uc.edu/index.php?lang=languages/EN.php then, to exploit this, we need to include the directory in the payload like so: ?lang=languages/../../../../../etc/passwd.

### 7. Remediation
To prevent the file inclusion vulnerabilities, some common suggestions include:
- Update framework to latest version
- Implementing web application firewall
- Disable PHP features that can cause File Inclusion such as allow_url_fopen on and allow_url_include.
- Always sanitize user input and implement input validation.
- Implement white list and black list for file locations.

### References

- Impact of LFI: https://www.cobalt.io/blog/a-pentesters-guide-to-file-inclusion

- LFI Cheatsheet: https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/File%20Inclusion

- Null-byte injection EOL: https://security.stackexchange.com/questions/48187/null-byte-injection-on-php
