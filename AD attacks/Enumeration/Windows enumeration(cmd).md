
### List users
```bash
net users
```
### Current user’s privileges
```bash
whoami /priv
```
### List details of a user
```bash
net user username (e.g. `net user Administrator`
```
### Other users logged in simultaneously
```bash
qwinsta 
```
### User groups defined on the system
```bash
net localgroup
```
### List members of a specific group
```bash
net localgroup groupname (e.g. net localgroup Administrators)
```
### Collecting system information
```bash
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
```
### Searching files
```bash
findstr /si password *.txt
```
### Patch level
```bash
wmic qfe get Caption,Description,HotFixID,InstalledOn
```
### Network Connections
```bash
netstat -ano
```
### Scheduled Tasks
```bash
schtasks /query /fo LIST /v
```
### drivers
```bash
driverquery
```
### Check anti-virus
```bash
sc query windefend -> check specific windefend service
sc queryex type=service -> check all services
```
### Check services
```bash
wmic service list brief
```
### View details of specific service
```bash
sc qc RemoteMouseService
```
