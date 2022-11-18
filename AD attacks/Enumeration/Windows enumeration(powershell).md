
### List users
```powershell
Get-LocalUser
```
### Current user’s privileges
```powershell
whoami /priv
```
### List details of a user
```powershell
Get-LocalUser guest | format-list *
```
### Other users logged in simultaneously
```powershell
qwinsta 
```
### User groups defined on the system
```powershell
Get-LocalGroup
```
### List members of a specific group
```powershell
Get-LocalGroupMember -Group Administrators
```
### Collecting system information
```powershell
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
```
### Searching files
```powershell
findstr /si password *.txt
```
### Patch level
```powershell
wmic qfe get Caption,Description,HotFixID,InstalledOn
```
### Network Connections
```powershell
netstat -ano
```
### Scheduled Tasks
```powershell
schtasks /query /fo LIST /v
```
### drivers
```powershell
driverquery
```
### Check anti-virus
```powershell
sc query windefend -> check specific windefend service
sc queryex type=service -> check all services
```
### Check running services
```powershell
Get-WmiObject win32_service | Select-Object Name,State,PathName | Where-Object {$_.State -Like "Running"} 
```
### Get File hash
```powershell
Get-FileHash -Algorithm MD5 file.txt
```
### List processes
```powershell
Get-process -Name notepad.exe
```
### Check OS patches
```powershell
Get-HotFix
```
### Find unquoted service path services
```powershell
Get-WmiObject win32_service |Select Name,PathName,StartMode | findstr "Program Files"
```
### Get details of service
```powershell
Get-WmiObject win32_service | ?{$_.Name -Like "unquotedsvc"} | Select Name,PathName,StartMode
```
