### Permission delegation 
In Active Directory, users can delegate permission to others to perform action. Imagine an organization with 100000 employees asking to reset their passwords, and this would be a headache to the system admin. Instead, he could assign the task to the Helpdesk team to do it, which could reduce a lot of work. However, in order to control security with permission delegation is also a big challenge for the IT team, and misconfigured delagation could lead to a lot of attacks, as we will discuss here.

### Access Control Entries
Attacks using an ACL are also referred to as permission delegation exploits. The term "ACL-based attacks" refers to the ability of AD administrators to configure Access Control Entries (ACEs), which are used to fill Discretionary Access Control Lists (DACLs). With ACEs, almost any AD item may be secured. These ACEs then specify the permissions that every other AD object has against the target object, both allowed and forbidden. If these ACEs are configured incorrectly, an attacker might be able to take advantage of them. Imagine the HelpDesk team has ForceChangePassword delegation that they could use to reset password of the Domain Users group, this could be insurecure because if the attackers can compromise one of the users in the Helpdesk group, he could use it to change the Domain Admins accounts and take over the domain.

There are a lot of misconfigured ACEs that we can use to exploit the system, some of the following are:
- ForceChangePassword: We can change users password without knowing their actual password.
- AddMembers: We add users or computers to groups.
- GenericAll: We have control with the object. We can change password, SPN, or add the users to group.
- GenericWrite: We can update any non-protected parameters of the target object. This could help us to add the users to groups.
- WriteOwner: We have the ability to update the owner of the target object. We could make ourselves the owner, allowing us to gain additional permissions over the object.
- WriteDACL: We have the ability to write new ACEs to the target object's DACL. We could, for example, write an ACE that grants our account full control over the target object.
- AllExtendedRights: We can perform any action with extended AD rights to the object, including changing users' passwords.
