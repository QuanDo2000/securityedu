# securityedu - Senior Design Project

## Team Members

- Jacob Gardner (Cybersecurity) gardnjr@mail.uc.edu
- Rui Zhou (Cybersecurity) zhourh@mail.uc.edu
- Tan Nguyen (Cybersecurity) nguye5tn@mail.uc.edu
- Minh Quan Do (CS) doqn@mail.uc.edu
- Minh Nhat Le (CS) len2@mail.uc.edu

## Problem Summary

Most people nowadays have multiple mobile devices and personal computers, which store a lot of personal information and some private data. But many people don't realize that this information is not so secure in the device, in other words, people may just need to do some learning to avoid most security information problems. What we want to do is to let people use our content, avoid some self-inflicted data leakage problems, and improve the security of personal computers.

## Problem Statement

Many people leak their information because of a lack of understanding of security knowledge. For mobile phones, many people have given sufficient permissions to the app after downloading, and there is a possibility of data leakage. Some bad developers will obtain user information, conduct data analysis and even sell. For PC, many people do not know how to carry out a basic security configuration, or for some people, the need is to strengthen the defense of their personal computer.

## Solution

Reduce the possibility of information leakage and security issues by introducing information and specific steps to show users how to properly configure the settings using the controllable settings in the mobile device. The same is true for PCs, but in addition, add defense mechanisms and methods on how to strengthen PCs and small businesses.

## Design Documents

Within the folder `design_docs` are the documents created/used during the process of designing the project solution.

## Website

Below are the instructions for the website.

### Start Front-end Service

```bash
cd frontend
npm i
npm run dev
```

The front-end server is hosted on localhost:3000. This starts the development server.

### Start Back-end Service

```bash
cd backend
pip install -r requirements.txt
python manage.py runserver
```

The back-end server is hosted on localhost:8000.

##### API Usage
After running the back-end server, you can access the api by sending request to these urls: <br>

To list all articles, send GET request to: <br> 
http://localhost:8000/api/list <br>

To get a specific article, send GET request to: <br>
http://localhost:8000/api/getArticle?id=articleId <br>

articleId being the id of the article you want to get <br>

To get articles in a specific category, send GET request to: <br>
http://localhost:8000/api/getArticlesByCategory?category=categoryId <br>

categoryId being the id of the categories you want to get <br>

To submit an article to the website, send POST request to: <br> 
http://localhost:8000/api/submit <br>

You have to send data you want to submit along with the POST request in a JSON form <br>
{ <br>
  'title': 'This is my title', <br>
  'category': 'dogs, cats',  //seperate category with a comma and whitespace <br>
  'content': 'This is my content' <br>
 }<br>
 

### Hosting

1. Start the back-end server
2. Build the front-end page by running `npm run build`
3. Start serving the page by running `npm start`

### Documents

All documents posted on the page are located in `docs` folder. Documents must be in Markdown format, the preferred flavor of Markdown is Github.
The category are as follows

1. PC/Laptops
2. Mobile Devices
3. Enterprises (AD)
