### 1. What is password cracking?
Password cracking is the process of recovering password in different forms such as encryption or hash. This scenarios happen a lot when we are doing pentesting that we 
retrieve hashes from DcSync attacks or cracking Kerberos tickets.
### 2.	Unzip the wordlist we will use
Throughout this article, I will use rockyou.txt as the main dictionary to perform password cracking. The zip file of rockyou is located by default at /usr/share/wordlists. Type in these commands to unzip the wordlist.
```bash 
cd /usr/share/wordlists
gunzip rockyou.txt.gz
```
### 3.	Different types of hashes in windows system
#### a.	LM hash 
-	LM-hashes is the oldest type of hashing in Windows system and we can crack it easily. It can be easily retrieve from the local SAM database on Windows host or the NTDS.dit database on the Domain Controller
Example:
```
299bd128c1101fd6
```
Cracking LM hashes:
```bash
john --format=LM --rules -wordlists=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 3000 -a 3 hash.txt /usr/share/wordlists/rockyou.txt hash.txt
```
#### b.	NTHash
-	NThash is a more modern version of LM hash. This hash can be also be retrieve from local SAM database or NTDS.dit file on DC. NThash is used to pass the hash in AD environment.
Example:
```
b4b9b02e6f09a9bd760f388b67351e2b
```

To crack NThash we run:
```bash
john --format=NT --rules --wordlists=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 -a 3 hash.txt --wordlists=/usr/share/wordlists/rockyou.txt hash.txt
```

#### c.	NTLMv1 
-	The NTLM authentication protocol uses the NTHash in challenge and response between the client and the server. 

Example:
```
u4-netntlm::kNS:338d08f8e26de93300000000000000000000000000000000:9526fb8c23a90751cdd619b6cea564742e1e4bf33006ba41:cb8086049ec4736c
```
How to crack:
```bash
john --format=netntlm --rules -w=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 5500 -a 3 hash.txt /usr/share/wordlists/rockyou.txt hash.txt
```

#### d.	NTLMv2 
-	NTLMv2 is the newer version of NTLMv1 that use different algorithm during the challenge and response process with longer random generated number to make it more secure and harder to crack.


Example:
```
admin::N46iSNekpT:08ca45b7d7ea58ee:88dcbe4446168966a153a0064958dac6:5c7830315c7830310000000000000b45c67103d07d7b95acd12ffa11230e0000000052920b85f78d013c31cdb3b92f5d765c783030
```
![image](https://user-images.githubusercontent.com/112114250/230747385-f6e16585-b761-467b-8f77-6bf0e21ded10.png)
 

How to crack:
```bash
john --format=netntlmv2 --rules -w=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 5600 -a 3 hash.txt
```

### 4. Cracking different type of Kerberos tickets
#### a. ASREPRoasting tickets
- ASREPRoasting is a type of tickets we can request of users that do not have pre-authentication enabled.

Example:
```
$krb5asrep$23$user@domain.com:3e156ada591263b8aab0965f5aebd837$007497cb51b6c8116d6407a782ea0e1c5402b17db7afa6b05a6d30ed164a9933c754d720e279c6c573679bd27128fe77e5fea1f72334c1193c8ff0b370fadc6368bf2d49bbfdba4c5dccab95e8c8ebfdc75f438a0797dbfb2f8a1a5f4c423f9bfc1fea483342a11bd56a216f4d5158ccc4b224b52894fadfba3957dfe4b6b8f5f9f9fe422811a314768673e0c924340b8ccb84775ce9defaa3baa0910b676ad0036d13032b0dd94e3b13903cc738a7b6d00b0b3c210d1f972a6c7cae9bd3c959acf7565be528fc179118f28c679f6deeee1456f0781eb8154e18e49cb27b64bf74cd7112a0ebae2102ac
```

How to crack:
```bash
hashcat -a 0 -m 18200 hash.txt /usr/share/wordlists/rockyou.txt
```

#### b. Kerberoasting tickets
- Kerberoasting tickets are tickets we get from request service account with its Service Principal Name(SPN).

Example:
```
$krb5tgs$23$*user$realm$test/spn*$63386d22d359fe42230300d56852c9eb$891ad31d09ab89c6b3b8c5e5de6c06a7f49fd559d7a9a3c32576c8fedf705376cea582ab5938f7fc8bc741acf05c5990741b36ef4311fe3562a41b70a4ec6ecba849905f2385bb3799d92499909658c7287c49160276bca0006c350b0db4fd387adc27c01e9e9ad0c20ed53a7e6356dee2452e35eca2a6a1d1432796fc5c19d068978df74d3d0baf35c77de12456bf1144b6a750d11f55805f5a16ece2975246e2d026dce997fba34ac8757312e9e4e6272de35e20d52fb668c5ed
```

How to crack:
```
hashcat -a 0 -m 13100 hash.txt /usr/share/wordlists/rockyou.txt
```

### References
- Hashcat example hashes: https://hashcat.net/wiki/doku.php?id=example_hashes

- How to use hashcat: https://resources.infosecinstitute.com/topic/hashcat-tutorial-beginners/

