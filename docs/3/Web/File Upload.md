### 1. What is a File Upload vulnerability?
Many websites these days allow users to upload their files. For instance, job websites could ask users to upload their resume and send it to the employee. Social media 
app will ask users to upload the photo to change their avatar, and so on. These features has been existed for a very long time. When a file is uploaded, it gets sent to 
the back-end database to process, and because of that, malicious file could be sent throughout these functions. 
By identifying the technologies running under the application, hackers can send crafted file that could get the server executed and run on the server. This could lead to a lot of severe damage on the server, depending on the payload. The consequences include:
- Remote code execution if the hackers can upload a shell on the website an run it to get a session on the server.
- Serving bad contents. If bad files got uploaded onto the website, it will be shown to the users and may cause other vulnerabilities such as cross-site scripting.
- Malicious files could be used to deface the website, making big alteration to the website.
Because of that, controlling the boundary of which files that users can upload to the website is very important, and there are different ways that we can test to exploit and defense against this type of vulnerability.

### 2. Methodology
Enumeration is significant in this kind of attacks. As mentioned before, we have to know which kind of technologies running under the application. This can be done through analyzing source code and directory fuzzing. Reading through the source code could help us to understand filters applied. For directory fuzzing, dirbuster could be a good application to know the structure of the website. Wappalyzer is an easy add-on to scan for different technologies running in the applications. Having a good understanding of the app will make it easier to know how it handling inputs, so we know what we can or cannot upload.

### References
- Wappalyzer tool: https://www.wappalyzer.com/

