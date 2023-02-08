### 1. What is a database?
According to Oracle, a database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.

### 2. What is Structured Query Language (SQL)?
Structured Query Language is a programming language used to manage relational database. Some basic SQL syntaxes are:
#### Select
The SELECT statement is used to select data from a database. For example:

```SQL
select * from users;
```
This will retrieve everything from the users table.
```SQL
select username,password from users;
```
This will retrieve data from the username,password column from the users table.

#### UNION

The UNION statement combines the results of two or more SELECT statements to retrieve data from either single or multiple tables; the rules to this query are that 
- The UNION statement must retrieve the same number of columns in each SELECT statement. 
- The columns have to be of a similar data type and the column order has to be the same. 
Example query:
```SQL
SELECT name,address,city,postcode from customers UNION SELECT company,address,city,postcode from suppliers;
```

#### Insert

The INSERT statement tells the database we wish to insert a new row of data into the table. "into users" tells the database which table we wish to insert the data into, "(username,password)" provides the columns we are providing data for and then "values ('test','password');" provides the data for the previously specified columns.

```SQL
insert into users (username,password) values ('test','password123');
```

#### Limit 1 will only return one row of data. LIMIT 1,1 will force the query to skip the first result
#### The semicolon in the URL signifies the end of the SQL statement, and the two dashes in SQL treats everything afterwards a comment. 

### SQL Injection

SQL injection can be used to attack a web application database server to make malicious queries are executed. When a web application interfaces with a database using user input that hasn't been sanitized correctly, an attacker may be able to steal, destroy, or manipulate private and customer data as well as assault the web application's authentication methods to private or customer areas. Due to this, SQLi is one of the oldest and dangerous web application attacks.


### 3. Type of SQL Injection

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
0 UNION SELECT 1,2,group_concat(table_name) FROM information_schema.tables WHERE table_schema = 'sqli_uc'
- Look for column names in tables. Example query:
0 UNION SELECT 1,2,group_concat(column_name) FROM information_schema.columns WHERE table_name = 'ucstaff_users'

- Look for data we want, typically username and password
0 UNION SELECT 1,2,group_concat(username,':',password SEPARATOR '<br>') FROM staff_users

#### Blind SQL injection
##### Authentication Bypass

When avoiding authentication procedures like login forms, one of the simplest Blind SQL Injection techniques is used. In this case, getting data out of the database is not what we want; we just want to get past the login.

When creating login forms for online applications that connect to user databases, it's common practice to focus less on the text of the username and password and more on whether they match up in the users table. For example, the web application asks the database, "Do you have a user with the username tan and the password tan123?" The database responds with either yes or no (true/false), and depending on that response, decides whether the web program will be allowed to continue. Because of that, we do not need to care about enumerating username or password.


#### Boolean-based

References:
- https://www.oracle.com/database/what-is-database/


