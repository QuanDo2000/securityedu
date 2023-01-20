This articles will talk about one of the windows vulnerability called Unquoted Service Path, which will attempts to exploit how Windows interpret file path to hijack the folder and inject malicious code.
### Understanding Windows Privileges and Integrity Levels

This is a core component of the Windows security architecture and works by assigning integrity
levels to application processes and securable objects. Simply put, this describes the level of
trust the operating system has in running applications or securable objects. As an example, the
configured integrity level dictates what actions an application can perform, including the ability to
read from or write to the local file system. APIs can also be blocked from specific integrity levels.
From Windows Vista onward, processes run on four integrity levels:

• System integrity process: SYSTEM rights

• High integrity process: administrative rights

• Medium integrity process: standard user rights

• Low integrity process: very restricted rights often used in sandboxed502 processes

###  User Account Control (UAC)
User Account Control (UAC)503 is an access control system introduced by Microsoft with Windows Vista and Windows Server 2008. While UAC has been discussed and investigated for quite a long
time now, it is important to stress that Microsoft does not consider it to be a security boundary.
Rather, UAC forces applications and tasks to run in the context of a non-administrative account
until an administrator authorizes elevated access. It will block installers and unauthorized
applications from running without the permissions of an administrative account and also blocks
changes to system settings. In general, the effect of UAC is that any application that wishes to
perform an operation with a potential system-wide impact, cannot do so silently. At least in theory.
It is also important to highlight the fact that UAC has two different modes: credential prompt and
consent prompt. The difference is rather simple. When a standard user wishes to perform an
administrative task such as installing a new application, and UAC is enabled, the user will see the
credential prompt

![alt text](https://www.adminbyrequest.com/Images/Blogs/UAC%20Prompt.png)

To see integrity levels in action, let’s first login as the admin user, open a command prompt, and
run the whoami /groups command:
![alt text](https://social.technet.microsoft.com/Forums/getfile/1411737)

### Mitigations

### Preferences
Exploit Unquoted Service Path: https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation
