### What is IDOR vulnerability?
IDOR stands for Insecure Direct Object Reference and is a type of access control vulnerability.

This type of vulnerability can occur when a web server receives user-supplied input to retrieve objects (files, data, documents), too much trust has been placed on the input data, and it is not validated on the server-side to confirm the requested object belongs to the user requesting it.
When the server-side does not check users who is requesting the data.

### IDOR example
Imagine that you wish to update your profile information after recently signing up for a service online. You can view your information at http://online-service.test/profile?userid=123 by clicking the link.

Attackers can try to change the user id value to 100 (http://online-service.thm/profile?userid=100) to try to see another user information, and then we have discovered the IDOR vulnerability.

