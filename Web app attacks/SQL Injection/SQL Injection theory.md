### SQL basics

SQL (Structured Query Language) Injection, mostly referred to as SQLi, is an attack on a web application database server that causes malicious queries to be executed. When a web application communicates with a database using input from a user that hasn't been properly validated, there runs the potential of an attacker being able to steal, delete or alter private and customer data and also attack the web applications authentication methods to private or customer areas. This is why as well as SQLi being one of the oldest web application vulnerabilities, it also can be the most damaging.

#### Limit 1 will only return one row of data. LIMIT 1,1 will force the query to skip the first result

#### The semicolon in the URL signifies the end of the SQL statement, and the two dashes cause everything afterwards to be treated as a comment. By doing this, you're just, in fact, running the query:

#### UNION

The UNION statement combines the results of two or more SELECT statements to retrieve data from either single or multiple tables; the rules to this query are that 
- The UNION statement must retrieve the same number of columns in each SELECT statement. 
- The columns have to be of a similar data type and the column order has to be the same. 
Example
![[Pasted image 20230131182231.png]]

#### Insert

The INSERT statement tells the database we wish to insert a new row of data into the table. "into users" tells the database which table we wish to insert the data into, "(username,password)" provides the columns we are providing data for and then "values ('bob','password');" provides the data for the previously specified columns.


insert into users (username,password) values ('bob','password123');
![[Pasted image 20230131182528.png]]


### Type of SQL Injection

#### In-Band SQL Injection

In-Band SQL Injection is the easiest type to detect and exploit; In-Band just refers to the same method of communication being used to exploit the vulnerability and also receive the results, for example, discovering an SQL Injection vulnerability on a website page and then being able to extract data from the database to the same page.


##### Error-Based SQL Injection

This type of SQL Injection is the most useful for easily obtaining information about the database structure as error messages from the database are printed directly to the browser screen. This can often be used to enumerate a whole database. 

The key to discovering error-based SQL Injection is to break the code's SQL query by trying certain characters until an error message is produced; these are most commonly single apostrophes ( ' ) or a quotation mark ( " ).

##### Union-Based SQL Injection

This type of Injection utilises the SQL UNION operator alongside a SELECT statement to return additional results to the page. This method is the most common way of extracting large amounts of data via an SQL Injection vulnerability.
Steps
- Try to break the SQL query with apostrophes ('') or quotation mark("")
- Detect how many columns using incremented Union query
- Find the number of columns then find the columns where the data is displayed. Show the database name
- Look for table names in the database with group_concat(). Example query:
0 UNION SELECT 1,2,group_concat(table_name) FROM information_schema.tables WHERE table_schema = 'sqli_one'
- Look for column names in tables. Example query:
0 UNION SELECT 1,2,group_concat(column_name) FROM information_schema.columns WHERE table_name = 'staff_users'

- Look for data we want, typically username and password
0 UNION SELECT 1,2,group_concat(username,':',password SEPARATOR '<br>') FROM staff_users

#### Blind SQL injection
##### Authentication Bypass

One of the most straightforward Blind SQL Injection techniques is when bypassing authentication methods such as login forms. In this instance, we aren't that interested in retrieving data from the database; We just want to get past the login. 


Login forms that are connected to a database of users are often developed in such a way that the web application isn't interested in the content of the username and password but more whether the two make a matching pair in the users table. In basic terms, the web application is asking the database "do you have a user with the username bob and the password bob123?", and the database replies with either yes or no (true/false) and, depending on that answer, dictates whether the web application lets you proceed or not. 


Taking the above information into account, it's unnecessary to enumerate a valid username/password pair. We just need to create a database query that replies with a yes/true.


Practical:

Level Two of the SQL Injection examples shows this exact example. We can see in the box labelled "SQL Query" that the query to the database is the following:


select * from users where username='%username%' and password='%password%' LIMIT 1;


N.B The %username% and %password% values are taken from the login form fields, the initial values in the SQL Query box will be blank as these fields are currently empty.


To make this into a query that always returns as true, we can enter the following into the password field:


' OR 1=1;--


Which turns the SQL query into the following:


select * from users where username='' and password='' OR 1=1;


Because 1=1 is a true statement and we've used an OR operator, this will always cause the query to return as true, which satisfies the web applications logic that the database found a valid username/password combination and that access should be allowed.



#### Boolean-based
