### Steps for testing for LFI

- Find an entry point that could be via GET, POST, COOKIE, or HTTP header values!
- Enter a valid input to see how the web server behaves.
- Enter invalid inputs, including special characters and common file names.
- Don't always trust what you supply in input forms is what you intended! Use either a browser address bar or a tool such as Burpsuite.
- Look for errors while entering invalid input to disclose the current path of the web application; if there are no errors, then trial and error might be your best option.
- Understand the input validation and if there are any filters!
- Try the inject a valid entry to read sensitive files

#### Bypass Technique
- Sometimes POST is working better than GET
- Null-byte
- Using dot-dot-slash
- Use the dot to still stay in current directory and bypass filter /etc/passwd keyword
Example: /etc/passwd/.
- If the directory is forced -> include it in the payload too
Example: if the web application asks to supply input that has to include a directory such as: http://webapp.thm/index.php?lang=languages/EN.php then, to exploit this, we need to include the directory in the payload like so: ?lang=languages/../../../../../etc/passwd.

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

