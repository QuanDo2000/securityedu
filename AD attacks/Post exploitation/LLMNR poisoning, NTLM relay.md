### 1. LLMNR and Netbios concepts

When the DNS service in the environment does not function correctly, two services can substitute the role of it, which are LLMNR and NBT-NS. These are two components in Active Directory environment to locate other hosts using information from hosts in local network.


### 2. What is LLMNR poisoning 
-	If one machine tries to resolve a particular host when DNS fails, it will ask other hosts in the local network for the hostname to identify and connect to the correct host using LLMNR and NBT-NS.

### 3. How hacker can exploit 
An attacker can act as a man-in-the-middle and try to say to the client requesting the LLMNR request and get the users hash as demonstrated with the image below taken from a video of Heath Adams
![image](https://user-images.githubusercontent.com/112114250/202667392-a03ced23-6c1b-445a-bb9a-d61ae2a77bfd.png)

### 4. NTLM relay
#### What is NTLM?
NTLM is an authentication protocol of Microsoft used in Active Directory environment. It used the challenge and response method to authenticate users to ensure the integrity of the act performed by the users.

### NTLM relay attack
Using the first step of catching other users' hashes of NTLM, we can use that users hash and relay it to other hosts to authenticate. There are requirements for this attacks:
- SMB signing has to be disabled or enabled but not enforced. If this is enabled, the server would check the message signature, and we cannot forge it to pass the hash around.
- We would want to enumerate for accounts with administrative privileges because there are specific accounts that can access resources. Having accounts with administrative privileges can help us to access the host directly to gain a foothold.

There is a tool call Reponsder that could support us to sit and listen for authentication flying around the network. This tool is installed by default in the latest version of Kali Linux with Impacket toolkit. If not, we can installed it with apt:
```bash
sudo apt install impacket
```

After the installation, we can run the tool with this command

```bash
sudo responder -I tun0
```
![image](https://user-images.githubusercontent.com/112114250/230697847-eb65b370-588e-46f8-ac67-2a1fcb946f99.png)

This will catch the authentication hash, and we can use it to crack the hash offline with hashcat.

```bash
hashcat -m 5600 hash.txt passwordlist.txt --force
```
![image](https://user-images.githubusercontent.com/112114250/230697887-36ec9275-0265-4f77-8d39-af67d560a55b.png)


#### NTLM relay mitigation
- Microsoft has a good [post](https://support.microsoft.com/en-gb/topic/kb5005413-mitigating-ntlm-relay-attacks-on-active-directory-certificate-services-ad-cs-3612b773-4043-4aa9-b23d-b87910cd3429) in mitigating NTLM relay


### References
- LLMNR and Netbios theory: https://attack.mitre.org/techniques/T1557/001/#:~:text=Adversaries%20can%20spoof%20an%20authoritative,with%20the%20adversary%20controlled%20system.


- NTLM relay mitigation: https://support.microsoft.com/en-gb/topic/kb5005413-mitigating-ntlm-relay-attacks-on-active-directory-certificate-services-ad-cs-3612b773-4043-4aa9-b23d-b87910cd3429

- LLMNR poisoning image: https://www.youtube.com/watch?v=Fg2gvk0qgjM
