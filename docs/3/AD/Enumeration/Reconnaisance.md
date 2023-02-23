This article will show how hackers gather information for an attack and how to mitigate against it.

### 1.	What is a reconnaissance attack?
-	Reconnaissance is a type of computer attack in which an intruder engages with the targeted system to gather information about vulnerabilities. The attacker first discovers any vulnerable ports by using software's like port scanning.
-	In this document, we will cover some tools that can be used for reconnaissance 

### 2.	Types of reconnaissance
-	There are two types of reconnaissance: passive and active reconnaissance. 
-	Active reconnaissance involves being present on a target network or server, leaving a trail in the hacker's wake.
-	Passive reconnaissance is concerned with being as untraceable as possible.

### 3.	Passive reconnaissance
#### a.	Whois
-	Whois is built-in in Kali Linux, and it is used to gather general information about specific domain.
-	We can just type in the terminal whois tesla.com

![image](https://user-images.githubusercontent.com/112114250/203435309-847b52cf-4a23-4e53-98dd-610468070efc.png)

#### b.	theHarvester
-	TheHarvester is a very useful tool for email gathering. It used some popular search engine such as google, bing to gather email for the specific domain. 
-	TheHarvester is not built-in in Kali Linux, so we need to install. We can easily install by typing in:
```bash
apt-get install theharvester
```
-	Here is the command that we would use to gather email for tesla.com
```bash 
theHarvester -d tesla.com -b google
```
-	After that, we should see a list of email attach with that domain.

![image](https://user-images.githubusercontent.com/112114250/203435485-24ddcda7-ece1-4bf6-84db-01f1129cda40.png)

-	With those information, we can run a phishing attack against those emails.

#### c.	hunter.io
-	Hunter.io is a website, and it does the same thing like theHarvester, but it has limited search times unless we pay for it, and sometimes theHarvester may not gather enough information.
-	We just need to login for an account and ready to search.
-	Here we will search for tesla.com again
-	Just type in tesla.com in the search bar and click the search icon.

![image](https://user-images.githubusercontent.com/112114250/203435578-6b26cb6e-94c8-46ac-b49b-3fe24abcab7d.png)

-	Here we can see a lot of emails from tesla and from some important people of Tesla because some emails have their roles attach to it.
-	This website is very handy for preparing a phishing attack.
#### d.	haveibeenpwned.com
-	haveibeenpwned.com is a website that helps us to see if the email information has been disclosed through data breaches. 
-	This is very important because if the email has been the victim of data breaches, there is a high chance that hacker can get that information on the deep web.
-	To use this website, we just simply go to haveibeenpwned.com and type in the email. Here I will use one of the emails gathered from hunter.io.

![image](https://user-images.githubusercontent.com/112114250/203435723-b75eb7e9-ca66-4578-8ee5-29cb68c3f063.png)

-	This is a good sign that the email has not been pwned.
-	Now let’s see how a bad sign looks like.

![image](https://user-images.githubusercontent.com/112114250/203435747-4602ebe0-2bea-4616-9022-9813dd180f50.png)

-	We can see all the breaches that the email was pwned in. 

#### e.	Crt.sh
-	crt.sh is a helpful website that help we find subdomains. Subdomains are helpful because if people who develop the web server forgot to take out old domains, we can find useful information from those domains.
-	Go to crt.sh, type in %.tesla.com to search for subdomains of tesla. The percentage sign means everything that comes before tesla.com

![image](https://user-images.githubusercontent.com/112114250/203435802-43edd4e9-826c-4da6-9fcd-51959a06b6ae.png)

-	We see some subdomains of tesla.com, some will exist and some will not. With this information, we can look into interestings subdomains such as dev.tesla.com or marketing.tesla.com

#### f.	Google Fu 
-	Google Fu means the skills of using google to find information on the internet. This means we can use some special characters to make the result as precise as we want.
-	For example, we want to find all pdf files related to tesla.com, we can do this.

![image](https://user-images.githubusercontent.com/112114250/203435859-cb20b450-e80d-4d44-93a4-0100a2962071.png)

-	This will show all pdf files on tesla.com. This is a basic example, but what if we change the filetype to sql, things can get very malicious.
#### g.	Wappalyzer
-	Wappalyzer is a plugin on the browser that help us identify framework of website we are testing against.
-	On our firefox browser, search google for wappalyzer extension firefox and add it to our browser. 
-	After that we can see the icon after URL bar.

![image](https://user-images.githubusercontent.com/112114250/203435891-38664f55-3853-4015-8737-a7a6229c5169.png)

### 4.	Active reconnaissance
-	Active reconnaissance usually works better on internal penetration testing because external penetration testing has a lot of issue to deal with such as firewall, intrusion detection system.
-	We will use our pentest lab for demonstration because it is an internal network.

#### a.Nmap
-	Nmap is a tool to do network mapping, fingerprinting, port scanning, and vulnerability scanning.
Port scanning and fingerprinting
-	Knowing all services and the operating system of the specific host is very useful for penetration testing.
-	To do a port scanning against a host, we just need to type in:
```bash
nmap -p- -A -T4 <target IP>
```

-	We will do an example scan against windows 2008 machine.

![image](https://user-images.githubusercontent.com/112114250/203435955-1d881d80-dc2e-4b6b-93cc-a173043d86ad.png)

-	We can see a lot of information that we can use. On port 445, the result is saying that the OS is windows server 2008 R2, which is helpful for finding exploits.
-	Furthermore, seeing port 445 open with windows 2008 OS means that there is a high chance that the machine is vulnerable to Eternalblue. 
-	We saw that port 445 is open on windows 2008, so we can use nmap to check that if it is vulnerable to Eternalblue. Type in:

```bash
nmap -p445 --script smb-vuln-ms17-010 <target IP>
```
  
  ![image](https://user-images.githubusercontent.com/112114250/203436096-3239cb66-68ab-4766-a9dc-771f2dd0d21d.png)
-	The script says that the target is vulnerable to ms17-010, and it is an easy low hanging fruit exploit that we should try first.

### 5. Mitigations
- Security awareness training will help employees to be more aware with cyber attacks such as phishing.
- Implementing advanced security strategies and solutions, such as endpoint detection and response (EDR), SIEM. Implementing security mechanism to generate alerts and traces that could help organization to prevent attacks and investigate incidents faster.
- Conducting a penetration test periodically could help our system more secure because we could find vulnerabilities in our system before hackers can exploit it.
- Do not use working emails for social or commercial sites because our emails could be exposed for hackers to easily gather information.




