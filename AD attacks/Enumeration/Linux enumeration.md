This post will list some important commands to enumerate on a linux machine.
### Get hostname
```bash
hostname
```
### Get system, kernel information
```bash
uname -a
```
### Target system process information
```bash
cat /proc/version
cat /etc/issue
```
### View processes 
```bash
ps #view process in current shell
ps axjf # view process tree
```
### Environment variables
```bash
env
```
### View user allowed sudo commands
```bash
sudo -l
```
### User's privilege level and group memberships
```bash
id
```
### Discover users
```bash
cat /etc/passwd
```
### Earlier commands
```bash
history
```
### Network config
```bash
ifconfig
ip route
```
### Connections
```bash
netstat -tulp
```
### find files
```bash
-   `find . -name flag1.txt`: find the file named “flag1.txt” in the current directory
-   `find /home -name flag1.txt`: find the file names “flag1.txt” in the /home directory
-   `find / -type d -name config`: find the directory named config under “/”
-   `find / -type f -perm 0777`: find files with the 777 permissions (files readable, writable, and executable by all users)
-   `find / -perm a=x`: find executable files
-   `find /home -user frank`: find all files for user “frank” under “/home”
-   `find / -mtime 10`: find files that were modified in the last 10 days
-   `find / -atime 10`: find files that were accessed in the last 10 day
-   `find / -cmin -60`: find files changed within the last hour (60 minutes)
-   `find / -amin -60`: find files accesses within the last hour (60 minutes)
-   `find / -size 50M`: find files with a 50 MB size
-   `find / -writable -type d 2>/dev/null` : Find world-writeable folders
-   `find / -perm -222 -type d 2>/dev/null`: Find world-writeable folders
-   `find / -perm -o w -type d 2>/dev/null`: Find world-writeable folders
-   `find / -perm -u=s -type f 2>/dev/null`: Find files with the SUID bit, which allows us to run the file with a higher privilege level than the current user.
```

