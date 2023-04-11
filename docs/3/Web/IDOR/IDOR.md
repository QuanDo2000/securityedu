### 1. What is IDOR vulnerability?

This kind of vulnerability can happen when a web server receive user input without checking if it comes from the real user.

### 2. IDOR example
Imagine that you wish to update your profile information after recently signing up for a service online. You can view your information at http://online-service.test/profile?userid=123 by clicking the link.

Attackers can try to change the user id value to 100 (http://online-service.test/profile?userid=100) to try to see another user information, and then we have discovered the IDOR vulnerability.

### 3. Type of IDOR vulnerabilities
##### a. Encoded IDs
These IDs come after the URL path will be encoded in many different ways, typically Base64. Attackers can easily decode it, put in another payload, and encode it again to send it to the server and access other users' resources.

##### b. Hashed IDs
This technique is the same as Encoded IDs, but hashing making it more difficult because attackers need to use hash table to compare the hash of the IDs and then hash it again to put into the payload.

### 4. Practical examples(OWASP Juice Shop)
In OWASP Juice Shop, login to the Admin account and click 'Your Basket' and intercept the request with Burp Suite.
![image](https://user-images.githubusercontent.com/112114250/220803296-9e37eabb-ec3c-4cfa-aef6-85b4c24b280d.png)

We can see the basket is for User with ID 1
![image](https://user-images.githubusercontent.com/112114250/220803808-4fefc7e6-5c51-41ba-b5da-2ed2c0c5d5da.png)


Repeat the process and capture the request again, change ID to 2 to see what happen.
![image](https://user-images.githubusercontent.com/112114250/220803637-52931708-6077-4589-a038-ec40bafa4d40.png)


### 5. Remediation
- Access validation: validate the IDs actually belong to the user requesting it. This can be check through many defense mechanism such as cookie.

### References

- What is IDOR vulnerabiltiy: https://portswigger.net/web-security/access-control/idor


