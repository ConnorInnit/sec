# Different types of SQL Injection 
---

---
## 1 (UNION-based attacks)
---

UNION tricks the database by joining the unwanted SQL statement with the intended SQL statement ' UNION injected_sql_statement'

**Example**

User Input Text: "'1 UNION SELECT 1 FROM all_tables'" (SQLINJECTION 2020)

SQL Statement After Injection: "'SELECT name, description, price FROM products WHERE category=**1 UNION SELECT 1 FROM all_tables;**'" (SQLINJECTION 2020)

---

---
## 2 (1=1 based attacks)
---

By using OR and 1=1, the attacker can create a second condition, which will always return true.

User Input Statement: "105 OR 1=1" (w3schools)

SQL Statement after injection: "'SELECT * FROM Users WHERE UserId = **105 OR 1=1;**'" (w3school)

---

---


## 3 (Error based)  
---

Forces an error, sometimes a type error and uses this to somehow show sensitive data.

User Input: asdf' UNION select 1, exp(~(select*from(SELECT Password FROM profiles WHERE ID=1)x)); -- -
 
SQL Statement after injection: SELECT user_id FROM users WHERE username='**asdf' UNION select 1, exp(~(select*from(SELECT Password FROM profiles WHERE ID=1)x)); -- -;**

---

Other types of more complex methods include:

- Boolean based - tries to gleen information from the database, that can then be used in other attacks 
- Time based - uses delays to test information about the database 
- Out of band - get the database to send http requests or DNS requests, containing sensitive database data, to a listening server that the attacker can then access

I find these Methods to be too complex for the scope of the project.

Ways to prevent these attacks includes sanitising data, removing special characters and unwanted SQL, and another is creating prepared statements. 

### Reference List
---

SQLINJECTION.NET (2020), *SQL Injection Using UNION* [online], Available from <https://www.sqlinjection.net/union/> [5 October 2023]

W3school.com (2023), *SQL Injection* [online], Available from <https://w3schools.com/sql/sql_injection.asp> [5 October 2023]

 