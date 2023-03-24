### 1.	Introduction
During the OSINT investigation phase, it is necessary to find all the information that tie to the target, so that we can see a bigger picture of the person we want to attack. Sherlock is a powerful command line tool provided by Sherlock Project that can be used to look for usernames on many social media pages. Through these webpages, we can gather more information through the target’s photos, posts. 


### 2.	Install Sherlock
-	To install Sherlock, we need python 3 and pip. Python 3 is installed in Kali linux by default, so we need to install pip. Type in:
```bash
apt-get install python3-pip
```
-	Next, we need to clone the Sherlock Github repository. Go to /opt directory and clone. Type in:
```bash
cd /opt
git clone https://github.com/sherlock-project/sherlock.git
```
![image](https://user-images.githubusercontent.com/112114250/227412299-931043ba-b064-4418-a094-13a16e49a520.png)

-	After that, we need to install all the dependencies required to run Sherlock. Type in:
```bash
pip3 install -r requirements.txt
```
![image](https://user-images.githubusercontent.com/112114250/227412353-57272596-8f3b-4098-aa48-3ac9a144a29d.png)

-	Once the installation complete, we can run:
```bash
python3 sherlock.py USERNAMES -r --print-found 
```
-	The Usernames will be the name we want to search, the -r option will organize the result by which websites are the most popular, and the --print-found will just show the results that the tool finds.
-	We will do an example to search for one of the famous billionaires Bill Gates. Type in:
```bash
python3 sherlock.py billgates -r --print-found
```
 ![image](https://user-images.githubusercontent.com/112114250/227412396-8a7f31e9-753a-4424-b742-bebd36c9dd94.png)

-	We can see that it searches for Bill Gates in a lot of social media websites. We can open some of the valuable websites that we can gather information. 
 
 
 ![image](https://user-images.githubusercontent.com/112114250/227412422-a854146d-a6db-47c8-a100-442446c2bb2f.png)

-	Through his facebook, we see he is a public figure and he joins a lot of projects to help the society.
 ![image](https://user-images.githubusercontent.com/112114250/227412459-904cdef4-6f86-4e5f-a4e4-9873a102ed7d.png)

-	His twitter also shows the same thing.
-	Since Bill Gates is very popular, so I think facebook and twitter are the two good sites that we should visit. If we visit reddit or ebay, there will be a high chance that other people try to fake Bill Gates, so the information we gather will not be valuable.
-	By using Sherlock, hackers can hunt down all social media accounts attached with the username we enter. This can be helpful because users may expose sensitive information on their social media accounts.

### 3. How to prevent OSINT from social media
- Do not put too much sensitive information such as birthday because hackers might use it for password guessing attacks.
- Do not post images with location because it might be used to circle where you are.
- Try to limit people who can view your profile to limit the attack surface.

### 4. References

- Sherlock github: https://github.com/sherlock-project/sherlock
