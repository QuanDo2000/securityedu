### What is IDOR vulnerability?
IDOR stands for Insecure Direct Object Reference and is a type of access control vulnerability.

This kind of vulnerability can happen when a web server gets user input to get objects (files, data, documents) and too much trust is put in the input data without checking on the server-side to ensure the requested object belongs to the user requesting it.

### IDOR example
Imagine that you wish to update your profile information after recently signing up for a service online. You can view your information at http://online-service.test/profile?userid=123 by clicking the link.

Attackers can try to change the user id value to 100 (http://online-service.test/profile?userid=100) to try to see another user information, and then we have discovered the IDOR vulnerability.

### Type of IDOR vulnerabilities
##### 1. Encoded IDs
Web developers frequently take the raw data and encrypt it before transmitting it from page to page via post data, query strings, or cookies. Encoding guarantees that the information will be understandable by the receiving web server. Encoding converts binary data into an ASCII string, typically using the padding characters a-z, A-Z, 0-9, and =. Base64 encoding is the most widely used encoding method on the web. However, attackers can decode this encoded string, change it into other user IDs, and encode it again using the base64. This way attackers can inject other users IDs to find IDOR vulnerabilities.

##### 2. Hashed IDs
Same as encoded IDs, but hash value cannot be reverted. We can try to guess the pattern using the hash table, and then put the hash to change the user IDs.

### Remediation
- Access validation: Make sure the input IDs belong to the users requesting it. If the users does not have a valid credentials for the requested content, the server can drop the request and return an error.




