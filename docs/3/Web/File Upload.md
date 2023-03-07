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
Enumeration is significant in this kind of attacks. As mentioned before, we have to know which kind of technologies running under the application. This can be done through analyzing source code and directory fuzzing. Reading through the source code could help us to understand filters applied. For directory fuzzing, dirbuster could be a good application to know the structure of the website. Wappalyzer is an easy add-on to scan for different technologies running in the applications. Having a good understanding of the app will make it easier to know how it handling inputs, so we know what we can or cannot upload. Understanding these logic could help us to manipulate around the application and prepare our file to upload correctly. 

### 3. Type of filtering
There are different ways that web servers usually use to filter when it comes to file upload. Some techniques go around the HTTP protocol with the MIME type, others are related to file type. These techniques include:

##### a. File Type filtering
There are two ways that web server usually uses to identify file type, including MIME and the Magic Byte. 
- MIME check: there is a field in the HTTP that helps web server to validate the file type of the upload file called MIME. For example, we can use Burp Suite to intercept one request from one of the Burp Suite lab about File Upload Vulnerabilities
![image](https://user-images.githubusercontent.com/112114250/223302105-b045411e-7114-44b2-8190-3c35018b652c.png)
Here we can see there is a field called Content-Type that has a value of image/jpeg. This helps the web server understand the file type we are turning in are jpeg files. 
- Magic Byte check: If a website allow us to upload image, magic byte is a way to go for a lot of web servers. There are some bytes at the top of the image that makes the system believes that it is an image, as shown in the image below.
![image](https://user-images.githubusercontent.com/112114250/223307414-07c4b13c-b7a4-475d-b2fb-06a770b914fc.png)
These bytes are used to identify the file type, some of the other signatures can be found here https://en.wikipedia.org/wiki/List_of_file_signatures. This field can be changed using hex editor tool to change these first byte into the specific file type we want.

#####b. File Length filtering
Web server often limit the file size that we can upload to the web server. Uploading shell is usully not a problem because shell file size is small. However, it is worth noticing that we should know this information to use for future file upload.

##### c. File Name filtering
The web server will check if the file name already exists in the server, and if it is, the upload will be rejected. Also, file name cannot contain bad characters that would cause an error on the server when it gets through.

### 4. Exploit File Upload Vulnerabilities

##### a. Bypassing MIME Type validation
Coming back to the example about MIME type validation metioned aboved. When we try to upload PHP file, the MIME becomes this.

![image](https://user-images.githubusercontent.com/112114250/223311613-4b5d2a43-f69f-40d0-8f21-64f017223847.png)
We can see that is has become application/x-php, which makes the web server return an error of not allowing this file type.

![image](https://user-images.githubusercontent.com/112114250/223305208-fa0c1ea7-8738-4f44-9c0e-e7332f95dcf2.png)
However, as we see before, hackers can control the MIME field by changing it in Burp Suite and resubmit the file again.

![image](https://user-images.githubusercontent.com/112114250/223311859-e2360ccf-8618-4736-ba3f-995b6874cd4d.png)

![image](https://user-images.githubusercontent.com/112114250/223312529-c899d53f-2160-484e-8905-2ad172c9cbcd.png)


We can see that eventhough it is still a php file, changing the Content-Type header to a MIME type of jpeg help us to bypass the MIME filtering, which makes the malicious file get uploaded on the web server. The content of the file is to get carlos secret by accessing his secret file in his home directory. We can try to browse to the uploaded exploit file to see if it works.

![image](https://user-images.githubusercontent.com/112114250/223312411-9e067b47-7368-47a3-b24f-956604f15df6.png)

We have remote code execution on the web server, which could lead to more dangerous attack than this.

### 5. Remediation
- Using whitelist of permitted file extestion. If we host a webpage for users to change avatar, using a whitelist of allowing image files.
- Go through all the validation before processing the files to be uploaded to the server
- Implemeting framework to prevent file upload vulnerabilities
- Generating random names for files to prevent uploaded files to overwrite existing ones.

### References
- Wappalyzer tool: https://www.wappalyzer.com/
- Magic byte signatures: https://en.wikipedia.org/wiki/List_of_file_signatures
- Portswigger lab: https://portswigger.net/web-security/all-labs
- Portswigger preventing File Upload Vulnerabilities: https://portswigger.net/web-security/file-upload
