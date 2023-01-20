### What is DcSync
DCSync is an attack that allows an adversary to simulate the behavior of a domain controller (DC) and retrieve password data via domain replication. It leverages Microsoft Directory Replication Service Remote Protocol Microsoft Directory Replication Service Remote Protocol (MS-DRSR) to pretend to be a domain controller (DC) in order to get user credentials from another DC.

### How DcSync works
1. The initial foothold must be against a domain account with domain replication privileges; the Directory Replication Service Remote Protocol (MS-DRSR); MS-DRSR is a legitimate Active Directory service that cannot be disabled.
2. By default these privileges are limited to the: domain administrators, enterprise administrators, administrators, and domain controller groups. However, in certain cases, ordinary domain owners may have the needed permissions to launch a DCSync attack.Those roles have replication permissions that include the following rights that enable a DCSync attack: Replicating Directory Changes, Replicating Directory Changes All, and Replicating Directory Changes In Filtered Set
3. The attacker who compromised an account with adequate permissions would load Mimikatz and run the DCSync command from the lsadump module, specifying the targeted domain and user account—one example would be the KRBTGT account which is used to encrypt and sign Kerberos tickets within a domain. A domain controller would use this account to decrypt and validate those tickets, authenticating accounts to access network resources.
4. The DCSync command in Mimikatz allows an attacker to pretend to be a domain controller and retrieve password hashes from other domain controllers, without executing any code on the target. It does so over the MS-DRSR protocol via the DSGetNCChanges method that replicates updates from a naming context (NC) replica on the server.
5. In addition to the crucial NTLM password hash, earlier password hashes are also returned. An attacker who can compromise those, as well, may deduce patterns a particular user employs to set passwords and may be able to crack those offline.
6. Those passwords may also be returned in cleartext through the use of the Powersploit tool, Microsoft PowerShell scripts that enable reverse encryption and allows an attacker access to the plaintext version of the secret.

With the KRBTGT NTLM password hash in hand (AES256, AES128 hashes also), an attacker can launch a Golden Ticket attack that allows an attacker to forge valid Kerberos Ticket Granting Tickets and access any resource on an Active Directory Domain.

### DcSync with mimikatz
Once the account is delegated the ability to replicate objects, the account can run Mimikatz DCSync:

```powershell
mimikatz “lsadump::dcsync /domain:uc.edu /user:krbtgt”
```
![Exploit DcSync](https://adsecurity.org/wp-content/uploads/2015/09/Mimikatz-DCSync-UserRights-DCR-KRBTGT-Dump.jpg)


Targeting an admin account with DCSync can also provide the account’s password history (in hash format). Since there are LMHashes listed it may be possible to crack these and gain insight into the password strategy the admin uses. This may provide the attacker to guess the next password the admin uses if access is lost.
```powershell
mimikatz “lsadump::dcsync /domain:uc.edu /user:Administrator”
```
![history hash](https://adsecurity.org/wp-content/uploads/2015/09/Mimikatz-DCSync-UserRights-DCR-Administrator-500-Dump2-021.jpg)

### DcSync attack result
- DCSync attacks allow an attacker to impersonate a domain controller and request password hashes from other domain controllers
- Only accounts that have certain replication permissions with Active Directory can be targeted and used in a DCSync attack.
- DCSync attacks enable an attacker to target a domain controller without having to log on to or place code on the controller.
- Monitoring network traffic, and controlling replication permissions, are the best strategies to combat DCSync attacks.

### Mitigations

- **Audit Domain Administrator and User Permissions**: Preventing DCSync attacks demands an understanding of which accounts have domain replication permissions. With that knowledge, security staff should determine whether those rights should be revoked or limited on any of those accounts. Given that these privileges are standard for domain administrators and domain controllers, consider strictly limiting access to these groups while also strengthening authentication requirements for all group members to make offline password cracking more difficult.

- **Tighten Patching and Configuration Management**: Ensure basic security hygiene practices are followed including patch and configuration management, endpoint detection and response, and user awareness training. Basic security hygiene is the most reliable way to protect accounts from external attackers or malicious insiders.

- **Enable Network Monitoring**: Network monitoring is the best detection method. First, as pointed out by expert Sean Metcalf, all domain controller IP addresses should be identified and then added to the Replication Allow List. Once that occurs, administrators should configure intrusion detection systems to alert when DSGetNCChange requests originate outside that list of IPs.

### References
DcSync theory: https://www.qomplx.com/kerberos_dcsync_attacks_explained/

DcSync exploit: https://adsecurity.org/?p=1729
