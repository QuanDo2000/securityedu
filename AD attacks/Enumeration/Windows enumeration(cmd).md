This introduces some commands in cmd we can use when get into a Windows machine.

### List users
```cmd
net users
```
### Current user’s privileges
```cmd
whoami /priv
```
### List details of a user
```cmd
net user username (e.g. `net user Administrator`
```
### Other users logged in simultaneously
```cmd
qwinsta 
```
### User groups defined on the system
```cmd
net localgroup
```
### List members of a specific group
```cmd
net localgroup groupname (e.g. net localgroup Administrators)
```
### Collecting system information
```cmd
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
```
### Searching files
```cmd
findstr /si password *.txt
```
### Patch level
```cmd
wmic qfe get Caption,Description,HotFixID,InstalledOn
```
### Network Connections
```cmd
netstat -ano
```
### Scheduled Tasks
```cmd
schtasks /query /fo LIST /v
```
### drivers
```cmd
driverquery
```
### Check anti-virus
```cmd
sc query windefend -> check specific windefend service
sc queryex type=service -> check all services
```
### Check services
```cmd
wmic service list brief
```
### View details of specific service
```cmd
sc qc RemoteMouseService
```
