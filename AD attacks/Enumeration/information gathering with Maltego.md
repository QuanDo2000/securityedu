### 1.	Introduction
Maltego is an interactive data mining tool that renders directed graphs for link analysis. The tool is used in online investigations for finding relationships between pieces of information from various sources located on the Internet. 
### 2.	Basic setup
-	Maltego is built-in Kali Linux so we do not need to install it, but we still need to do some basic setups.
-	You can run it by going Application > Information gathering > Maltego.

![image](https://user-images.githubusercontent.com/112114250/203438208-97d69460-b690-4a9e-90d0-b98a370d2cf4.png)

-	The welcome screen will appear.

-	In this case, we will choose the CE version for the ease of use. Click run on the Maltego CE(free) version.

![image](https://user-images.githubusercontent.com/112114250/203438234-02042769-3792-4a55-be58-39aaf5aae990.png)

-	The configuration windows will appear. For License Agreement, click accept and click Next.

![image](https://user-images.githubusercontent.com/112114250/203438289-62edfb73-131f-4be0-abd4-02c5c72a9fbb.png)

-	For login, if you haven’t registered, click register here and sign up for an account.

![image](https://user-images.githubusercontent.com/112114250/203438320-cef7e794-9f46-4229-8229-31cf3819c09a.png)

-	After that, you can type in the credentials and solve the captcha.
-	You will receive a login result.

![image](https://user-images.githubusercontent.com/112114250/203438339-74efeab1-04ec-4608-b32b-f6b498322995.png)

-	Click next, then it will installed what is needed in the community version.

![image](https://user-images.githubusercontent.com/112114250/203438365-7f799c5c-cbab-4839-82dc-e0def5f4a6a0.png)

-	Click next, and click finish.
-	Now maltego is set up and ready to use.
-	To generate a new graph, click on the folder with a plus icon on the top left corner.

### 3. Conducting a reconnaisance with Maltego

![image](https://user-images.githubusercontent.com/112114250/203438394-093038ca-0920-4edc-85c0-db8cbe812bca.png)

-	Here we will see a blank graph.

![image](https://user-images.githubusercontent.com/112114250/203438406-262f1042-5aee-4e15-86bf-6adf8dc7ca86.png)

-	On the left, there is an entity palette, we will drag the domain tab to the blank page to gather information about tesla.com

![image](https://user-images.githubusercontent.com/112114250/203438430-8e0a2ccb-6853-494b-9584-1258523b062d.png)

-	After the drag, we will see the icon with parteva.com domain.

![image](https://user-images.githubusercontent.com/112114250/203438443-1808885a-217e-42e6-8918-3c2375b68d46.png)

-	We can double click the icon to change it to tesla.com.

![image](https://user-images.githubusercontent.com/112114250/203438451-ff555743-28ce-4275-bea1-18fe4e953c40.png)

-	Click OK.
-	Next, we will gather some emails related to tesla.com. To do this, we right click the tesla.com entity, choose All Transform > To email address [PGP].

![image](https://user-images.githubusercontent.com/112114250/203438474-7560e98c-7adb-4b5e-aacc-a6d0c722fd49.png)

-	This will search for email attached with tesla.com in the PGP key server. The result should look like this.

![image](https://user-images.githubusercontent.com/112114250/203438502-b47656b9-4fb3-4da7-a131-2697201106a6.png)

-	Here we see bunch of email addresses found from the PGP server. To figure out more, we can use theharveste(we covered how to use it in one of our documents) to search for other emails from google and copy it to Maltego.

```bash
theHarvester -d tesla.com -l 1000 -b google 
```
-	This will search for emails attached with tesla.com on google.

![image](https://user-images.githubusercontent.com/112114250/203438565-59f0f49d-cdbf-4d1d-9724-bcb74a773de4.png)

-	Here we see other email results that was different from what we found before.
-	Copy all the emails and paste it into Maltego.

![image](https://user-images.githubusercontent.com/112114250/203438589-b90dbff7-a539-40d4-8496-520895b35f2e.png)

-	We see that all the results from theharvester are pasted in, and they are new emails because we don’t see a prompt saying that the email exists.
-	After gathering all emails, we can run a transform that will check if any of these emails got pwned before. 
-	To do this, we scroll all the email address email like this.

![image](https://user-images.githubusercontent.com/112114250/203438622-e726d9ba-667c-4956-a8a7-0c6fce55c1a9.png)
-	After that, look on the right we see the detail view of emails, we scroll and select all the emails, then we right click to see which kind of transform we want to run. Type in breach.

![image](https://user-images.githubusercontent.com/112114250/203438650-86045463-95f4-4037-9b21-17e4d405306c.png)

-	We see the option to get all breaches. Click that option, and it will gather all the breaches of these email addresses from haveibeenpwned.com
-	The result is interesting. Eventhough it is tesla.com, employees still use their work emails to register for account on websites.
![image](https://user-images.githubusercontent.com/112114250/203438687-3d799484-465d-42f9-bb3c-0b4837bc2bf4.png)

-	We can see that a lot of emails were pwned from the apolio.io, adapt.io, verifications.io, and PDL breaches. From here, we can gather more details about the breach to know what information that was leaked to the internet. To do this, we choose the specific data breach domain > right click > enrich breached domain.

![image](https://user-images.githubusercontent.com/112114250/203438708-45d3806b-b817-4b02-b84e-c3f95a83ac9c.png)

-	In this example, we will choose verification.io to see what elon@tesla.com has leaked to the internet.

![image](https://user-images.githubusercontent.com/112114250/203438727-6cff9e5a-6e53-48c6-bc34-8ac91cf74c9a.png)

-	According to the result, we know that some important information like phone numbers, geographic locations, physical addresses have been leaked because of the data breached. With this information, hackers can use it for further action such as phishing, making a scam phone call, and more. 
-	Through this example, we can see how we can track down a domain, or a company emails by just using open-source intelligence like google, PGP, and we are able to gather some useful information that we can use for further exploit. 

### 4. Mitigations
- Change your password periodically.
- Don’t reuse password for every website you go.
- Use two-factor authentication.
- Change your password immediately if you know it is involved in a data breach.





