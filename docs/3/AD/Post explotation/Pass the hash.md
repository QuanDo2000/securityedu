### 1. What is NTLM?
NTLM is an authentication protocol of Microsoft used in Active Directory environment. It used the challenge and response method to authenticate users to ensure the integrity of the act performed by the users.

### 2. NTLM authentication process
- Client send the authentication request with username to the server 
- Server generates a random generated numbers as a challenge
- The client encrypt the password with the challenge and send to the server to verify the credentials
- The server send the challenge and user response to the Domain Controller. Because the Domain Controller has the database contains all the users hash, it verifies the authentication by calculating the value with the username and challenge and double check with the users response. If they match, users get authenticated, and if they do not match, access denied and the result will be sent to the server
- The server sends the result to the client


### 3. Pass the hash
#### a. What is pass the hash attack
Because of the NTLM authentication process, users can just know the hash and already get authenticated. Therefore, knowing the plaintext in not needed, and hackers can passing the hash around to authenticate as another users.

#### b. How pass the hash works with examples
-	After exploiting a machine, we get these hashes, but we cannot crack it because it is so complex. We can try [crackmapexec](https://github.com/Porchetta-Industries/CrackMapExec) and pass these hashes around to see if we can login another computer with the same hash.
![image](https://user-images.githubusercontent.com/112114250/202681025-bb8e8fed-acae-466a-b32e-fc1a487c20f4.png)
- We can use crackmapexec to pass the hash around the network to see where we can log in
```bash
crackmapexec smb 10.0.2.0/24 -u Administrator -H aad3b435b51404eeaad3b435b51404ee:e45a314c664d40a227f9540121d1a29d
```
![image](https://user-images.githubusercontent.com/112114250/202681298-7a82b0fe-1927-4c37-bd8c-744e3f7158e7.png)
-	We see that the admin hash can be use to login 10.0.2.19 and 10.0.2.20 
- With this information, we can get a meterpreter by using a module called psexec.

### 4. PsExec with examples
-	PsExec is a tool to help users execute process on remote system. Using this can help hackers create remote shell on the target machine.
-	Using the same hash that we pass before, PsExec can be used to log in and create a shell on the remote machine.
![image](https://user-images.githubusercontent.com/112114250/202682339-ab8d2e8f-6be4-4671-8089-fd23ebe9a3af.png)

### 5. Pth Mitigations
- Disable using NTLM hashes in the environment
- Domain Admins Account should have complex password

### 6. References
NTLM theory: https://www.crowdstrike.com/cybersecurity-101/ntlm-windows-new-technology-lan-manager/
