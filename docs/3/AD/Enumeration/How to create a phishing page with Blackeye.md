### 1.	Introduction
Social media accounts is a big attack target for hackers. Most social media attacks are based on phishing. Phishing is a type of attack that trick users to enter their credentials on a fake webpage that hackers create. Blackeye is a tool that help hackers create a phishing webpage easily, and it can be used for social engineering related penetration testing jobs. 


### 2.	How to install Blackeye
First, we need to clone the blackeye’s github repository. To do this, type in:

```bash
cd /opt
git clone https://github.com/thelinuxchoice/blackeye
```

After that, we go to blackeye directory and run the script. Type in

```bash
cd /opt/blackeye
bash blackeye.sh
```

### 3.	Start the phishing page
-	First, we choose the webpage that we want to fake. In this example, we choose eBay. Type in option 18 and press enter.

![image](https://user-images.githubusercontent.com/112114250/227403903-f7cbde01-8276-48fc-9357-a89c8bb9d1e8.png)

-	Next, we are asked to supply our IP address, type in our ip address. If we type in nothing, it will choose our IP by default, but it does not always work.

-	For testing purposes, we use our kali to go to the webpage. Open web browser, type in the IP that is said to send to the victim. In this case, it is 10.0.2.15
 ![image](https://user-images.githubusercontent.com/112114250/227403943-3fd9a02d-d2d4-466b-8b7c-bfe417e0eb20.png)

-	Here we see the ebay webpage that looks convincing. If we go back to our terminal, we see that we found that victim IP, in this case it is our Kali machine’s IP.

![image](https://user-images.githubusercontent.com/112114250/227404074-6f4955a4-8528-474f-99a1-f0e6df4530e9.png)

-	We can also see all the saved credentials in the /opt/blackeye/sites/shopping/saved.ip.txt file. We can check the content of that file by typing in:

```bash
cat /opt/blackeye/sites/shopping/saved.ip.txt
```

![image](https://user-images.githubusercontent.com/112114250/227404103-3612a8be-a33e-4c86-965e-79cecd5c3bf9.png)

Once the target type in their credentials, they will be redirected to the real ebay page, which make they think it is a successful login.
 
![image](https://user-images.githubusercontent.com/112114250/227404126-f42f1138-b442-4321-9cab-df08253010c8.png)

And we found the credential the victim types in.![image](https://user-images.githubusercontent.com/112114250/227404142-aab75eeb-b5ff-4148-90ae-967a0c752282.png)

And just like that, we found the user account. The account is saved in /opt/blackeye/sites/shopping/saved.usernames.txt. We can check the content to see saved credentials. Type in:

```bash
cat /opt/blackeye/sites/shopping/saved.usernames.txt
```

![image](https://user-images.githubusercontent.com/112114250/227404164-cdc8fec3-505e-4ab7-bdac-30334b9eb831.png)

With this information, hackers can do more gathering about the target and get further on the network.

### 4. How to prevent phishing attacks
- Don't click random links unless we know it is from a trusted source.
- Try to inspect the link before browsing to it.
- Enable two-factor authentication to add an extra step for the authentication phase.

### 5. References

- How to install BlackEye: https://www.geeksforgeeks.org/blackeye-phishing-tool-in-kali-linux/

