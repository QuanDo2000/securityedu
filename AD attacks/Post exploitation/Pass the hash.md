### What is NTLM?
Windows New Technology LAN Manager (NTLM) is a suite of security protocols offered by Microsoft to authenticate users’ identity and protect the integrity and confidentiality of their activity. At its core, NTLM is a single sign on (SSO) tool that relies on a challenge-response protocol to confirm the user without requiring them to submit a password.

### Pass the hash
#### What is pass the hash attack
The Pass the Hash (PtH) technique allows an attacker to authenticate to a remote system or service using a user’s NTLM hash instead of the associated plaintext password.

#### How pass the hash works with examples
-	After exploiting a machine, we get these hashes, but we cannot crack it because it is so complex. We can try [crackmapexec](https://github.com/Porchetta-Industries/CrackMapExec) and pass these hashes around to see if we can login another computer with the same hash.
![image](https://user-images.githubusercontent.com/112114250/202681025-bb8e8fed-acae-466a-b32e-fc1a487c20f4.png)
- We can use crackmapexec to pass the hash around the network to see where we can log in
```bash
crackmapexec smb 10.0.2.0/24 -u Administrator -H aad3b435b51404eeaad3b435b51404ee:e45a314c664d40a227f9540121d1a29d
```
![image](https://user-images.githubusercontent.com/112114250/202681298-7a82b0fe-1927-4c37-bd8c-744e3f7158e7.png)
-	We see that the admin hash can be use to login 10.0.2.19 and 10.0.2.20 
- With this information, we can get a meterpreter by using a module called psexec.

### PsExec with examples
-	PsExec is a command-line tool that lets you execute processes on remote systems and redirect console applications' output to the local system so that these applications appear to be running locally.
-	Using the same hash that we pass before, PsExec can be used to log in and create a shell on the remote machine.
![image](https://user-images.githubusercontent.com/112114250/202682339-ab8d2e8f-6be4-4671-8089-fd23ebe9a3af.png)

### Pth Mitigations
- Disable Lan Management (LM) hashes
- Create complex password policy for Domain Admin accounts
- Create non-privilged account, so that system admins can perform normal daily tasks instead of using privileged account

### References
NTLM theory: https://www.crowdstrike.com/cybersecurity-101/ntlm-windows-new-technology-lan-manager/
