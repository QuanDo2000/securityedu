### 1. What is a database?
According to Oracle, a database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.

### 2. What is Structured Query Language (SQL)?
Structured Query Language is a programming language used in relational database to query and manage data. Some basic syntax in SQL are:

### SQL Injection

SQL injection is a type of attack when attackers try to send malicious query to the server to execute. When the query is not sanitized correctly, this could lead to a lot of potentials attacks such as RCE, credentials harvesting.


### 3. Type of SQL Injection

#### In-Band SQL Injection

In-Band SQL Injection is the simplest way to exploit SQL injection. The attackers can submit the payload and receive the result on the same page.


##### Error-Based SQL Injection

This type of SQL injection is useful to know more information about the database. We can trigger the error by using syntaxes that could make the database return error, such as single apostrophes or a quotation mark.


#### Blind SQL injection
##### Authentication Bypass

Attackers can create a simple query and submit to the login form to bypass authentication by makeing it always true, and example query could be:
```SQL
administrator' or 1=1-- 
```
This query says that login as administrator or 1=1, which is always true, followed by the --, which is comment in SQL to end the query without parsing anything come after it.

### 4. Practical examples (OWASP Juice Shop)
##### a. Blind SQL injection
In this example we have a login form that take a username and password to login. 
![image](https://user-images.githubusercontent.com/112114250/220799219-28da7d10-d1fe-4b27-9219-6f65014b425a.png)

We try login with credentials of test:password to see what happens. It returns an error of Invalid email or password.
![image](https://user-images.githubusercontent.com/112114250/220799637-f9f7f012-683c-43de-98b8-339ea19c3949.png)

Let's try some basic SQL Injection since we know the website connect with database to authenticate user. 

PAYLOAD: admin' or 1=1--

![image](https://user-images.githubusercontent.com/112114250/220800303-eb15618f-a594-4bda-810b-bb968a047ab5.png)

And we solve the challenge to log in as administrator account using SQL injection.
![image](https://user-images.githubusercontent.com/112114250/220800351-f9390efa-e7f9-43ee-a94e-c0cc886723a1.png)





References:
- https://www.oracle.com/database/what-is-database/


