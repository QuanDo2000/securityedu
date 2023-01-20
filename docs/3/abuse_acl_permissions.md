### Active Directory ADCL/ACE
Active Directory objects such as users and groups are securable objects and DACL/ACEs define who can read/modify those objects (i.e change account name, reset password, etc). 
An example of ACEs for the "Domain Admins" securable object
![alt text](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/49175i9B083F7E84DF9978)
Some of the Active Directory object permissions and types that we as attackers are interested in:
- **GenericAll** - full rights to the object (add users to a group or reset user's password)
- **GenericWrite** - update object's attributes (i.e logon script)
- **WriteOwner** - change object owner to attacker controlled user take over the object
- **WriteDACL** - modify object's ACEs and give attacker full control right over the object
- **AllExtendedRights** - ability to add user to a group or reset password
- **ForceChangePassword** - ability to change user's password
- **Self (Self-Membership)** - ability to add yourself to a group

### Enumerate Object ACLs

#### GenericAll on User
We can use Powerview script to enumerate users right in Active Directory. This command look for GenericAll rights on the AD object for the user nguye5tn:
```powershell
Get-ObjectAcl -SamAccountName nguye5tn -ResolveGUIDs | ? {$_.ActiveDirectoryRights -eq "GenericAll"}  
```

### References
Abusing AD ACLs/ACEs: https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/abusing-active-directory-acls-aces

